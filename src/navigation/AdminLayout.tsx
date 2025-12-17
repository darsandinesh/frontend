import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";
import Breadcrumbs from "../components/Breadcrumbs";

export const AdminLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <AdminHeader />
                <div className="flex-1 overflow-y-auto p-8">
                    <Breadcrumbs />
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
