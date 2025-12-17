import { useState } from "react";
import { Outlet } from "react-router-dom";
import BuyerSidebar from "../components/BuyerSidebar";

const BuyerLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <BuyerSidebar
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out w-full">
        {/* We can add a BuyerHeader here later if needed, similar to FarmerHeader */}
        <div className="flex-1 p-8 overflow-y-auto h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BuyerLayout;
