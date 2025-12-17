import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

const Sidebar = ({ isCollapsed, toggleCollapse }: SidebarProps) => {
    const location = useLocation();
    const [isClientsOpen, setIsClientsOpen] = useState(true);

    // If collapsed, clicking logic might differ, but for now we follow hover pattern for submenus
    const isActive = (path: string) => location.pathname.startsWith(path);

    return (
        <div
            className={`${isCollapsed ? "w-20" : "w-72"
                } bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col shadow-2xl z-20 sticky top-0 transition-all duration-300 ease-in-out`}
        >
            {/* Brand Header */}
            <div className={`h-20 flex items-center ${isCollapsed ? "justify-center px-0" : "px-8"} border-b border-gray-700/50 backdrop-blur-sm transition-all duration-300`}>
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20 shrink-0">
                    <span className="material-icons-outlined text-white text-2xl">agriculture</span>
                </div>
                <span className={`ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                    }`}>
                    AgriLink
                </span>
            </div>

            <nav className={`flex-1 py-8 space-y-2 overflow-y-auto ${isCollapsed ? "px-2" : "px-4"} transition-all duration-300`}>
                {!isCollapsed && (
                    <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 whitespace-nowrap">
                        Main Menu
                    </h3>
                )}

                {/* Dashboard */}
                <Link
                    to="/admin/dashboard"
                    title={isCollapsed ? "Dashboard" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname === "/admin/dashboard"
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${location.pathname === "/admin/dashboard" ? "text-white" : "text-gray-500 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>dashboard</span>

                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Dashboard</span>
                </Link>


                {/* Clients Section (Complex interaction) */}
                <div className="mt-2 relative group/clients">
                    <button
                        onClick={() => !isCollapsed && setIsClientsOpen(!isClientsOpen)}
                        className={`w-full group flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 ${isCollapsed ? "justify-center" : "justify-between"
                            } ${isActive("/admin/clients") ? "text-white bg-white/5" : ""}`}
                    >
                        <div className="flex items-center">
                            <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/admin/clients") || isClientsOpen ? "text-white" : "text-gray-500 group-hover:text-white"
                                } ${!isCollapsed ? "mr-3" : ""}`}>people</span>
                            <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                                }`}>Clients</span>
                        </div>
                        {!isCollapsed && (
                            <span
                                className={`material-icons-outlined transform transition-transform duration-300 text-gray-500 ${isClientsOpen ? "rotate-180 text-white" : ""
                                    }`}
                            >
                                expand_more
                            </span>
                        )}
                    </button>

                    {/* Submenu Logic: 
              - If NOT collapsed: Normal Accordion 
              - If collapsed: Hover Flyout 
          */}
                    {!isCollapsed ? (
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isClientsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}>
                            <div className="ml-4 pl-4 border-l border-gray-700/50 mt-1 space-y-1">
                                <Link
                                    to="/admin/clients/farmers"
                                    className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${location.pathname.includes("/admin/clients/farmers")
                                        ? "text-purple-300 bg-purple-500/10 font-medium translate-x-1"
                                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5 hover:translate-x-1"
                                        }`}
                                >
                                    Farmers Directory
                                </Link>
                                <Link
                                    to="/admin/clients/buyers"
                                    className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${location.pathname.includes("/admin/clients/buyers")
                                        ? "text-purple-300 bg-purple-500/10 font-medium translate-x-1"
                                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5 hover:translate-x-1"
                                        }`}
                                >
                                    Buyers Directory
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* Flyout Menu for Collapsed State */
                        <div className="absolute left-full top-0 ml-2 w-48 bg-gray-800 rounded-xl shadow-xl p-2 opacity-0 invisible group-hover/clients:opacity-100 group-hover/clients:visible transition-all duration-200 z-50">
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2 pt-1">Clients</div>
                            <Link to="/admin/clients/farmers" className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                                Farmers Directory
                            </Link>
                            <Link to="/admin/clients/buyers" className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                                Buyers Directory
                            </Link>
                        </div>
                    )}
                </div>

                {/* Analytics */}
                <Link
                    to="/admin/analytics"
                    title={isCollapsed ? "Analytics" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/admin/analytics")
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/admin/analytics") ? "text-white" : "text-gray-500 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>trending_up</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Analytics</span>
                </Link>

                {/* Health Dashboard */}
                <Link
                    to="/admin/health"
                    title={isCollapsed ? "System Health" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/admin/health")
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/admin/health") ? "text-white" : "text-gray-500 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>monitor_heart</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>System Health</span>
                </Link>
                {!isCollapsed && (
                    <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-4 whitespace-nowrap">
                        Management
                    </h3>
                )}
                {/* Registration Requests */}
                <Link
                    to="/admin/requests"
                    title={isCollapsed ? "Requests" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/admin/requests")
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <div className="relative">
                        <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/admin/requests") ? "text-white" : "text-gray-500 group-hover:text-white"
                            } ${!isCollapsed ? "mr-3" : ""}`}>playlist_add_check</span>
                        {/* Notification Badge */}
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white font-bold items-center justify-center">3</span>
                        </span>
                    </div>

                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Requests</span>
                </Link>

                {/* Admin Management */}
                <Link
                    to="/admin/management"
                    title={isCollapsed ? "Admin Management" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/admin/management")
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/admin/management") ? "text-white" : "text-gray-500 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>admin_panel_settings</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Admins</span>
                </Link>

            </nav>

            {/* Collapse Toggle Button (Bottom) */}
            <div className={`p-4 border-t border-gray-700/50 flex ${isCollapsed ? "justify-center" : "justify-end"}`}>
                <button
                    onClick={toggleCollapse}
                    className="p-2 rounded-lg hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
                >
                    <span className="material-icons-outlined">
                        {isCollapsed ? "chevron_right" : "chevron_left"}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
