import { useState } from "react";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";

const AdminListing = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showInviteModal, setShowInviteModal] = useState(false);

    // Mock Admins
    const [admins] = useState([
        { id: 1, name: "Admin User", email: "admin@agrilink.com", role: "Super Admin", status: "Active", lastActive: "Just now" },
        { id: 2, name: "Support Lead", email: "support@agrilink.com", role: "Moderator", status: "Active", lastActive: "2 hours ago" },
        { id: 3, name: "Data Analyst", email: "analyst@agrilink.com", role: "Viewer", status: "Inactive", lastActive: "3 days ago" },
    ]);

    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case "Super Admin": return "bg-purple-100 text-purple-700 border-purple-200";
            case "Moderator": return "bg-blue-100 text-blue-700 border-blue-200";
            case "Viewer": return "bg-gray-100 text-gray-700 border-gray-200";
            default: return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="space-y-6">
            <AppCard>
                {/* Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                    <div className="relative w-full md:w-96">
                        <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            search
                        </span>
                        <input
                            type="text"
                            placeholder="Search admins by name or email..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <AppButton type="primary" onClick={() => setShowInviteModal(true)}>
                        <span className="material-icons-outlined mr-2 text-lg">add</span>
                        Invite Admin
                    </AppButton>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Active</th>
                                <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {admins.map((admin) => (
                                <tr key={admin.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 font-bold mr-3 border border-gray-200">
                                                {admin.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-800">{admin.name}</p>
                                                <p className="text-xs text-gray-500">{admin.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleBadgeColor(admin.role)}`}>
                                            {admin.role}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center">
                                            <div className={`w-2 h-2 rounded-full mr-2 ${admin.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                            <span className="text-sm text-gray-600">{admin.status}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="text-sm text-gray-500">{admin.lastActive}</span>
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <button className="text-gray-400 hover:text-purple-600 p-1 rounded-lg hover:bg-purple-50 transition-colors">
                                            <span className="material-icons-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AppCard>

            {/* Invite Modal (Mock) */}
            {showInviteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fadeIn">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold text-gray-800">Invite New Admin</h3>
                            <button onClick={() => setShowInviteModal(false)} className="text-gray-400 hover:text-gray-600">
                                <span className="material-icons-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="colleague@agrilink.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none bg-white">
                                    <option>Viewer (Read Only)</option>
                                    <option>Moderator (Manage Users)</option>
                                    <option>Super Admin (Full Access)</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                            <button onClick={() => setShowInviteModal(false)} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Cancel</button>
                            <AppButton type="primary" onClick={() => { alert("Invite Sent!"); setShowInviteModal(false); }}>
                                Send Invitation
                            </AppButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminListing;
