import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PAGE_URL } from "../utils/constants/routes";

export const GustLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = false;

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        navigate(PAGE_URL.HOME);
      }, 3000);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div style={{ height: "100vh" }}>
      <Outlet />
    </div>
  );
};
