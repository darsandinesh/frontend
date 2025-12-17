import { useState } from "react";
import { useParams } from "react-router-dom";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";

const ClientDetails = () => {
    const { type, id } = useParams();
    const [activeTab, setActiveTab] = useState<"profile" | "transactions" | "requests">("profile");

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            {/* Profile Banner */}
            <AppCard className="relative overflow-hidden border-0 !p-0">
                <div className={`h-32 bg-gradient-to-r ${type === 'farmer' ? 'from-green-600 to-emerald-600' : 'from-blue-600 to-cyan-600'}`}></div>
                <div className="px-8 pb-8 flex items-end relative">
                    <div className="-mt-12 p-1 bg-white rounded-full">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-white ${type === 'farmer' ? 'bg-gradient-to-tr from-green-500 to-emerald-700' : 'bg-gradient-to-tr from-blue-500 to-cyan-700'}`}>
                            {type === 'farmer' ? 'F' : 'B'}
                        </div>
                    </div>
                    <div className="ml-6 mb-2 flex-1">
                        <h1 className="text-2xl font-bold text-gray-800">User Name</h1> {/* Mock Name */}
                        <p className="text-gray-500 text-sm capitalize flex items-center">
                            {type} #{id} • <span className="ml-1 text-gray-400">Joined Oct 2023</span>
                        </p>
                    </div>
                    <div className="mb-2 flex gap-3">
                        <AppButton className="bg-white text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 shadow-sm" onClick={() => alert("Block User")}>
                            Block User
                        </AppButton>
                        <AppButton type="primary" onClick={() => alert("Message Sent")}>
                            Send Message
                        </AppButton>
                    </div>
                </div>
            </AppCard>

            <div className="grid grid-cols-12 gap-6">
                {/* Left Sidebar */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    <AppCard>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="material-icons-outlined text-gray-400 mr-3">email</span>
                                <span className="text-gray-700 text-sm">user@example.com</span>
                            </div>
                            <div className="flex items-center">
                                <span className="material-icons-outlined text-gray-400 mr-3">phone</span>
                                <span className="text-gray-700 text-sm">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center">
                                <span className="material-icons-outlined text-gray-400 mr-3">location_on</span>
                                <span className="text-gray-700 text-sm">123 Farm Road, Kerala</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Status</h3>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                Verified Account
                            </span>
                        </div>
                    </AppCard>
                </div>

                {/* Right Content */}
                <div className="col-span-12 lg:col-span-8">
                    <AppCard className="min-h-[500px]">
                        {/* Tabs */}
                        <div className="flex border-b border-gray-100 mb-6">
                            {[
                                { id: "profile", label: "Overview", icon: "dashboard" },
                                { id: "transactions", label: "Transactions", icon: "receipt_long" },
                                { id: "requests", label: "Requests", icon: "ios_share" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id
                                        ? "border-purple-600 text-purple-600 bg-purple-50/50"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    <span className="material-icons-outlined mr-2 text-lg">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="p-2">
                            {activeTab === "profile" && (
                                <div className="space-y-8 animate-fadeIn">
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-4 text-lg">KYC Documents</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-purple-200 hover:shadow-sm transition-all bg-gray-50/50">
                                                <div className="flex items-center">
                                                    <span className="material-icons-outlined text-red-500 mr-3 text-3xl">picture_as_pdf</span>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-800">Aadhar_Card_Front.pdf</p>
                                                        <p className="text-xs text-gray-400">2.4 MB • Uploaded Oct 15</p>
                                                    </div>
                                                </div>
                                                <button className="text-gray-400 hover:text-purple-600"><span className="material-icons-outlined">visibility</span></button>
                                            </div>
                                            <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-purple-200 hover:shadow-sm transition-all bg-gray-50/50">
                                                <div className="flex items-center">
                                                    <span className="material-icons-outlined text-blue-500 mr-3 text-3xl">image</span>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-800">Pan_Card.jpg</p>
                                                        <p className="text-xs text-gray-400">1.8 MB • Uploaded Oct 15</p>
                                                    </div>
                                                </div>
                                                <button className="text-gray-400 hover:text-purple-600"><span className="material-icons-outlined">visibility</span></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-4 text-lg">Bank Information</h3>
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                    <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Bank Name</label>
                                                    <p className="font-semibold text-gray-800 mt-1">State Bank of India</p>
                                                </div>
                                                <div>
                                                    <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Account Number</label>
                                                    <p className="font-semibold text-gray-800 mt-1 font-mono tracking-wide">XXXX-XXXX-8822</p>
                                                </div>
                                                <div>
                                                    <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">IFSC Code</label>
                                                    <p className="font-semibold text-gray-800 mt-1 font-mono">SBIN0004512</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "transactions" && (
                                <div className="rounded-xl border border-gray-100 overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                                            <tr>
                                                <th className="px-6 py-4">Transaction ID</th>
                                                <th className="px-6 py-4">Date</th>
                                                <th className="px-6 py-4">Amount</th>
                                                <th className="px-6 py-4 text-right">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 bg-white">
                                            {[1, 2, 3, 4].map(i => (
                                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 font-mono">TXN-883{i}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">Dec {10 + i}, 2023</td>
                                                    <td className="px-6 py-4 text-sm font-bold text-gray-900">$5{i}0.00</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                            Completed
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {activeTab === "requests" && (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                                        <span className="material-icons-outlined text-3xl">inbox</span>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">No pending requests</h3>
                                    <p className="text-gray-500 mt-1 max-w-sm">There are no active requests or inquiries from this user at the moment.</p>
                                </div>
                            )}
                        </div>
                    </AppCard>
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;
