import { axiosInstance } from "./apiClint";
import type {
  BuyerLoginPayload,
  LoginResponse,
  BuyerFormData,
} from "../interface/components";
import { buyerRegisterMapper } from "../utils/mapper/buyerRegisterMapper";
import type { RegisterResponse } from "../interface/components";

export const loginBuyer = async (
  payload: BuyerLoginPayload,
  headers: { [key: string]: string },
): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(
    "auth-service/buyer/login",
    payload,
    { headers },
  );

  return response.data;
};

export const registerBuyer = async (
  formData: BuyerFormData,
  headers: { [key: string]: string },
): Promise<RegisterResponse> => {
  const payload = buyerRegisterMapper(formData);
  const response = await axiosInstance.post<RegisterResponse>(
    "auth-service/buyer/register",
    payload,
    { headers },
  );
  return response.data;
};
