import React, { useState } from 'react';
import { Sprout, Droplets, Sun, Calendar, Plus, MoreHorizontal } from 'lucide-react';
import AppCard from '../../components/AppCard';
import AppButton from '../../components/AppButton';

interface Crop {
    id: string;
    name: string;
    variety: string;
    stage: 'Seeding' | 'Vegetative' | 'Flowering' | 'Harvesting';
    plantedDate: string;
    harvestDate: string;
    area: string;
    health: 'Good' | 'Average' | 'Critical';
    image: string;
}

const mockCrops: Crop[] = [
    {
        id: '1',
        name: 'Corn',
        variety: 'Sweet Golden',
        stage: 'Vegetative',
        plantedDate: '2025-11-15',
        harvestDate: '2026-02-20',
        area: '12 Acres',
        health: 'Good',
        image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: '2',
        name: 'Wheat',
        variety: 'Winter Red',
        stage: 'Seeding',
        plantedDate: '2025-12-01',
        harvestDate: '2026-04-10',
        area: '25 Acres',
        health: 'Good',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: '3',
        name: 'Tomatoes',
        variety: 'Roma',
        stage: 'Harvesting',
        plantedDate: '2025-09-10',
        harvestDate: '2025-12-25',
        area: '5 Acres',
        health: 'Average',
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

const CropManager: React.FC = () => {
    const [crops] = useState<Crop[]>(mockCrops);

    const getStageColor = (stage: string) => {
        switch (stage) {
            case 'Seeding': return 'bg-blue-100 text-blue-700';
            case 'Vegetative': return 'bg-green-100 text-green-700';
            case 'Flowering': return 'bg-purple-100 text-purple-700';
            case 'Harvesting': return 'bg-amber-100 text-amber-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getHealthColor = (health: string) => {
        switch (health) {
            case 'Good': return 'bg-green-500';
            case 'Average': return 'bg-yellow-500';
            case 'Critical': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Crops</h1>
                    <p className="text-gray-500 mt-1">Manage your active cultivation and schedules</p>
                </div>
                <AppButton type="primary" className="flex items-center gap-2">
                    <Plus size={18} />
                    Add New Crop
                </AppButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {crops.map((crop) => (
                    <div key={crop.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300">
                        <div className="h-40 overflow-hidden relative">
                            <img
                                src={crop.image}
                                alt={crop.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-gray-700 shadow-sm">
                                {crop.area}
                            </div>
                            <div className="absolute top-3 left-3">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${getStageColor(crop.stage)} border border-white/20 shadow-sm`}>
                                    {crop.stage}
                                </span>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{crop.name}</h3>
                                    <p className="text-sm text-gray-500">{crop.variety}</p>
                                </div>
                                <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                                    <div className={`w-2 h-2 rounded-full ${getHealthColor(crop.health)}`}></div>
                                    <span className="text-xs font-medium text-gray-600">{crop.health}</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <Sprout size={16} /> Planted
                                    </span>
                                    <span className="font-medium text-gray-800">{crop.plantedDate}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <Calendar size={16} /> Harvest
                                    </span>
                                    <span className="font-medium text-gray-800">{crop.harvestDate}</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex gap-2">
                                <button className="flex-1 bg-green-50 text-green-700 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                                    View Details
                                </button>
                                <button className="flex-1 bg-gray-50 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                                    Update Stage
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Upcoming Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <div className="lg:col-span-2">
                    <AppCard>
                        <h2 className="text-lg font-bold text-gray-900 mb-4 px-4 pt-2 flex items-center gap-2">
                            <Calendar className="text-green-600" size={20} />
                            Upcoming Activities
                        </h2>
                        <div className="px-4 pb-4 space-y-3">
                            {[
                                { crop: 'Corn', activity: 'Fertilizer Application', date: 'Today', type: 'urgent' },
                                { crop: 'Wheat', activity: 'Irrigation Cycle', date: 'Tomorrow', type: 'normal' },
                                { crop: 'Tomatoes', activity: 'Pest Inspection', date: 'Dec 20', type: 'normal' },
                            ].map((task, i) => (
                                <div key={i} className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-sm transition-all group">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${task.type === 'urgent' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                                        {task.type === 'urgent' ? '!' : <Droplets size={18} />}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900">{task.activity}</h4>
                                        <p className="text-xs text-gray-500">{task.crop}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className={`text-xs font-bold px-2 py-1 rounded ${task.type === 'urgent' ? 'bg-red-50 text-red-600' : 'bg-gray-200 text-gray-600'}`}>
                                            {task.date}
                                        </span>
                                    </div>
                                    <button className="ml-3 p-2 text-gray-400 hover:text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </AppCard>
                </div>

                <div>
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-6 text-white shadow-lg shadow-orange-200">
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                                <Sun size={24} className="text-white" />
                            </div>
                            <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">Today</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-1">28°C</h2>
                        <p className="text-white/90 font-medium mb-6">Sunny with periodic clouds</p>

                        <div className="grid grid-cols-2 gap-4 text-sm bg-black/5 rounded-xl p-4 backdrop-blur-sm">
                            <div>
                                <div className="opacity-75 text-xs">Humidity</div>
                                <div className="font-bold">65%</div>
                            </div>
                            <div>
                                <div className="opacity-75 text-xs">Wind</div>
                                <div className="font-bold">12 km/h</div>
                            </div>
                            <div>
                                <div className="opacity-75 text-xs">Precipitation</div>
                                <div className="font-bold">0%</div>
                            </div>
                            <div>
                                <div className="opacity-75 text-xs">UV Index</div>
                                <div className="font-bold">High</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CropManager;
