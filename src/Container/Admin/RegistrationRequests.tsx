import { useState } from "react";
import { Link } from "react-router-dom";
import AppCard from "../../components/AppCard";

const RegistrationRequests = () => {
    const [activeTab, setActiveTab] = useState("farmers");

    // Mock Data
    const farmerRequests = [
        { id: 101, name: "Ramesh Kumar", type: "Farmer", date: "2023-10-25", location: "Punjab, India", status: "Pending" },
        { id: 102, name: "Suresh Patel", type: "Farmer", date: "2023-10-24", location: "Gujarat, India", status: "Pending" },
    ];

    const buyerRequests = [
        { id: 201, name: "Fresh Foods Ltd", type: "Buyer", date: "2023-10-26", location: "Mumbai, India", status: "Pending" },
        { id: 202, name: "Green Grocers", type: "Buyer", date: "2023-10-23", location: "Delhi, India", status: "Pending" },
    ];

    const requests = activeTab === "farmers" ? farmerRequests : buyerRequests;

    return (
        <div className="space-y-6">
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
                <button
                    onClick={() => setActiveTab("farmers")}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "farmers"
                        ? "bg-white text-green-600 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Farmer Requests
                </button>
                <button
                    onClick={() => setActiveTab("buyers")}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "buyers"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Buyer Requests
                </button>
            </div>

            <AppCard>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Submitted On</th>
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</th>
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {requests.map((req) => (
                                <tr key={req.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 border ${activeTab === 'farmers' ? "bg-green-50 text-green-600 border-green-100" : "bg-blue-50 text-blue-600 border-blue-100"}`}>
                                                {req.name.charAt(0)}
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">{req.name}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="text-sm text-gray-600">{req.type}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="text-sm text-gray-600">{req.date}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="text-sm text-gray-600">{req.location}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                                            {req.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <Link
                                            to={`/admin/requests/${req.id}?type=${activeTab === 'farmers' ? 'farmer' : 'buyer'}`}
                                            className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-purple-600 transition-colors shadow-sm"
                                        >
                                            View Details
                                            <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {requests.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="py-8 text-center text-gray-400 text-sm">
                                        No pending requests found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </AppCard>
        </div>
    );
};

export default RegistrationRequests;
