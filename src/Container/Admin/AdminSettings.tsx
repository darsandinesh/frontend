import { useState } from "react";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";

const AdminSettings = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        bgTaskNotifications: false,
        theme: "light",
        language: "english",
        autoBackup: true,
    });

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Sidebar / Menu */}
                <div className="md:col-span-1 space-y-4">
                    <AppCard className="!p-0 overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b border-gray-100">
                            <h3 className="font-bold text-gray-800">Settings Menu</h3>
                            <p className="text-xs text-gray-500">Manage application preferences</p>
                        </div>
                        <div className="p-2 space-y-1">
                            <button className="w-full text-left px-4 py-3 text-sm font-medium text-purple-700 bg-purple-50 rounded-lg flex items-center">
                                <span className="material-icons-outlined mr-3 text-lg">tune</span>
                                General
                            </button>
                            <button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg flex items-center transition-colors">
                                <span className="material-icons-outlined mr-3 text-lg">notifications</span>
                                Notifications
                            </button>
                            <button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg flex items-center transition-colors">
                                <span className="material-icons-outlined mr-3 text-lg">security</span>
                                Security & Privacy
                            </button>
                            <button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg flex items-center transition-colors">
                                <span className="material-icons-outlined mr-3 text-lg">language</span>
                                Localization
                            </button>
                        </div>
                    </AppCard>

                    <AppCard className="bg-rose-50 border-rose-100 !p-4">
                        <h4 className="font-bold text-rose-700 mb-2 flex items-center">
                            <span className="material-icons-outlined mr-2">warning</span>
                            Danger Zone
                        </h4>
                        <p className="text-xs text-rose-600 mb-3">Irreversible actions like resetting system data.</p>
                        <button className="text-xs font-bold text-white bg-rose-600 px-3 py-1.5 rounded-lg hover:bg-rose-700 transition-colors w-full">
                            View Danger Zone
                        </button>
                    </AppCard>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* General Settings */}
                    <AppCard>
                        <h3 className="text-lg font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">General Preferences</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium text-gray-800">Application Name</h4>
                                    <p className="text-xs text-gray-500">Visible in emails and dashboard header.</p>
                                </div>
                                <input type="text" className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm w-48 text-gray-700 outline-none focus:border-purple-500" defaultValue="AgriLink Admin" />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium text-gray-800">Theme Preference</h4>
                                    <p className="text-xs text-gray-500">Select your preferred interface theme.</p>
                                </div>
                                <div className="flex bg-gray-100 rounded-lg p-1">
                                    <button className="px-3 py-1 rounded bg-white shadow-sm text-sm font-medium text-gray-800">Light</button>
                                    <button className="px-3 py-1 rounded text-sm font-medium text-gray-500 hover:text-gray-900">Dark</button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-medium text-gray-800">Language</h4>
                                    <p className="text-xs text-gray-500">System display language.</p>
                                </div>
                                <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 outline-none focus:border-purple-500 bg-white">
                                    <option>English</option>
                                    <option>Malayalam</option>
                                    <option>Hindi</option>
                                </select>
                            </div>
                        </div>
                    </AppCard>

                    {/* Notifications */}
                    <AppCard>
                        <h3 className="text-lg font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">Notifications</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex items-center">
                                    <span className="material-icons-outlined text-gray-400 mr-3">email</span>
                                    <div>
                                        <h4 className="font-medium text-gray-800">Email Notifications</h4>
                                        <p className="text-xs text-gray-500">Receive daily summaries and critical alerts.</p>
                                    </div>
                                </div>
                                <div
                                    onClick={() => toggleSetting('emailNotifications')}
                                    className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${settings.emailNotifications ? 'bg-purple-600' : 'bg-gray-200'}`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all shadow-sm ${settings.emailNotifications ? 'left-5.5' : 'left-0.5'}`}></div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex items-center">
                                    <span className="material-icons-outlined text-gray-400 mr-3">notifications_active</span>
                                    <div>
                                        <h4 className="font-medium text-gray-800">System Alerts</h4>
                                        <p className="text-xs text-gray-500">Push notifications for real-time events.</p>
                                    </div>
                                </div>
                                <div
                                    className="w-11 h-6 rounded-full relative cursor-pointer transition-colors bg-purple-600"
                                >
                                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all shadow-sm left-5.5"></div>
                                </div>
                            </div>
                        </div>
                    </AppCard>

                    <div className="flex justify-end pt-4">
                        <AppButton type="primary" onClick={() => alert("Settings saved successfully!")}>
                            Save All Changes
                        </AppButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
