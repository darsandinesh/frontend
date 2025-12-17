import AppCard from "../../components/AppCard";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
    // Mock data for tiny sparkline charts
    const data1 = [
        { v: 10 }, { v: 15 }, { v: 12 }, { v: 18 }, { v: 24 }, { v: 20 }, { v: 28 }
    ];
    const data2 = [
        { v: 28 }, { v: 20 }, { v: 24 }, { v: 18 }, { v: 12 }, { v: 15 }, { v: 10 }
    ];

    return (
        <div className="space-y-6">

            {/* Stats Cards with Graphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AppCard className="!p-0 overflow-hidden relative group">
                    <div className="p-6 pb-2 relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                                <span className="material-icons-outlined">people</span>
                            </div>
                            <span className="text-sm font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-lg">+12.5%</span>
                        </div>
                        <p className="text-gray-500 text-sm font-medium">Total Farmers</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">2,543</h3>
                    </div>
                    <div className="h-16 w-full -mb-1 opacity-50 group-hover:opacity-100 transition-opacity">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data1}>
                                <Area type="monotone" dataKey="v" stroke="#8b5cf6" fill="#ddd6fe" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </AppCard>

                <AppCard className="!p-0 overflow-hidden relative group">
                    <div className="p-6 pb-2 relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                                <span className="material-icons-outlined">shopping_bag</span>
                            </div>
                            <span className="text-sm font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-lg">+8.2%</span>
                        </div>
                        <p className="text-gray-500 text-sm font-medium">Total Buyers</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">1,250</h3>
                    </div>
                    <div className="h-16 w-full -mb-1 opacity-50 group-hover:opacity-100 transition-opacity">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data1}>
                                <Area type="monotone" dataKey="v" stroke="#3b82f6" fill="#dbeafe" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </AppCard>

                <AppCard className="!p-0 overflow-hidden relative group">
                    <div className="p-6 pb-2 relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                                <span className="material-icons-outlined">pending_actions</span>
                            </div>
                            <span className="text-sm font-semibold text-red-500 bg-red-50 px-2 py-1 rounded-lg">-2.4%</span>
                        </div>
                        <p className="text-gray-500 text-sm font-medium">Pending Requests</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">45</h3>
                    </div>
                    <div className="h-16 w-full -mb-1 opacity-50 group-hover:opacity-100 transition-opacity">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data2}>
                                <Area type="monotone" dataKey="v" stroke="#f59e0b" fill="#fef3c7" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </AppCard>

                <AppCard className="!p-0 overflow-hidden relative group">
                    <div className="p-6 pb-2 relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-green-100 p-3 rounded-xl text-green-600">
                                <span className="material-icons-outlined">payments</span>
                            </div>
                            <span className="text-sm font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-lg">+24.8%</span>
                        </div>
                        <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">$45.2k</h3>
                    </div>
                    <div className="h-16 w-full -mb-1 opacity-50 group-hover:opacity-100 transition-opacity">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data1}>
                                <Area type="monotone" dataKey="v" stroke="#10b981" fill="#d1fae5" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </AppCard>
            </div>

            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AppCard>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-800">Recent Registrations</h3>
                        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                                    <span className="material-icons-outlined text-gray-500 text-lg">person</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-gray-800">New User {i}</p>
                                    <p className="text-xs text-gray-500">Farmer • Just now</p>
                                </div>
                                <span className="text-xs text-gray-400">2 min ago</span>
                            </div>
                        ))}
                    </div>
                </AppCard>

                <AppCard>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-800">Recent Transactions</h3>
                        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer justify-between">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 text-green-600">
                                        <span className="material-icons-outlined text-lg">attach_money</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800">Payment Received</p>
                                        <p className="text-xs text-gray-500">Order #123{i}</p>
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-green-600">+$2{i}0.00</p>
                            </div>
                        ))}
                    </div>
                </AppCard>
            </div>
        </div>
    );
};

export default AdminDashboard;
