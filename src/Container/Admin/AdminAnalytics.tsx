import { useState } from "react";
import AppCard from "../../components/AppCard";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const AdminAnalytics = () => {
    const [timeRange, setTimeRange] = useState<"weekly" | "monthly" | "yearly">("monthly");

    // Mock Data Generators for different time ranges
    const getRevenueData = (range: string) => {
        if (range === "weekly") {
            return [
                { name: "Mon", income: 4000, expenses: 2400 },
                { name: "Tue", income: 3000, expenses: 1398 },
                { name: "Wed", income: 2000, expenses: 9800 },
                { name: "Thu", income: 2780, expenses: 3908 },
                { name: "Fri", income: 1890, expenses: 4800 },
                { name: "Sat", income: 2390, expenses: 3800 },
                { name: "Sun", income: 3490, expenses: 4300 },
            ];
        } else if (range === "monthly") {
            return [
                { name: "Week 1", income: 15000, expenses: 8000 },
                { name: "Week 2", income: 18000, expenses: 9000 },
                { name: "Week 3", income: 12000, expenses: 7500 },
                { name: "Week 4", income: 21000, expenses: 11000 },
            ]
        } else {
            return [
                { name: "Jan", income: 45000, expenses: 24000 },
                { name: "Feb", income: 52000, expenses: 28000 },
                { name: "Mar", income: 48000, expenses: 22000 },
                { name: "Apr", income: 61000, expenses: 35000 },
                { name: "May", income: 55000, expenses: 30000 },
                { name: "Jun", income: 67000, expenses: 38000 },
                { name: "Jul", income: 72000, expenses: 41000 },
                { name: "Aug", income: 69000, expenses: 39000 },
                { name: "Sep", income: 78000, expenses: 45000 },
                { name: "Oct", income: 82000, expenses: 48000 },
                { name: "Nov", income: 88000, expenses: 50000 },
                { name: "Dec", income: 95000, expenses: 55000 },
            ]
        }
    };

    const userGrowthData = [
        { name: "Farmers", value: 400 },
        { name: "Buyers", value: 300 },
    ];

    const pieData = [
        { name: "Grains", value: 400 },
        { name: "Vegetables", value: 300 },
        { name: "Fruits", value: 300 },
        { name: "Dairy", value: 200 },
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <div className="space-y-6">
            {/* Controls */}
            <div className="flex items-center justify-end bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex bg-gray-100 rounded-lg p-1">
                    {(["weekly", "monthly", "yearly"] as const).map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md capitalize transition-all duration-200 ${timeRange === range
                                ? "bg-white text-purple-600 shadow-sm"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Trend - Large Area */}
                <AppCard className="lg:col-span-2 min-h-[400px]">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Revenue Trends</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={getRevenueData(timeRange)}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="income"
                                    stroke="#8884d8"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorIncome)"
                                    name="Income"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="expenses"
                                    stroke="#82ca9d"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorExpense)"
                                    name="Expenses"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </AppCard>

                {/* User Distribution */}
                <div className="space-y-6">
                    <AppCard>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Product Distribution</h3>
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {pieData.map((_entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="flex justify-center gap-4 flex-wrap text-xs text-gray-500">
                                {pieData.map((entry, index) => (
                                    <div key={entry.name} className="flex items-center">
                                        <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                                        {entry.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AppCard>

                    <AppCard>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Total Users</h3>
                        <div className="h-40 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={userGrowthData}>
                                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                                    <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </AppCard>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalytics;
