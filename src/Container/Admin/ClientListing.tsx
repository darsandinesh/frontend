import { useState } from "react";
import { Link } from "react-router-dom";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";

interface ClientListingProps {
    type: "farmer" | "buyer";
}

const ClientListing = ({ type }: ClientListingProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Mock data - replace with API call
    const clients = Array.from({ length: 10 }).map((_, i) => ({
        id: i + 1,
        name: type === "farmer" ? `Farmer Name ${i + 1}` : `Buyer Name ${i + 1}`,
        email: type === "farmer" ? `farmer${i + 1}@example.com` : `buyer${i + 1}@example.com`,
        location: "Kerala, India",
        status: i % 3 === 0 ? "Pending" : i % 3 === 1 ? "Active" : "Blocked",
        joinDate: "2023-10-15",
    }));

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "bg-green-100 text-green-700";
            case "Pending": return "bg-orange-100 text-orange-700";
            case "Blocked": return "bg-red-100 text-red-700";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 capitalize">
                    {type}s Directory
                </h1>
                <AppButton>Export List</AppButton>
            </div>

            <AppCard className="p-0 overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-100 bg-gray-50 flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <span className="material-icons-outlined absolute left-3 top-2.5 text-gray-400">search</span>
                        <input
                            type="text"
                            placeholder={`Search ${type}s...`}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500 bg-white">
                        <option value="">All Status</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="blocked">Blocked</option>
                    </select>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Joined</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {clients.map((client) => (
                                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mr-3 text-sm">
                                                {client.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-900">{client.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{client.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{client.location}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(client.status)}`}>
                                            {client.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{client.joinDate}</td>
                                    <td className="px-6 py-4 text-right">
                                        <Link
                                            to={`/admin/clients/${type}/${client.id}`}
                                            className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination placeholder */}
                <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <span>Showing 1-10 of 50 entries</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
                        <button className="px-3 py-1 border rounded bg-purple-50 text-purple-600 border-purple-200">1</button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </AppCard>
        </div>
    );
};

export default ClientListing;
