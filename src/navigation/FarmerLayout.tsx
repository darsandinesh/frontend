import { useState } from "react";
import { Outlet } from "react-router-dom";
import FarmerSidebar from "../components/FarmerSidebar";
import FarmerHeader from "../components/FarmerHeader";

const FarmerLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50">
            <FarmerSidebar
                isCollapsed={isSidebarCollapsed}
                toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <FarmerHeader />
                <div className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default FarmerLayout;
