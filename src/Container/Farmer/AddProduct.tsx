import { useNavigate } from "react-router-dom";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";

const AddProduct = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-2">
                <button onClick={() => navigate(-1)} className="p-2 hover:bg-white rounded-full transition-colors text-gray-500">
                    <span className="material-icons-outlined">arrow_back</span>
                </button>
                <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <AppCard>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 px-4 pt-2">Product Information</h2>
                        <div className="space-y-4 px-4 pb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                <input type="text" placeholder="e.g. Organic Wheat" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white">
                                        <option>Grains</option>
                                        <option>Vegetables</option>
                                        <option>Fruits</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity (kg)</label>
                                    <input type="number" placeholder="e.g. 100" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea rows={4} placeholder="Describe your product..." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"></textarea>
                            </div>
                        </div>
                    </AppCard>

                    <AppCard>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 px-4 pt-2">Pricing</h2>
                        <div className="grid grid-cols-2 gap-4 px-4 pb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price per Unit (₹)</label>
                                <input type="number" placeholder="0.00" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Unit Type</label>
                                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white">
                                    <option>Per Kg</option>
                                    <option>Per Quintal</option>
                                    <option>Per Ton</option>
                                </select>
                            </div>
                        </div>
                    </AppCard>
                </div>

                <div className="md:col-span-1 space-y-6">
                    <AppCard>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 px-4 pt-2">Media</h2>
                        <div className="px-4 pb-4">
                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                                <span className="material-icons-outlined text-4xl text-gray-300 mb-2">cloud_upload</span>
                                <p className="text-sm font-medium text-gray-600">Click to upload image</p>
                                <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                            </div>
                        </div>
                    </AppCard>

                    <div className="flex flex-col gap-3">
                        <AppButton type="primary" className="w-full justify-center">Publish Product</AppButton>
                        <button onClick={() => navigate(-1)} className="w-full py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
