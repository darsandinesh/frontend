import { useState } from "react";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";

export default function AdminProfile() {
    const [activeTab, setActiveTab] = useState("details");

    const tabs = [
        { id: "details", label: "Overview", icon: "dashboard" },
        { id: "edit", label: "Edit Profile", icon: "edit_note" },
        { id: "security", label: "Security", icon: "lock_reset" },
        { id: "activity", label: "Activity Log", icon: "history" },
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            {/* Profile Banner */}
            <AppCard className="relative overflow-hidden border-0 !p-0">
                <div className="h-32 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
                <div className="px-8 pb-8 flex items-end relative">
                    <div className="-mt-12 p-1 bg-white rounded-full">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-white">
                            A
                        </div>
                    </div>
                    <div className="ml-6 mb-2 flex-1">
                        <h1 className="text-2xl font-bold text-gray-800">Admin User</h1>
                        <p className="text-gray-500 text-sm flex items-center">
                            Super Administrator • <span className="ml-1 text-gray-400">admin@agrilink.com</span>
                        </p>
                    </div>
                    <div className="mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            Active Status
                        </span>
                    </div>
                </div>
            </AppCard>

            <div className="grid grid-cols-12 gap-6">
                {/* Left Sidebar */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    <AppCard>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Role Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center p-3 bg-purple-50 rounded-xl border border-purple-100">
                                <span className="material-icons-outlined text-purple-600 mr-3 text-2xl">admin_panel_settings</span>
                                <div>
                                    <p className="text-xs text-purple-600 font-bold uppercase">Current Role</p>
                                    <p className="text-sm font-semibold text-gray-800">Super Administrator</p>
                                </div>
                            </div>

                            <div className="pt-2 space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Department</span>
                                    <span className="font-medium text-gray-800">IT & Operations</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Joined Date</span>
                                    <span className="font-medium text-gray-800">Jan 12, 2023</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Last Login</span>
                                    <span className="font-medium text-gray-800">Just Now</span>
                                </div>
                            </div>
                        </div>
                    </AppCard>

                    <AppCard className="bg-gradient-to-br from-gray-800 to-gray-900 text-white border-0">
                        <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wide mb-2">Need Help?</h3>
                        <p className="text-xs text-gray-400 mb-4">Contact the technical support team for assistance with your admin account.</p>
                        <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors border border-white/10">
                            Contact Support
                        </button>
                    </AppCard>
                </div>

                {/* Right Content */}
                <div className="col-span-12 lg:col-span-8">
                    <AppCard className="min-h-[500px]">
                        {/* Navigation Tabs */}
                        <div className="flex border-b border-gray-100 mb-6 overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                                        ? "border-violet-600 text-violet-600 bg-violet-50/50"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    <span className="material-icons-outlined mr-2 text-lg">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="p-2 animate-fadeIn">
                            {activeTab === "details" && (
                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Details</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Full Name</label>
                                                <p className="font-semibold text-gray-800 mt-1">Administrator User</p>
                                            </div>
                                            <div>
                                                <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email Address</label>
                                                <p className="font-semibold text-gray-800 mt-1">admin@agrilink.com</p>
                                            </div>
                                            <div>
                                                <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Phone</label>
                                                <p className="font-semibold text-gray-800 mt-1">+1 (555) 000-0000</p>
                                            </div>
                                            <div>
                                                <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Location</label>
                                                <p className="font-semibold text-gray-800 mt-1">Kerala, India</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Permissions</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["User Management", "System Health", "Financial Reports", "Settings Access", "Data Export"].map((perm, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium border border-gray-200">
                                                    {perm}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "edit" && (
                                <form className="space-y-6 max-w-2xl">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" defaultValue="Administrator" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" defaultValue="User" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                                        <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" defaultValue="admin@agrilink.com" />
                                    </div>
                                    <div className="pt-4 flex justify-end">
                                        <AppButton type="primary" onClick={() => alert("Changes Saved")}>
                                            Save Changes
                                        </AppButton>
                                    </div>
                                </form>
                            )}

                            {activeTab === "security" && (
                                <form className="space-y-6 max-w-lg">
                                    <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 flex items-start mb-6">
                                        <span className="material-icons-outlined text-yellow-600 mr-3">warning</span>
                                        <div>
                                            <p className="text-sm font-bold text-yellow-800">Password Requirements</p>
                                            <p className="text-xs text-yellow-700 mt-1">Minimum 8 characters, at least one uppercase letter and one number.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                        <input type="password" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                        <input type="password" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                        <input type="password" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" />
                                    </div>
                                    <div className="pt-4">
                                        <AppButton type="primary" danger>
                                            Update Password
                                        </AppButton>
                                    </div>
                                </form>
                            )}

                            {activeTab === "activity" && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-bold text-gray-800">Recent Login Activity</h3>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
                                                        <span className="material-icons-outlined">devices</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-800">MacBook Pro - Chrome</p>
                                                        <p className="text-xs text-gray-500">Kochi, Kerala • IP: 192.168.1.{10 + i}</p>
                                                    </div>
                                                </div>
                                                <span className="text-xs text-gray-400">
                                                    {i === 1 ? "Just now" : `${i} days ago`}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </AppCard>
                </div>
            </div>
        </div>
    );
}
