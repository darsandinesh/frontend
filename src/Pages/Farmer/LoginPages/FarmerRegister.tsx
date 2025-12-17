import { useState } from "react";
import PersonalInfoForm from "../../../Container/FarmerContainers/PersonalInfoForm";
import FarmDetailsForm from "../../../Container/FarmerContainers/FarmDetailsForm";
import BankDetailsForm from "../../../Container/FarmerContainers/BankDetailsForm";
import VerificationForm from "../../../Container/FarmerContainers/VerificationForm";
import type { FormData } from "../../../interface/components";
import { registerFarmer } from "../../../Api/FarmerApi";
import { toast } from "react-toastify";

const steps = ["Personal Info", "Farm Details", "Bank Details", "Verification"];

export default function FarmerRegistration() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    aadharNumber: "",
    panNumber: "",
    farmName: "",
    farmSize: "",
    state: "",
    district: "",
    pincode: "",
    address: "",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    primaryCrops: [],
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const headers = {
    "Content-Type": "application/json",
  };

  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  const goNext = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async () => {
    // Basic frontend validation (optional, since RHF handles most)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!formData.agreeTerms) {
      alert("You must agree to Terms of Service and Privacy Policy.");
      return;
    }

    try {
      const response = await registerFarmer(formData, headers);

      if (response.success) {
        // Success
        toast.success(
          response.message ?? "Registration completed successfully!",
        );
        // Redirect to login or dashboard
        // e.g., navigate("/dashboard");
      } else {
        // Failure returned from backend
        const errorMessage = response.message ?? "Registration failed.";
        toast.error(errorMessage);
      }
    } catch (error: unknown) {
      // Network or unexpected error
      if (error instanceof Error) {
        toast.error(error.message ?? "An unexpected error occurred.");
      } else {
        toast.error("An unknown error occurred during registration.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white flex flex-col items-center px-6 py-12">
      {/* Header */}
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
          Farmer Registration
        </h1>
        <p className="text-gray-600 text-center max-w-sm">
          Join AgriLink and sell directly to buyers
        </p>
      </div>

      {/* Step labels and progress */}
      <div className="w-full max-w-3xl mb-6">
        <nav className="flex justify-between text-sm font-semibold mb-1 select-none">
          {steps.map((label, idx) => {
            const isActive = idx === currentStep;
            const isCompleted = idx < currentStep;
            return (
              <span
                key={label}
                className={`cursor-pointer ${
                  isActive
                    ? "text-green-600"
                    : isCompleted
                      ? "text-green-500"
                      : "text-gray-400"
                }`}
                onClick={() => idx <= currentStep && setCurrentStep(idx)}
              >
                {label}
              </span>
            );
          })}
        </nav>
        <div className="relative h-2 rounded bg-gray-300">
          <div
            className="absolute top-0 left-0 h-2 rounded bg-black transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Step content inside card */}
      <div className="w-full max-w-3xl">
        {currentStep === 0 && (
          <PersonalInfoForm
            formData={formData}
            setFormData={setFormData}
            onNext={goNext}
          />
        )}
        {currentStep === 1 && (
          <FarmDetailsForm
            formData={formData}
            setFormData={setFormData}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {currentStep === 2 && (
          <BankDetailsForm
            formData={formData}
            setFormData={setFormData}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {currentStep === 3 && (
          <VerificationForm
            formData={formData}
            setFormData={setFormData}
            onBack={goBack}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
