import AppCard from "../../components/AppCard";
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, Tooltip, XAxis } from 'recharts';

const FarmerDashboard = () => {
    // Mock Data
    const salesData = [
        { name: "Week 1", sales: 4000 },
        { name: "Week 2", sales: 3000 },
        { name: "Week 3", sales: 2000 },
        { name: "Week 4", sales: 2780 },
    ];

    const cropData = [
        { name: "Wheat", value: 400 },
        { name: "Rice", value: 300 },
        { name: "Corn", value: 200 },
    ];

    return (
        <div className="space-y-6">
            {/* Welcome Banner with Weather */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white text-left relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-2">Welcome back, Ramesh!</h2>
                        <p className="text-green-100 max-w-lg mb-6">Your farming dashboard gives you a complete overview of your crops, sales, and upcoming harvest schedules.</p>
                        <button className="bg-white text-green-700 font-bold py-2 px-6 rounded-xl shadow-lg hover:bg-green-50 transition-colors">
                            Manage Crops
                        </button>
                    </div>
                    <span className="material-icons-outlined absolute right-4 bottom-4 text-[150px] text-white opacity-10 rotate-12">agriculture</span>
                </div>

                {/* Weather Widget (Simple Mock) */}
                <AppCard className="bg-blue-500 text-white border-0 flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-blue-100 font-medium">Punjab, India</p>
                                <p className="text-xs text-blue-200">Today, 25 Oct</p>
                            </div>
                            <span className="material-icons-outlined text-4xl text-yellow-300">wb_sunny</span>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-4xl font-bold">28°C</h3>
                            <p className="text-blue-100 font-medium mt-1">Sunny & Clear</p>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-blue-100 relative z-10">
                        <div className="bg-white/10 rounded-lg p-2">
                            <p>Humidity</p>
                            <p className="font-bold">45%</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-2">
                            <p>Wind</p>
                            <p className="font-bold">12 km/h</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-2">
                            <p>Rain</p>
                            <p className="font-bold">0%</p>
                        </div>
                    </div>
                </AppCard>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AppCard className="group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                            <span className="material-icons-outlined">attach_money</span>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
                            <h3 className="text-2xl font-bold text-gray-800">$12,450</h3>
                        </div>
                    </div>
                </AppCard>
                <AppCard className="group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                            <span className="material-icons-outlined">shopping_bag</span>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Active Orders</p>
                            <h3 className="text-2xl font-bold text-gray-800">14</h3>
                        </div>
                    </div>
                </AppCard>
                <AppCard className="group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                            <span className="material-icons-outlined">inventory_2</span>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Products</p>
                            <h3 className="text-2xl font-bold text-gray-800">8</h3>
                        </div>
                    </div>
                </AppCard>
                <AppCard className="group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                            <span className="material-icons-outlined">star</span>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Rating</p>
                            <h3 className="text-2xl font-bold text-gray-800">4.8</h3>
                        </div>
                    </div>
                </AppCard>
            </div>

            {/* Graphs Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <AppCard className="lg:col-span-2 min-h-[300px]">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Sales Overview</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={salesData}>
                                <defs>
                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                <Area type="monotone" dataKey="sales" stroke="#10b981" fillOpacity={1} fill="url(#colorSales)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </AppCard>

                <AppCard>
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Harvest Yield</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={cropData}>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                                <Bar dataKey="value" fill="#84cc16" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </AppCard>
            </div>
        </div>
    );
};

export default FarmerDashboard;
