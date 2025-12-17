import { useState } from "react";
import CompanyInfoForm from "../../Container/BuyersContainer/CompanyInfo";
import ContactDetailsForm from "../../Container/BuyersContainer/ContactDetails";
import BusinessDetailsForm from "../../Container/BuyersContainer/BusinessDetails";
import AccountSetupForm from "../../Container/BuyersContainer/AccountSetup";
import BankDetailsForm from "../../Container/BuyersContainer/BankDetailsForm";
import type { BuyerFormData } from "../../interface/components";
import { registerBuyer } from "../../Api/buyerApi";
import { toast } from "react-toastify";

const steps = [
  "Company Info",
  "Contact Details",
  "Business Details",
  "Bank Details",
  "Account Setup",
];

export default function BuyerRegistration() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<BuyerFormData>({
    companyName: "",
    companyType: "",
    gstNumber: "",
    panNumber: "",
    firstName: "",
    lastName: "",
    designation: "",
    businessEmail: "",
    mobileNumber: "",
    businessAddress: "",
    city: "",
    state: "",
    pincode: "",
    annualProcurementVol: "",
    procurementFrequency: "",
    primaryProducts: [],
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    branchName: "",
    district: "",
    fullAddress: "",
    businessPhone: "",
    email: "",
    aadhaarNumber: "",
  });

  const headers = {
    "Content-Type": "application/json",
  };

  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  const goNext = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!formData.agreeTerms) {
      alert("You must agree to Terms of Service and Privacy Policy.");
      return;
    }

    try {
      const response = await registerBuyer(formData, headers);
      if (response.success) {
        toast.success(
          response.message ?? "Registration completed successfully!",
        );
      } else {
        toast.error(response.message ?? "Registration failed.");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message ?? "An unexpected error occurred.");
      } else {
        toast.error("An unknown error occurred during registration.");
      }
    }

    // send formData to backend etc.
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-6 py-12">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87M12 7a4 4 0 110-8 4 4 0 010 8z"
            />
          </svg>
        </div>
        <h1 className="text-blue-700 text-lg font-normal mb-1">
          Buyer Registration
        </h1>
        <p className="text-gray-600 text-center max-w-sm">
          Partner with AgriLink for quality agricultural sourcing
        </p>
      </div>

      {/* Step labels and progress bar */}
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
                    ? "text-blue-600"
                    : isCompleted
                      ? "text-blue-500"
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

      {/* Step content */}
      <div className="w-full max-w-3xl">
        {currentStep === 0 && (
          <CompanyInfoForm
            formData={formData}
            setFormData={setFormData}
            onNext={goNext}
            onCancel={goBack}
          />
        )}
        {currentStep === 1 && (
          <ContactDetailsForm
            formData={formData}
            setFormData={setFormData}
            onBack={goBack}
            onNext={goNext}
          />
        )}
        {currentStep === 2 && (
          <BusinessDetailsForm
            formData={formData}
            setFormData={setFormData}
            onBack={goBack}
            onNext={goNext}
          />
        )}
        {currentStep === 3 && (
          <BankDetailsForm
            formData={formData}
            setFormData={setFormData}
            onBack={goBack}
            onNext={goNext}
          />
        )}
        {currentStep === 4 && (
          <AccountSetupForm
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
