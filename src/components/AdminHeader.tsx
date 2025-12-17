import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminHeader = () => {
    const location = useLocation();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    // Derive Page Title
    const path = location.pathname;
    let pageTitle = "Dashboard";

    if (path.includes("/admin/analytics")) pageTitle = "Analytics";
    else if (path.includes("/admin/settings")) pageTitle = "Settings";
    else if (path.includes("/admin/management")) pageTitle = "Admin Management";
    else if (path.includes("/admin/requests")) {
        // If it looks like /admin/requests/123, show "Review Request", else "Registration Requests"
        pageTitle = path.match(/\/admin\/requests\/.+/) ? "Review Request" : "Registration Requests";
    }
    else if (path.includes("/admin/profile")) pageTitle = "My Profile";
    else if (path.includes("/admin/health")) pageTitle = "System Health";
    else if (path.includes("/admin/clients/farmers")) pageTitle = "Farmers Directory";
    else if (path.includes("/admin/clients/buyers")) pageTitle = "Buyers Directory";
    else if (path.match(/\/admin\/clients\/[^/]+\/[^/]+/)) pageTitle = "Client Details";
    else if (path === "/admin/dashboard") pageTitle = "Overview";

    // Dummy Notifications
    const notifications = [
        { id: 1, title: "New Farmer Registration", desc: "John Doe registered as a farmer.", time: "5m ago", icon: "person_add", color: "bg-green-100 text-green-600" },
        { id: 2, title: "Order #1234 Received", desc: "Buyer Smith placed a bulk order.", time: "1h ago", icon: "shopping_cart", color: "bg-blue-100 text-blue-600" },
        { id: 3, title: "System Alert", desc: "Database backup completed successfully.", time: "3h ago", icon: "dns", color: "bg-purple-100 text-purple-600" },
        { id: 4, title: "Verification Pending", desc: "User Jane needs KYC verification.", time: "1d ago", icon: "verified_user", color: "bg-yellow-100 text-yellow-600" },
    ];

    return (
        <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight capitalize">
                {pageTitle === "Dashboard" ? "Overview" : pageTitle}
            </h1>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">

                {/* Notifications Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsNotificationsOpen(true)}
                    onMouseLeave={() => setIsNotificationsOpen(false)}
                >
                    <button className="relative text-gray-400 hover:text-purple-600 transition-colors pt-1 p-2 rounded-full hover:bg-gray-50">
                        <span className="material-icons-outlined text-2xl">notifications</span>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>

                    {/* Notification Box */}
                    {/* Added z-50, fixed scroll height, added invisible bridge div for stable hover */}
                    <div className={`absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 transform origin-top-right z-50 ${isNotificationsOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                        }`}>
                        <div className="p-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/80 backdrop-blur-sm sticky top-0 z-10">
                            <h3 className="font-semibold text-gray-800">Notifications</h3>
                            <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">4 New</span>
                        </div>
                        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {notifications.map((notif) => (
                                <div key={notif.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer flex gap-4 group">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notif.color} group-hover:scale-110 transition-transform`}>
                                        <span className="material-icons-outlined text-lg">{notif.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm font-semibold text-gray-800">{notif.title}</p>
                                            <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">{notif.time}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{notif.desc}</p>
                                    </div>
                                </div>
                            ))}
                            {/* Extra dummy notifications to force scroll */}
                            {[1, 2, 3].map(i => (
                                <div key={`dummy-${i}`} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer flex gap-4 opacity-50">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gray-100 text-gray-400">
                                        <span className="material-icons-outlined text-lg">history</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-700">Old Notification {i}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">This is an older notification to demonstrate scrolling behavior.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-3 text-center border-t border-gray-50 bg-white sticky bottom-0 z-10">
                            <button className="text-xs font-medium text-gray-500 hover:text-purple-600 transition-colors w-full py-1">
                                View All Notifications
                            </button>
                        </div>
                    </div>
                </div>

                {/* Profile Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsProfileOpen(true)}
                    onMouseLeave={() => setIsProfileOpen(false)}
                >
                    <div className="flex items-center gap-3 cursor-pointer py-2 px-2 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-semibold text-gray-800">Administrator</p>
                            <p className="text-xs text-gray-500">Super Admin</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5 shadow-md shadow-purple-200">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                <span className="font-bold text-gray-800">A</span>
                            </div>
                        </div>
                        <span className="material-icons-outlined text-gray-400 text-lg">expand_more</span>
                    </div>

                    {/* Dropdown Menu */}
                    <div className={`absolute right-0 top-full mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 transition-all duration-200 transform origin-top-right z-50 ${isProfileOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                        }`}>
                        <div className="px-4 py-4 border-b border-gray-100 mb-2 bg-gradient-to-r from-purple-50 to-pink-50 mx-2 rounded-lg">
                            <p className="text-sm font-bold text-gray-900">Admin User</p>
                            <p className="text-xs text-gray-500 truncate">admin@agrilink.com</p>
                        </div>

                        <div className="px-2 space-y-1">
                            <Link to="/admin/profile" className="flex items-center px-4 py-2.5 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                                <span className="material-icons-outlined mr-3 text-lg text-gray-400 group-hover:text-purple-500">person</span>
                                My Profile
                            </Link>
                            <Link to="/admin/settings" className="flex items-center px-4 py-2.5 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                                <span className="material-icons-outlined mr-3 text-lg text-gray-400 group-hover:text-purple-500">settings</span>
                                Settings
                            </Link>
                        </div>

                        <div className="h-px bg-gray-100 my-2 mx-2"></div>

                        <div className="px-2 pb-1">
                            <button
                                onClick={() => alert("Logout logic here")}
                                className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left"
                            >
                                <span className="material-icons-outlined mr-3 text-lg">logout</span>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
