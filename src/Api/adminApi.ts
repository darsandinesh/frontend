import { axiosInstance } from "./apiClint";
import type { AdminLoginPayload, LoginResponse } from "../interface/components";

export const loginAdmin = async (
  payload: AdminLoginPayload,
): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(
    "/api/v1/admin/login",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
};
