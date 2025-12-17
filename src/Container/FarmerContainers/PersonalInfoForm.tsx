import React from "react";
import { FaUser } from "react-icons/fa";
import AppButton from "../../components/AppButton";
import AppCard from "../../components/AppCard";
import type { FormData } from "../../interface/components";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PAGE_URL } from "../../utils/constants/routes";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
}

export default function PersonalInfoForm({
  formData,
  setFormData,
  onNext,
}: Props) {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: formData,
  });

  const submit = (values: FormData) => {
    setFormData(values);
    onNext();
  };

  return (
    <AppCard className="border-green-300">
      <div className="flex items-center gap-2 mb-2 text-green-600 font-semibold text-lg">
        <FaUser />
        <h2>Personal Information</h2>
      </div>
      <p className="mb-6 text-gray-600">Please provide your basic details</p>

      <form onSubmit={handleSubmit(submit)} className="w-full">
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-semibold mb-1">
            First Name <span className="text-black">*</span>
          </label>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <input
                {...field}
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({ ...getValues(), firstName: e.target.value });
                }}
              />
            )}
          />
          {errors.firstName && (
            <p className="text-sm text-red-600 mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-semibold mb-1">
            Last Name <span className="text-black">*</span>
          </label>
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <input
                {...field}
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({ ...getValues(), lastName: e.target.value });
                }}
              />
            )}
          />
          {errors.lastName && (
            <p className="text-sm text-red-600 mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="flex gap-6 mb-4">
          {/* email */}
          <div className="flex-1">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <Controller
              control={control}
              name="email"
              rules={{
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), email: e.target.value });
                  }}
                />
              )}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* mobileNumber */}
          <div className="flex-1">
            <label htmlFor="mobileNumber" className="block font-semibold mb-1">
              Mobile Number <span className="text-black">*</span>
            </label>
            <Controller
              control={control}
              name="mobileNumber"
              rules={{
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9+\-\s()]{7,20}$/,
                  message: "Enter a valid mobile number",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="mobileNumber"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({
                      ...getValues(),
                      mobileNumber: e.target.value,
                    });
                  }}
                />
              )}
            />
            {errors.mobileNumber && (
              <p className="text-sm text-red-600 mt-1">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* aadharNumber */}
        <div className="mb-1">
          <label htmlFor="aadharNumber" className="block font-semibold mb-1">
            Aadhaar Number (for verification)
          </label>
          <Controller
            control={control}
            name="aadharNumber"
            rules={{
              validate: (val) => {
                if (!val) return true;
                const digits = val.replace(/\s+/g, "");
                return /^\d{12}$/.test(digits) || "Aadhaar must be 12 digits";
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="aadharNumber"
                type="text"
                placeholder="XXXX XXXX XXXX"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({ ...getValues(), aadharNumber: e.target.value });
                }}
              />
            )}
          />
          {errors.aadharNumber && (
            <p className="text-sm text-red-600 mt-1">
              {errors.aadharNumber.message}
            </p>
          )}
        </div>
        <p className="text-xs text-gray-400 mb-6">
          Your Aadhaar is encrypted and used only for KYC verification
        </p>

        {/* Pancard */}
        <div className="mb-1">
          <label htmlFor="panNumber" className="block font-semibold mb-1">
            Pan Number (for verification)
          </label>
          <Controller
            control={control}
            name="panNumber"
            rules={{
              validate: (val) => {
                if (!val) return "PAN is required";

                const pan = val.toUpperCase().trim();
                const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

                return (
                  regex.test(pan) || "Invalid PAN format (e.g., ABCDE1234F)"
                );
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="panNumber"
                type="text"
                placeholder="XXXX XXXX XXXX"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({ ...getValues(), panNumber: e.target.value });
                }}
              />
            )}
          />
          {errors.panNumber && (
            <p className="text-sm text-red-600 mt-1">
              {errors.panNumber.message}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3">
          <AppButton
            type="default"
            className="border border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={() => navigate(PAGE_URL.LANDING_PAGE)}
          >
            Cancel
          </AppButton>

          <AppButton type="primary" onClick={() => handleSubmit(submit)()}>
            Next &rarr;
          </AppButton>
        </div>
      </form>
    </AppCard>
  );
}
