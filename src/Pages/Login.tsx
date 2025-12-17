// src/pages/Auth/Login.tsx  (or wherever you want)
import { useState } from "react";
import FarmerLoginForm from "../Container/Login/FarmerLogin";
import BuyerLoginForm from "../Container/Login/BuyerLogin";
import AdminLoginForm from "../Container/Login/AdminLogin";
import { useNavigate } from "react-router-dom";
import { PAGE_URL } from "../utils/constants/routes";

const roles = ["Farmer", "Buyer", "Admin"] as const;
type Role = (typeof roles)[number];

export default function Login() {
  const navigate = useNavigate();
  const [currentRole, setCurrentRole] = useState<Role>("Farmer");

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white flex flex-col items-center px-6 py-12">
      {/* Header – same vibe as FarmerRegistration */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h1 className="text-green-700 text-lg font-normal mb-1">
          Welcome Back to AgriLink
        </h1>
        <p className="text-gray-600 text-center max-w-sm">
          Sign in to your account
        </p>
      </div>

      {/* Role tabs (Farmer / Buyer / Admin) */}
      <div className="w-full max-w-3xl mb-6">
        <nav className="flex justify-between text-sm font-semibold mb-1 select-none bg-gray-100 rounded-full p-1">
          {roles.map((role) => {
            const isActive = role === currentRole;
            return (
              <button
                key={role}
                type="button"
                className={`flex-1 py-2 rounded-full transition-all ${
                  isActive
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
                onClick={() => setCurrentRole(role)}
              >
                {role}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Role-specific login card (each component handles its own form) */}
      <div className="w-full max-w-3xl">
        {currentRole === "Farmer" && <FarmerLoginForm />}
        {currentRole === "Buyer" && <BuyerLoginForm />}
        {currentRole === "Admin" && <AdminLoginForm />}
      </div>

      {/* Back to home */}
      <button
        type="button"
        className="mt-8 text-sm text-gray-500 hover:text-gray-800 underline-offset-2 hover:underline"
        onClick={() => navigate(PAGE_URL.LANDING_PAGE)}
      >
        &larr; Back to Home
      </button>
    </div>
  );
}
