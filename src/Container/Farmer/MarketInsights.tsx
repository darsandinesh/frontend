import React from 'react';
import { TrendingUp, TrendingDown, RefreshCw, Newspaper, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AppCard from '../../components/AppCard';

const priceData = [
    { month: 'Jan', wheat: 320, corn: 210, rice: 450 },
    { month: 'Feb', wheat: 335, corn: 215, rice: 455 },
    { month: 'Mar', wheat: 330, corn: 220, rice: 460 },
    { month: 'Apr', wheat: 345, corn: 225, rice: 458 },
    { month: 'May', wheat: 350, corn: 240, rice: 465 },
    { month: 'Jun', wheat: 360, corn: 235, rice: 470 },
];

const newsFeed = [
    {
        title: "Global Wheat Prices Surge Amid Supply Concerns",
        source: "AgriNews Global",
        time: "2 hours ago",
        tag: "Market Trend"
    },
    {
        title: "New Government Subsidies for Organic Fertilizers Announced",
        source: "Farm Policy Watch",
        time: "5 hours ago",
        tag: "Policy"
    },
    {
        title: "Monsoon Forecast Predicts Above-Average Rainfall",
        source: "Weather Central",
        time: "1 day ago",
        tag: "Weather"
    }
];

const MarketInsights: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Market Insights</h1>
            <p className="text-gray-500">Track real-time commodity prices and agricultural news</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Wheat (Per Quintal)</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">₹2,450.00</h3>
                        </div>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center">
                            <TrendingUp size={14} className="mr-1" /> +2.4%
                        </span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Corn (Per Quintal)</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">₹1,820.00</h3>
                        </div>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center">
                            <TrendingUp size={14} className="mr-1" /> +1.8%
                        </span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Rice (Per Quintal)</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">₹3,100.00</h3>
                        </div>
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold flex items-center">
                            <TrendingDown size={14} className="mr-1" /> -0.5%
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <AppCard>
                        <div className="flex justify-between items-center mb-6 px-4 pt-2">
                            <h2 className="text-lg font-bold text-gray-900">Price Trends (6 Months)</h2>
                            <button className="text-gray-400 hover:text-green-600 transition-colors bg-gray-50 p-2 rounded-lg">
                                <RefreshCw size={18} />
                            </button>
                        </div>
                        <div className="h-80 w-full px-4 pb-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={priceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorWheat" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    />
                                    <Area type="monotone" dataKey="wheat" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorWheat)" name="Wheat" />
                                    <Area type="monotone" dataKey="corn" stroke="#f59e0b" strokeWidth={3} fillOpacity={0} fill="url(#colorWheat)" name="Corn" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </AppCard>
                </div>

                <div>
                    <AppCard>
                        <h2 className="text-lg font-bold text-gray-900 mb-4 px-4 pt-2 flex items-center gap-2">
                            <Newspaper className="text-green-600" size={20} />
                            Latest Agri News
                        </h2>
                        <div className="divide-y divide-gray-100 px-4 pb-4">
                            {newsFeed.map((news, index) => (
                                <div key={index} className="py-4 first:pt-0 last:pb-0 hover:bg-gray-50 transition-colors p-2 rounded-lg cursor-pointer group">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                            {news.tag}
                                        </span>
                                        <span className="text-xs text-gray-400">{news.time}</span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-gray-900 leading-snug mb-1 group-hover:text-green-700 transition-colors">
                                        {news.title}
                                    </h4>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-gray-500 font-medium">{news.source}</span>
                                        <ArrowUpRight size={14} className="text-gray-300 group-hover:text-green-600" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                            <button className="text-green-600 text-sm font-bold hover:text-green-700 w-full text-center py-2">
                                View All News
                            </button>
                        </div>
                    </AppCard>
                </div>
            </div>
        </div>
    );
};

export default MarketInsights;
