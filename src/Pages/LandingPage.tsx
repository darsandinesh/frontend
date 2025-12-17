import React from "react";
import { UserOutlined, TeamOutlined, CheckOutlined } from "@ant-design/icons";
import { AppButton } from "../components";
import { AppCard } from "../components";
import { useNavigate } from "react-router-dom";
import { PAGE_URL } from "../utils/constants/routes";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
            <div>
              <h1 className="text-xl font-bold text-gray-900">AgriLink</h1>
              <p className="text-sm text-gray-600">
                Connecting Farmers & Buyers
              </p>
            </div>
          </div>
          <AppButton
            type="default"
            size="large"
            className="rounded-lg border-green-500 text-green-600 hover:bg-green-50"
            onClick={() => navigate(PAGE_URL.LOGIN)}
          >
            Sign In
          </AppButton>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-4">
            <span className="text-sm font-medium text-gray-700">
              B2B Agricultural Platform
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            India's Leading Agricultural B2B Marketplace
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering farmers with direct access to enterprise buyers. Fair
            pricing, instant matching, and seamless transactions for
            agricultural commodities.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 ">
          {/* Farmer Card */}
          <AppCard className="rounded-2xl border-2 border-green-400 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserOutlined className="text-4xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                I'm a Farmer
              </h3>
              <p className="text-gray-600 mb-6">
                Sell your produce directly to verified buyers
              </p>

              <div className="text-left space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <CheckOutlined className="text-green-600 mt-1" />
                  <span className="text-gray-700">
                    List your products with quality grades
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckOutlined className="text-green-600 mt-1" />
                  <span className="text-gray-700">
                    Get fair market prices instantly
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckOutlined className="text-green-600 mt-1" />
                  <span className="text-gray-700">
                    Direct payments, no middlemen
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckOutlined className="text-green-600 mt-1" />
                  <span className="text-gray-700">
                    Track orders and earnings in real-time
                  </span>
                </div>
              </div>

              <AppButton
                type="primary"
                size="large"
                block
                className="bg-gray-900 hover:bg-gray-800 h-12 rounded-lg text-base font-medium"
                onClick={() => navigate(PAGE_URL.FARMER_REGISTRATION)}
              >
                Register as Farmer
              </AppButton>
            </div>
          </AppCard>

          {/* Buyer Card */}
          <AppCard className="rounded-2xl border-2 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TeamOutlined className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                I'm a Buyer
              </h3>
              <p className="text-gray-600 mb-6">
                Source quality agricultural products at scale
              </p>

              <div className="text-left space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <CheckOutlined className="text-blue-600 mt-1" />
                  <span className="text-gray-700">
                    Access verified inventory across India
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckOutlined className="text-blue-600 mt-1" />
                  <span className="text-gray-700">
                    AI-powered matching for your requirements
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckOutlined className="text-blue-600 mt-1" />
                  <span className="text-gray-700">
                    Quality-assured lots with detailed specs
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckOutlined className="text-blue-600 mt-1" />
                  <span className="text-gray-700">
                    Streamlined procurement process
                  </span>
                </div>
              </div>

              <AppButton
                type="primary"
                size="large"
                block
                className="bg-gray-900 hover:bg-gray-800 h-12 rounded-lg text-base font-medium"
                onClick={() => navigate(PAGE_URL.BUYER_REGISTRATION)}
              >
                Register as Buyer
              </AppButton>
            </div>
          </AppCard>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <AppCard className="text-center rounded-xl hover:shadow-lg transition-shadow border-2 border-green-200">
            <h4 className="text-3xl font-bold text-gray-900 mb-2">2,500+</h4>
            <p className="text-gray-600">Active Farmers</p>
          </AppCard>
          <AppCard className="text-center rounded-xl hover:shadow-lg transition-shadow border-2 border-green-200">
            <h4 className="text-3xl font-bold text-gray-900 mb-2">156</h4>
            <p className="text-gray-600">Enterprise Buyers</p>
          </AppCard>
          <AppCard className="text-center rounded-xl hover:shadow-lg transition-shadow border-2 border-green-200">
            <h4 className="text-3xl font-bold text-gray-900 mb-2">₹142.5M</h4>
            <p className="text-gray-600">Total GMV</p>
          </AppCard>
          <AppCard className="text-center rounded-xl hover:shadow-lg transition-shadow border-2 border-green-200">
            <h4 className="text-3xl font-bold text-gray-900 mb-2">95.8%</h4>
            <p className="text-gray-600">Success Rate</p>
          </AppCard>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AppCard className="rounded-xl hover:shadow-lg transition-shadow border-2 border-green-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Dynamic Pricing
                </h4>
                <p className="text-sm text-gray-600">
                  AI-powered pricing engine for fair market value
                </p>
              </div>
            </div>
          </AppCard>

          <AppCard className="rounded-xl hover:shadow-lg transition-shadow border-2 border-green-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Real-time Matching
                </h4>
                <p className="text-sm text-gray-600">
                  Instant buyer-seller matching with smart algorithms
                </p>
              </div>
            </div>
          </AppCard>

          <AppCard className="rounded-xl hover:shadow-lg transition-shadow border-2 border-green-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Quality Assurance
                </h4>
                <p className="text-sm text-gray-600">
                  Verified lots with detailed quality parameters
                </p>
              </div>
            </div>
          </AppCard>

          <AppCard className="rounded-xl hover:shadow-lg transition-shadow border-2 border-green-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Pan-India Network
                </h4>
                <p className="text-sm text-gray-600">
                  Connect with buyers and farmers across India
                </p>
              </div>
            </div>
          </AppCard>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-700 mb-3">
              © 2025 AgriLink. Growing together, one harvest at a time.
            </p>
            <p className="text-sm text-gray-600">
              Farmers find buyers. Companies find quality. Agriculture finds a
              future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
