import React, { useState } from 'react';
import { Eye, Search, Filter, MoreVertical } from 'lucide-react';

interface Order {
    id: string;
    customer: string;
    date: string;
    total: number;
    status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    items: number;
    paymentStatus: 'Paid' | 'Pending' | 'Refunded';
}

const mockOrders: Order[] = [
    { id: 'ORD-7829', customer: 'Fresh Mart Ltd', date: '2025-12-14', total: 450.00, status: 'Pending', items: 12, paymentStatus: 'Pending' },
    { id: 'ORD-7828', customer: 'Green Grocers', date: '2025-12-13', total: 1250.50, status: 'Processing', items: 45, paymentStatus: 'Paid' },
    { id: 'ORD-7827', customer: 'City Supermarket', date: '2025-12-12', total: 890.00, status: 'Shipped', items: 28, paymentStatus: 'Paid' },
    { id: 'ORD-7826', customer: 'Eco Foods', date: '2025-12-10', total: 320.25, status: 'Delivered', items: 8, paymentStatus: 'Paid' },
    { id: 'ORD-7825', customer: 'Local Market', date: '2025-12-09', total: 150.00, status: 'Cancelled', items: 5, paymentStatus: 'Refunded' },
    { id: 'ORD-7824', customer: 'Fresh Mart Ltd', date: '2025-12-08', total: 2100.00, status: 'Delivered', items: 60, paymentStatus: 'Paid' },
];

const OrderManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('All');
    const [orders, setOrders] = useState<Order[]>(mockOrders);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Processing': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Shipped': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
            case 'Delivered': return 'bg-green-100 text-green-800 border-green-200';
            case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };



    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        ));
    };

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
                    <p className="text-gray-500 mt-1">View and manage your incoming orders</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 shadow-sm transition-colors">
                        <Filter size={18} />
                        Filter
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 shadow-md transition-colors">
                        Export Orders
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-gray-500 text-sm font-medium">Total Orders</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">{orders.length}</div>
                    <div className="text-green-600 text-xs mt-2 flex items-center">
                        <span className="bg-green-100 px-1.5 py-0.5 rounded mr-1">↑ 12%</span> from last month
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-gray-500 text-sm font-medium">Pending Output</div>
                    <div className="text-2xl font-bold text-amber-600 mt-1">
                        {orders.filter(o => o.status === 'Pending').length}
                    </div>
                    <div className="text-gray-400 text-xs mt-2">Requires attention</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-gray-500 text-sm font-medium">Processing</div>
                    <div className="text-2xl font-bold text-blue-600 mt-1">
                        {orders.filter(o => o.status === 'Processing').length}
                    </div>
                    <div className="text-gray-400 text-xs mt-2">In progress</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-gray-500 text-sm font-medium">Completed</div>
                    <div className="text-2xl font-bold text-green-600 mt-1">
                        {orders.filter(o => o.status === 'Delivered').length}
                    </div>
                    <div className="text-gray-400 text-xs mt-2">Successfully delivered</div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between bg-gray-50/50">
                    <div className="relative max-w-md w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by Order ID or Customer..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                        {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setStatusFilter(status)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${statusFilter === status
                                    ? 'bg-green-100 text-green-800 border-green-200 border'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                                <th className="p-4 font-semibold">Order ID</th>
                                <th className="p-4 font-semibold">Customer</th>
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold">Total</th>
                                <th className="p-4 font-semibold">Payment</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50/80 transition-colors">
                                        <td className="p-4 font-medium text-green-700">{order.id}</td>
                                        <td className="p-4">
                                            <div className="font-medium text-gray-900">{order.customer}</div>
                                            <div className="text-gray-400 text-xs">{order.items} items</div>
                                        </td>
                                        <td className="p-4 text-gray-600 font-medium">{order.date}</td>
                                        <td className="p-4 font-bold text-gray-800">${order.total.toFixed(2)}</td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded text-xs font-semibold ${order.paymentStatus === 'Paid' ? 'bg-green-50 text-green-700 border border-green-100' :
                                                order.paymentStatus === 'Refunded' ? 'bg-gray-100 text-gray-600 border border-gray-200' :
                                                    'bg-amber-50 text-amber-700 border border-amber-100'
                                                }`}>
                                                {order.paymentStatus}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <select
                                                value={order.status}
                                                onChange={(e) => handleStatusChange(order.id, e.target.value as Order['status'])}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold border flex w-fit items-center appearance-none cursor-pointer outline-none ${getStatusColor(order.status)}`}
                                                style={{ paddingRight: '20px', backgroundImage: 'none' }}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Processing">Processing</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="text-gray-400 hover:text-green-600 transition-colors p-1 rounded-md hover:bg-green-50">
                                                    <Eye size={18} />
                                                </button>
                                                <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100">
                                                    <MoreVertical size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="p-10 text-center text-gray-400">
                                        <div className="flex flex-col items-center justify-center">
                                            <Search size={48} className="mb-4 text-gray-200" />
                                            <p className="text-lg font-medium text-gray-500">No orders found</p>
                                            <p className="text-sm text-gray-400">Try adjusting your search or filters</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-sm text-gray-500">
                    <div>Showing {filteredOrders.length} of {orders.length} orders</div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderManagement;
