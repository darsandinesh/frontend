import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Camera, Save, Lock, Tractor, CreditCard } from 'lucide-react';

const FarmerProfile: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'details' | 'farm' | 'security'>('details');

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-green-500 to-emerald-600 relative">
                    {/* Cover image placeholder */}
                </div>
                <div className="px-8 pb-6 relative">
                    <div className="flex flex-col sm:flex-row items-end -mt-12 mb-6 gap-6">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                                    alt="Profile"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <button className="absolute bottom-1 right-1 bg-green-600 text-white p-1.5 rounded-full shadow-md hover:bg-green-700 transition-colors">
                                <Camera size={14} />
                            </button>
                        </div>
                        <div className="flex-1 mb-2">
                            <h2 className="text-2xl font-bold text-gray-900">John Anderson</h2>
                            <p className="text-gray-500 flex items-center gap-1">
                                <MapPin size={14} /> Green Valley Farm, California
                            </p>
                        </div>
                        <div className="mb-2">
                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 shadow-md transition-colors flex items-center gap-2 font-medium">
                                <Save size={18} />
                                Save Changes
                            </button>
                        </div>
                    </div>

                    <div className="flex border-b border-gray-100 mb-6">
                        <button
                            onClick={() => setActiveTab('details')}
                            className={`pb-3 px-1 mr-6 font-medium text-sm transition-colors relative ${activeTab === 'details' ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Personal Details
                            {activeTab === 'details' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-t-full"></span>}
                        </button>
                        <button
                            onClick={() => setActiveTab('farm')}
                            className={`pb-3 px-1 mr-6 font-medium text-sm transition-colors relative ${activeTab === 'farm' ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Farm Information
                            {activeTab === 'farm' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-t-full"></span>}
                        </button>
                        <button
                            onClick={() => setActiveTab('security')}
                            className={`pb-3 px-1 font-medium text-sm transition-colors relative ${activeTab === 'security' ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Security & KYC
                            {activeTab === 'security' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-t-full"></span>}
                        </button>
                    </div>

                    {activeTab === 'details' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="text" defaultValue="John Anderson" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="email" defaultValue="john.anderson@example.com" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="tel" defaultValue="+1 (555) 123-4567" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="text" defaultValue="123 Farm Lane, Rural Dist " className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                <textarea className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[100px]" defaultValue="Passionate organic farmer with over 15 years of experience in sustainable agriculture. Specializing in root vegetables and organic corn." />
                            </div>
                        </div>
                    )}

                    {activeTab === 'farm' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Farm Name</label>
                                <div className="relative">
                                    <Tractor className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="text" defaultValue="Green Valley Farm" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size (Acres)</label>
                                <input type="number" defaultValue="45" className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-green-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Crops</label>
                                <input type="text" defaultValue="Corn, Carrots, Potatoes" className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-green-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Farming Method</label>
                                <select className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                                    <option>Organic</option>
                                    <option>Conventional</option>
                                    <option>Hydroponic</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-sm font-bold text-gray-900 mt-2 mb-3 flex items-center gap-2">
                                    <CreditCard size={16} /> Bank Details for Payouts
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Account Holder Name</label>
                                        <input type="text" defaultValue="John Anderson" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Bank Name</label>
                                        <input type="text" defaultValue="Chase Bank" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Account Number</label>
                                        <input type="password" value="************4589" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Routing Number</label>
                                        <input type="password" value="*****8892" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-6 animate-in fade-in duration-300">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input type="password" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input type="password" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input type="password" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">KYC Status</h3>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-4">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <CheckCircleIcon />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-green-800">Verified Farmer</h4>
                                        <p className="text-sm text-green-700">Your identity and farm documents have been verified.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export default FarmerProfile;
