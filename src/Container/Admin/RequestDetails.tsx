import { useNavigate, useSearchParams } from "react-router-dom";
import AppCard from "../../components/AppCard";

const RequestDetails = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type"); // 'farmer' or 'buyer'

    // Mock Data (In real app, fetch based on ID)
    const data = {
        name: type === "farmer" ? "Ramesh Kumar" : "Fresh Foods Ltd",
        email: type === "farmer" ? "ramesh.k@example.com" : "contact@freshfoods.com",
        phone: "+91 9876543210",
        location: type === "farmer" ? "Punjab, India" : "Mumbai, India",
        // Farmer Specific
        farmSize: "15 Acres",
        crops: ["Wheat", "Rice"],
        // Buyer Specific
        companyType: "Retailer",
        gst: "GSTIN123456789",
    };

    const handleApprove = () => {
        if (window.confirm("Are you sure you want to approve this registration?")) {
            alert("Registration Approved!");
            navigate("/admin/requests");
        }
    };

    const handleReject = () => {
        const reason = prompt("Please provide a reason for rejection:");
        if (reason) {
            alert(`Registration Rejected. Reason: ${reason}`);
            navigate("/admin/requests");
        }
    };

    return (
        <div className="space-y-6 pb-20">
            {/* Header / Actions - using sticky top or just normal header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate("/admin/requests")} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                        <span className="material-icons-outlined">arrow_back</span>
                    </button>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-xl font-bold text-gray-800">{data.name}</h1>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${type === 'farmer' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-blue-100 text-blue-700 border-blue-200'} border`}>
                                {type === 'farmer' ? 'Farmer' : 'Buyer'} Application
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Submitted on Oct 25, 2023</p>
                    </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button onClick={handleReject} className="flex-1 md:flex-none px-6 py-2.5 border border-red-200 text-red-600 rounded-xl hover:bg-red-50 font-medium transition-colors">
                        Reject
                    </button>
                    <button onClick={handleApprove} className="flex-1 md:flex-none px-6 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 font-medium shadow-lg shadow-green-200 transition-colors">
                        Approve Registration
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Personal / Company Info */}
                <div className="lg:col-span-2 space-y-6">
                    <AppCard >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name / Company Name</label>
                                <p className="text-gray-900 font-medium mt-1">{data.name}</p>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                                <p className="text-gray-900 font-medium mt-1">{data.email}</p>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</label>
                                <p className="text-gray-900 font-medium mt-1">{data.phone}</p>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</label>
                                <p className="text-gray-900 font-medium mt-1">{data.location}</p>
                            </div>
                            {type === 'buyer' && (
                                <>
                                    <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Company Type</label>
                                        <p className="text-gray-900 font-medium mt-1">{data.companyType}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">GST Number</label>
                                        <p className="text-gray-900 font-medium mt-1">{data.gst}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </AppCard>

                    <AppCard >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Bank Name</label>
                                <p className="text-gray-900 font-medium mt-1">HDFC Bank</p>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Account Number</label>
                                <p className="text-gray-900 font-medium mt-1">XXXX-XXXX-1234</p>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">IFSC Code</label>
                                <p className="text-gray-900 font-medium mt-1">HDFC0001234</p>
                            </div>
                        </div>
                    </AppCard>

                    {type === 'farmer' && (
                        <AppCard >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Farm Size</label>
                                    <p className="text-gray-900 font-medium mt-1">{data.farmSize}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Primary Crops</label>
                                    <div className="flex gap-2 mt-2">
                                        {data.crops.map(crop => (
                                            <span key={crop} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded border border-green-100">{crop}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AppCard>
                    )}
                </div>

                {/* Right Column: Documents */}
                <div className="lg:col-span-1 space-y-6">
                    <AppCard >
                        <div className="space-y-4">
                            <div className="p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-gray-700">Aadhar Card</span>
                                    <span className="material-icons-outlined text-green-500">verified</span>
                                </div>
                                <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                                    [Preview Image]
                                </div>
                                <button className="w-full mt-3 text-xs text-blue-600 hover:underline">View Full Size</button>
                            </div>
                            <div className="p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-gray-700">PAN Card / Tax ID</span>
                                </div>
                                <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                                    [Preview Image]
                                </div>
                                <button className="w-full mt-3 text-xs text-blue-600 hover:underline">View Full Size</button>
                            </div>
                        </div>
                    </AppCard>
                </div>
            </div>
        </div>
    );
};

export default RequestDetails;
