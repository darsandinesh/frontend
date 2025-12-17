import React, { useState } from 'react';
import { Bell, Moon, Languages, Shield, LogOut, Smartphone, Globe, CloudRain } from 'lucide-react';

const FarmerSettings: React.FC = () => {
    const [notifications, setNotifications] = useState({
        orders: true,
        payments: true,
        marketing: false,
        weather: true
    });

    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('English');
    const [units, setUnits] = useState('Metric');

    const handleNotificationChange = (key: keyof typeof notifications) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-500">Manage your application preferences and configurations.</p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100 overflow-hidden">
                {/* Notifications Section */}
                <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                        <Bell className="text-green-600" size={20} />
                        Notification Preferences
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-gray-800">Order Updates</div>
                                <div className="text-sm text-gray-500">Receive alerts for new orders and status changes</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications.orders}
                                    onChange={() => handleNotificationChange('orders')}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-gray-800">Payment Confirmations</div>
                                <div className="text-sm text-gray-500">Get notified when payments are processed</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications.payments}
                                    onChange={() => handleNotificationChange('payments')}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium text-gray-800">Weather Alerts</div>
                                <div className="text-sm text-gray-500">Daily forecast and severe weather warnings</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications.weather}
                                    onChange={() => handleNotificationChange('weather')}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Appearance & Language */}
                <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                        <Smartphone className="text-green-600" size={20} />
                        App Settings
                    </h2>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                    <Moon size={18} />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-800">Dark Mode</div>
                                    <div className="text-sm text-gray-500">Switch between light and dark themes</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-800"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                    <Languages size={18} />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-800">Language</div>
                                    <div className="text-sm text-gray-500">Select your preferred language</div>
                                </div>
                            </div>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                    <CloudRain size={18} />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-800">Measurement Units</div>
                                    <div className="text-sm text-gray-500">For weight, temperature, and area</div>
                                </div>
                            </div>
                            <select
                                value={units}
                                onChange={(e) => setUnits(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option>Metric (kg, °C, ha)</option>
                                <option>Imperial (lb, °F, ac)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Account Actions */}
                <div className="p-6 bg-gray-50/50">
                    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                        <Shield className="text-green-600" size={20} />
                        Account & Privacy
                    </h2>
                    <div className="space-y-3">
                        <button className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex justify-between items-center group">
                            <span className="text-gray-700 font-medium">Privacy Policy</span>
                            <Globe size={16} className="text-gray-400 group-hover:text-green-600" />
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex justify-between items-center group">
                            <span className="text-gray-700 font-medium">Terms of Service</span>
                            <Globe size={16} className="text-gray-400 group-hover:text-green-600" />
                        </button>
                        <div className="pt-2">
                            <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 px-2 py-1 rounded hover:bg-red-50 transition-colors w-fit">
                                <LogOut size={18} />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerSettings;
