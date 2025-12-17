import { axiosInstance } from "./apiClint"; // Adjust path
import type {
  FarmerLoginPayload,
  FormData,
  LoginResponse,
  RegisterResponse,
} from "../interface/components";
import { farmerRegisterMapper } from "../utils/mapper/farmerRegisterMapper";

export const registerFarmer = async (
  formData: FormData,
  headers: { [key: string]: string },
): Promise<RegisterResponse> => {
  const payload = farmerRegisterMapper(formData);
  const response = await axiosInstance.post<RegisterResponse>(
    "auth-service/farmer/register",
    payload,
    { headers },
  );
  return response.data;
};

// Farmer login
export const loginFarmer = async (
  payload: FarmerLoginPayload,
): Promise<LoginResponse> => {
  // console.log("Logging in farmer with:", payload);

  const response = await axiosInstance.post<LoginResponse>(
    "auth-service/farmer/login",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
};
