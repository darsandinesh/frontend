import { axiosInstance } from "./apiClint";
import type { VerifyData, VerifyResponse } from "../interface/components";

// Farmer verify

export const verify = async (
  payload: VerifyData,
  headers: { [key: string]: string },
): Promise<VerifyResponse> => {
  const response = await axiosInstance.post<VerifyResponse>(
    "auth-service/verify",
    payload,
    { headers },
  );
  return response.data;
};
