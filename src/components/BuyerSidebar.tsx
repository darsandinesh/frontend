import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const BuyerSidebar = ({ isCollapsed, toggleCollapse }: SidebarProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-72"
      } bg-gradient-to-b from-blue-900 to-blue-800 text-white min-h-screen flex flex-col shadow-2xl z-20 sticky top-0 transition-all duration-300 ease-in-out`}
    >
      {/* Brand Header */}
      <div
        className={`h-20 flex items-center ${isCollapsed ? "justify-center px-0" : "px-8"} border-b border-blue-700/50 backdrop-blur-sm transition-all duration-300`}
      >
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shrink-0">
          <span className="material-icons-outlined text-blue-700 text-2xl">
            storefront
          </span>
        </div>
        <span
          className={`ml-3 text-xl font-bold text-white tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ${
            isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          }`}
        >
          AgriLink
        </span>
      </div>

      <nav
        className={`flex-1 py-8 space-y-2 overflow-y-auto ${isCollapsed ? "px-2" : "px-4"} transition-all duration-300`}
      >
        {!isCollapsed && (
          <h3 className="px-4 text-xs font-semibold text-blue-200/50 uppercase tracking-wider mb-4 whitespace-nowrap">
            Marketplace
          </h3>
        )}

        {/* Dashboard */}
        <Link
          to="/buyer/dashboard"
          title={isCollapsed ? "Dashboard" : ""}
          className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
            isActive("/buyer/dashboard")
              ? "bg-white/10 text-white shadow-lg"
              : "text-blue-100/70 hover:text-white hover:bg-white/5"
          } ${isCollapsed ? "justify-center" : ""}`}
        >
          <span
            className={`material-icons-outlined text-2xl transition-colors ${
              isActive("/buyer/dashboard")
                ? "text-white"
                : "text-blue-100/70 group-hover:text-white"
            } ${!isCollapsed ? "mr-3" : ""}`}
          >
            dashboard
          </span>
          <span
            className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
            }`}
          >
            Dashboard
          </span>
        </Link>

        {/* Browse Crops (Marketplace) */}
        <Link
          to="/buyer/market"
          title={isCollapsed ? "Browse Crops" : ""}
          className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
            isActive("/buyer/market")
              ? "bg-white/10 text-white shadow-lg"
              : "text-blue-100/70 hover:text-white hover:bg-white/5"
          } ${isCollapsed ? "justify-center" : ""}`}
        >
          <span
            className={`material-icons-outlined text-2xl transition-colors ${
              isActive("/buyer/market")
                ? "text-white"
                : "text-blue-100/70 group-hover:text-white"
            } ${!isCollapsed ? "mr-3" : ""}`}
          >
            store
          </span>
          <span
            className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
            }`}
          >
            Browse Crops
          </span>
        </Link>

        {/* My Orders */}
        <Link
          to="/buyer/orders"
          title={isCollapsed ? "My Orders" : ""}
          className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
            isActive("/buyer/orders")
              ? "bg-white/10 text-white shadow-lg"
              : "text-blue-100/70 hover:text-white hover:bg-white/5"
          } ${isCollapsed ? "justify-center" : ""}`}
        >
          <span
            className={`material-icons-outlined text-2xl transition-colors ${
              isActive("/buyer/orders")
                ? "text-white"
                : "text-blue-100/70 group-hover:text-white"
            } ${!isCollapsed ? "mr-3" : ""}`}
          >
            shopping_bag
          </span>
          <span
            className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
            }`}
          >
            My Orders
          </span>
        </Link>

        {/* Profile */}
        <Link
          to="/buyer/profile"
          title={isCollapsed ? "Profile" : ""}
          className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
            isActive("/buyer/profile")
              ? "bg-white/10 text-white shadow-lg"
              : "text-blue-100/70 hover:text-white hover:bg-white/5"
          } ${isCollapsed ? "justify-center" : ""}`}
        >
          <span
            className={`material-icons-outlined text-2xl transition-colors ${
              isActive("/buyer/profile")
                ? "text-white"
                : "text-blue-100/70 group-hover:text-white"
            } ${!isCollapsed ? "mr-3" : ""}`}
          >
            person
          </span>
          <span
            className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
            }`}
          >
            Profile
          </span>
        </Link>
      </nav>

      {/* Collapse Toggle Button (Bottom) */}
      <div
        className={`p-4 border-t border-blue-700/50 flex ${isCollapsed ? "justify-center" : "justify-end"}`}
      >
        <button
          onClick={toggleCollapse}
          className="p-2 rounded-lg hover:bg-white/10 text-blue-100/70 hover:text-white transition-colors"
        >
          <span className="material-icons-outlined">
            {isCollapsed ? "chevron_right" : "chevron_left"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default BuyerSidebar;
