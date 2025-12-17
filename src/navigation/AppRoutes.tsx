import { Routes, useLocation, Route } from "react-router-dom";
import { PAGE_URL } from "../utils/constants/routes";
import { GustLayout } from "./GustLayout";
import { AdminLayout } from "./AdminLayout";
import FarmerLayout from "./FarmerLayout";
import BuyerLayout from "./BuyerLayout";
import * as Pages from "../Pages";

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<GustLayout />}>
        <Route path={PAGE_URL.LANDING_PAGE} element={<Pages.LandingPage />} />
        <Route
          path={PAGE_URL.FARMER_REGISTRATION}
          element={<Pages.FarmerRegistration />}
        />
        <Route
          path={PAGE_URL.BUYER_REGISTRATION}
          element={<Pages.BuyerRegistration />}
        />
        <Route path={PAGE_URL.LOGIN} element={<Pages.Login />} />
        <Route path="/admin/login" element={<Pages.AdminLogin />} />
        <Route path={PAGE_URL.VERIFY} element={<Pages.VerifyEmail />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Pages.AdminDashboard />} />
        <Route
          path="/admin/clients/farmers"
          element={<Pages.ClientListing type="farmer" />}
        />
        <Route
          path="/admin/clients/buyers"
          element={<Pages.ClientListing type="buyer" />}
        />
        <Route
          path="/admin/clients/:type/:id"
          element={<Pages.ClientDetails />}
        />
        <Route path="/admin/health" element={<Pages.HealthDashboard />} />
        <Route path="/admin/profile" element={<Pages.AdminProfile />} />
        <Route path="/admin/analytics" element={<Pages.AdminAnalytics />} />
        <Route path="/admin/settings" element={<Pages.AdminSettings />} />
        <Route path="/admin/management" element={<Pages.AdminListing />} />
        <Route
          path="/admin/requests"
          element={<Pages.RegistrationRequests />}
        />
        <Route path="/admin/requests/:id" element={<Pages.RequestDetails />} />
      </Route>

      {/* Farmer Routes */}
      <Route element={<FarmerLayout />}>
        <Route path="/farmer/dashboard" element={<Pages.FarmerDashboard />} />
        <Route path="/farmer/products" element={<Pages.ProductList />} />
        <Route path="/farmer/products/add" element={<Pages.AddProduct />} />
        {/* Placeholders for other routes */}
        <Route path="/farmer/orders" element={<Pages.OrderManagement />} />
        <Route path="/farmer/payments" element={<Pages.PaymentHistory />} />
        <Route path="/farmer/support" element={<Pages.FarmerSupport />} />
        <Route path="/farmer/profile" element={<Pages.FarmerProfile />} />
        <Route path="/farmer/settings" element={<Pages.FarmerSettings />} />
        <Route path="/farmer/chat" element={<Pages.FarmerChat />} />
        <Route path="/farmer/crops" element={<Pages.CropManager />} />
        <Route path="/farmer/market" element={<Pages.MarketInsights />} />
        <Route path="/farmer/community" element={<Pages.FarmerCommunity />} />
      </Route>

      {/* Buyer Routes */}
      <Route element={<BuyerLayout />}>
        <Route path="/buyer/dashboard" element={<Pages.BuyerDashboard />} />
        <Route path="/buyer/market" element={<Pages.Marketplace />} />
        <Route path="/buyer/orders" element={<Pages.OrderHistory />} />
        <Route path="/buyer/profile" element={<Pages.BuyerProfile />} />
      </Route>
    </Routes>
  );
};
