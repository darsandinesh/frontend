import { useState } from "react";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import { Link } from "react-router-dom";

const ProductList = () => {
    // Mock Data
    const [products] = useState([
        { id: 1, name: "Organic Wheat", category: "Grains", price: 2500, stock: "500 kg", status: "Active" },
        { id: 2, name: "Basmati Rice", category: "Grains", price: 4200, stock: "200 kg", status: "Active" },
        { id: 3, name: "Fresh Tomatoes", category: "Vegetables", price: 40, stock: "100 kg", status: "Out of Stock" },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">My Products</h1>
                <Link to="/farmer/products/add">
                    <AppButton type="primary">
                        <span className="material-icons-outlined mr-2">add</span>
                        Add New Product
                    </AppButton>
                </Link>
            </div>

            <AppCard className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">Product Name</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Price / Unit</th>
                                <th className="px-6 py-4">Stock</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mr-3">
                                                <span className="material-icons-outlined">eco</span>
                                            </div>
                                            <span className="font-medium text-gray-900">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">₹{product.price}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{product.stock}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-green-600 p-1">
                                            <span className="material-icons-outlined">edit</span>
                                        </button>
                                        <button className="text-gray-400 hover:text-red-600 p-1 ml-2">
                                            <span className="material-icons-outlined">delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AppCard>
        </div>
    );
};

export default ProductList;
