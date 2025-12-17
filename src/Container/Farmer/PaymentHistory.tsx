import React, { useState } from 'react';
import { Download, Search, TrendingUp, DollarSign, Calendar, ArrowUpRight, ArrowDownLeft, Wallet } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Transaction {
    id: string;
    description: string;
    date: string;
    amount: number;
    type: 'Credit' | 'Debit';
    status: 'Completed' | 'Pending' | 'Failed';
    reference: string;
}

const mockTransactions: Transaction[] = [
    { id: 'TRX-9921', description: 'Order #ORD-7824 Payment', date: '2025-12-08', amount: 2100.00, type: 'Credit', status: 'Completed', reference: 'Bank Transfer' },
    { id: 'TRX-9920', description: 'Monthly Subscription Fee', date: '2025-12-01', amount: 29.99, type: 'Debit', status: 'Completed', reference: 'Card ****4242' },
    { id: 'TRX-9919', description: 'Order #ORD-7820 Payment', date: '2025-11-28', amount: 850.50, type: 'Credit', status: 'Completed', reference: 'Wallet' },
    { id: 'TRX-9918', description: 'Withdrawal to Bank', date: '2025-11-25', amount: 1500.00, type: 'Debit', status: 'Pending', reference: 'Bank Transfer' },
    { id: 'TRX-9917', description: 'Order #ORD-7815 Payment', date: '2025-11-20', amount: 320.00, type: 'Credit', status: 'Completed', reference: 'Wallet' },
    { id: 'TRX-9916', description: 'Logistics Fee Refund', date: '2025-11-18', amount: 45.00, type: 'Credit', status: 'Completed', reference: 'System' },
    { id: 'TRX-9915', description: 'Marketing Boost Ad', date: '2025-11-15', amount: 100.00, type: 'Debit', status: 'Completed', reference: 'Credit Card' },
];

const chartData = [
    { name: 'Mon', income: 4000 },
    { name: 'Tue', income: 3000 },
    { name: 'Wed', income: 2000 },
    { name: 'Thu', income: 2780 },
    { name: 'Fri', income: 1890 },
    { name: 'Sat', income: 2390 },
    { name: 'Sun', income: 3490 },
];

const PaymentHistory: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [transactions] = useState<Transaction[]>(mockTransactions);
    const [filterType, setFilterType] = useState<'All' | 'Credit' | 'Debit'>('All');

    const filteredTransactions = transactions.filter(trx => {
        const matchesSearch = trx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trx.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'All' || trx.type === filterType;
        return matchesSearch && matchesType;
    });

    const totalBalance = 5430.50;
    const totalIncome = 12450.00;
    const totalWithdrawn = 4500.00;

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Payments & Finance</h1>
                    <p className="text-gray-500 mt-1">Track your earnings and transaction history</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 shadow-sm transition-colors">
                        <Download size={18} />
                        Download Report
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 shadow-md transition-colors flex items-center gap-2">
                        <Wallet size={18} />
                        Withdraw Funds
                    </button>
                </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-lg shadow-green-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-green-500/30 rounded-lg">
                            <Wallet size={24} className="text-green-50" />
                        </div>
                        <span className="text-xs font-semibold bg-green-500/30 px-2 py-1 rounded text-green-50">Available</span>
                    </div>
                    <div className="text-green-100 text-sm font-medium">Current Balance</div>
                    <div className="text-3xl font-bold mt-1">${totalBalance.toFixed(2)}</div>
                    <div className="mt-4 pt-4 border-t border-green-500/30 flex items-center text-xs text-green-100">
                        <span className="bg-green-500 px-1.5 py-0.5 rounded text-white mr-2">+15%</span>
                        Last updated just now
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <DollarSign size={24} className="text-blue-600" />
                        </div>
                        <span className="text-xs font-semibold bg-green-50 text-green-600 px-2 py-1 rounded">+2.5%</span>
                    </div>
                    <div className="text-gray-500 text-sm font-medium">Total Income</div>
                    <div className="text-3xl font-bold text-gray-900 mt-1">${totalIncome.toFixed(2)}</div>
                    <div className="mt-4 text-xs text-gray-400">
                        Total earnings for this year
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-amber-50 rounded-lg">
                            <ArrowUpRight size={24} className="text-amber-600" />
                        </div>
                    </div>
                    <div className="text-gray-500 text-sm font-medium">Total Withdrawn</div>
                    <div className="text-3xl font-bold text-gray-900 mt-1">${totalWithdrawn.toFixed(2)}</div>
                    <div className="mt-4 text-xs text-gray-400">
                        Funds transferred to bank
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Transaction List */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            Transaction History
                        </h2>
                        <div className="flex gap-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-9 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <select
                                className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value as any)}
                            >
                                <option value="All">All Type</option>
                                <option value="Credit">Incoming</option>
                                <option value="Debit">Outgoing</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
                                <tr>
                                    <th className="px-6 py-3">Transaction</th>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Amount</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Reference</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredTransactions.length > 0 ? (
                                    filteredTransactions.map((trx) => (
                                        <tr key={trx.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-full ${trx.type === 'Credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                                        {trx.type === 'Credit' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900">{trx.description}</div>
                                                        <div className="text-xs text-gray-500">{trx.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{trx.date}</td>
                                            <td className={`px-6 py-4 font-bold text-sm ${trx.type === 'Credit' ? 'text-green-600' : 'text-gray-900'}`}>
                                                {trx.type === 'Credit' ? '+' : '-'}${trx.amount.toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${trx.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                        trx.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                                                            'bg-red-100 text-red-700'
                                                    }`}>
                                                    {trx.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{trx.reference}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                                            No transactions found matching your criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mini Charts & Widgets */}
                <div className="space-y-6">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <TrendingUp size={18} className="text-green-600" />
                                Income Trend
                            </h3>
                            <select className="text-xs bg-gray-50 border-none rounded text-gray-500">
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div className="h-48 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                                    <YAxis hide />
                                    <Tooltip
                                        cursor={{ fill: '#f0fdf4' }}
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    />
                                    <Bar dataKey="income" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Calendar size={18} className="text-green-600" />
                            Upcoming Payouts
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                <div className="bg-white p-2 text-center rounded shadow-sm min-w-[50px]">
                                    <div className="text-xs text-red-500 font-bold uppercase">DEC</div>
                                    <div className="text-lg font-bold text-gray-800">20</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">Weekly Settlement</div>
                                    <div className="text-xs text-gray-500">Estimated: $1,250.00</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                <div className="bg-white p-2 text-center rounded shadow-sm min-w-[50px]">
                                    <div className="text-xs text-red-500 font-bold uppercase">JAN</div>
                                    <div className="text-lg font-bold text-gray-800">01</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">Monthly Bonus</div>
                                    <div className="text-xs text-gray-500">Estimated: $150.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
