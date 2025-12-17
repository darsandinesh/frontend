import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

const FarmerSidebar = ({ isCollapsed, toggleCollapse }: SidebarProps) => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname.startsWith(path);

    return (
        <div
            className={`${isCollapsed ? "w-20" : "w-72"
                } bg-gradient-to-b from-green-900 to-green-800 text-white min-h-screen flex flex-col shadow-2xl z-20 sticky top-0 transition-all duration-300 ease-in-out`}
        >
            {/* Brand Header */}
            <div className={`h-20 flex items-center ${isCollapsed ? "justify-center px-0" : "px-8"} border-b border-green-700/50 backdrop-blur-sm transition-all duration-300`}>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shrink-0">
                    <span className="material-icons-outlined text-green-700 text-2xl">agriculture</span>
                </div>
                <span className={`ml-3 text-xl font-bold text-white tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                    }`}>
                    AgriLink
                </span>
            </div>

            <nav className={`flex-1 py-8 space-y-2 overflow-y-auto ${isCollapsed ? "px-2" : "px-4"} transition-all duration-300`}>
                {!isCollapsed && (
                    <h3 className="px-4 text-xs font-semibold text-green-200/50 uppercase tracking-wider mb-4 whitespace-nowrap">
                        Farm Management
                    </h3>
                )}

                {/* Dashboard */}
                <Link
                    to="/farmer/dashboard"
                    title={isCollapsed ? "Dashboard" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/farmer/dashboard")
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-green-100/70 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/farmer/dashboard") ? "text-white" : "text-green-100/70 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>dashboard</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Dashboard</span>
                </Link>

                {/* My Products */}
                <Link
                    to="/farmer/products"
                    title={isCollapsed ? "My Products" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/farmer/products")
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-green-100/70 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/farmer/products") ? "text-white" : "text-green-100/70 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>inventory_2</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>My Products</span>
                </Link>

                {/* Orders */}
                <Link
                    to="/farmer/orders"
                    title={isCollapsed ? "Orders" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/farmer/orders")
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-green-100/70 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/farmer/orders") ? "text-white" : "text-green-100/70 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>shopping_cart</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Orders</span>
                </Link>

                {/* Payments */}
                <Link
                    to="/farmer/payments"
                    title={isCollapsed ? "Payments" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/farmer/payments")
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-green-100/70 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/farmer/payments") ? "text-white" : "text-green-100/70 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>payments</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Payments</span>
                </Link>

                {/* Support */}
                <Link
                    to="/farmer/support"
                    title={isCollapsed ? "Support" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/farmer/support")
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-green-100/70 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/farmer/support") ? "text-white" : "text-green-100/70 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>help_outline</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Support</span>
                </Link>

                {/* Chat */}
                <Link
                    to="/farmer/chat"
                    title={isCollapsed ? "Chat" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/farmer/chat")
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-green-100/70 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/farmer/chat") ? "text-white" : "text-green-100/70 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>chat</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Chat</span>
                </Link>

                {/* My Crops */}
                <Link
                    to="/farmer/crops"
                    title={isCollapsed ? "My Crops" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/farmer/crops")
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-green-100/70 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/farmer/crops") ? "text-white" : "text-green-100/70 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>grass</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>My Crops</span>
                </Link>

                {/* Market Insights */}
                <Link
                    to="/farmer/market"
                    title={isCollapsed ? "Market Insights" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/farmer/market")
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-green-100/70 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/farmer/market") ? "text-white" : "text-green-100/70 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>trending_up</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Market</span>
                </Link>

                {/* Community */}
                <Link
                    to="/farmer/community"
                    title={isCollapsed ? "Community" : ""}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/farmer/community")
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-green-100/70 hover:text-white hover:bg-white/5"
                        } ${isCollapsed ? "justify-center" : ""}`}
                >
                    <span className={`material-icons-outlined text-2xl transition-colors ${isActive("/farmer/community") ? "text-white" : "text-green-100/70 group-hover:text-white"
                        } ${!isCollapsed ? "mr-3" : ""}`}>groups</span>
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                        }`}>Community</span>
                </Link>

            </nav>

            {/* Collapse Toggle Button (Bottom) */}
            <div className={`p-4 border-t border-green-700/50 flex ${isCollapsed ? "justify-center" : "justify-end"}`}>
                <button
                    onClick={toggleCollapse}
                    className="p-2 rounded-lg hover:bg-white/10 text-green-100/70 hover:text-white transition-colors"
                >
                    <span className="material-icons-outlined">
                        {isCollapsed ? "chevron_right" : "chevron_left"}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default FarmerSidebar;
