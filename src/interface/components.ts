export interface AppButtonProps {
  children: React.ReactNode;
  type?: "default" | "primary" | "link" | "text";
  size?: "small" | "middle" | "large";
  block?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface AppCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  aadharNumber: string;
  panNumber: string;
  farmName: string;
  farmSize: string;
  state: string;
  district: string;
  pincode: string;
  address: string;
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
  primaryCrops: string[];
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data?: { userId: string; email: string };
}

export interface LoginResponse {
  success: boolean;
  message: string;
  accessToken?: string;
  refreshToken?: string;
  user?: {
    id: string;
    role: "farmer" | "buyer" | "admin";
    email: string;
  };
}

export interface FarmerLoginPayload {
  // email or mobile
  email: string;
  password: string;
}

export interface BuyerLoginPayload {
  email: string;
  password: string;
}

export interface AdminLoginPayload {
  email: string;
  password: string;
}

export interface VerifyData {
  email: string;
  token: string;
}

export interface VerifyResponse {
  success: boolean;
  message: string;
}

export interface VerifyContainerProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export interface BuyerFormData {
  companyName: string;
  companyType: string;
  gstNumber: string;
  panNumber: string;
  firstName: string;
  lastName: string;
  designation: string;
  businessEmail: string;
  businessPhone: string;
  mobileNumber: string;
  businessAddress: string;
  city: string;
  state: string;
  district: string;
  pincode: string;
  annualProcurementVol: string;
  procurementFrequency: string;
  primaryProducts: string[];
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
  branchName: string;
  email: string;
  fullAddress: string;
  aadhaarNumber: string;
}
