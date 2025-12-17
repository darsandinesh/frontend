import React from "react";
import { FaClipboardCheck } from "react-icons/fa";
import AppButton from "../../components/AppButton";
import AppCard from "../../components/AppCard";
import type { FormData } from "../../interface/components";
import { useForm } from "react-hook-form";
import type { FieldError } from "react-hook-form";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onBack: () => void;
  onSubmit: () => void;
}

export default function VerificationForm({ formData, setFormData, onBack, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: formData,
  });

  const watchedPassword = watch("password") ?? "";

  const submit = (values: FormData) => {
    setFormData(values);
    onSubmit();
  };

  return (
    <AppCard className="border-green-300">
      <div className="flex items-center gap-2 mb-2 text-green-600 font-semibold text-lg">
        <FaClipboardCheck />
        <h2>Account Setup</h2>
      </div>
      <p className="mb-6 text-gray-600">Create your password and complete registration</p>

      <form onSubmit={handleSubmit(submit)} className="w-full">

        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-1">
            Create Password <span className="text-black">*</span>
          </label>
          <input
            id="password"
            type="password"
            minLength={8}
            required
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
              onChange: (e) => {
                setFormData({ ...getValues(), password: e.target.value });
              },
            })}
            placeholder="Minimum 8 characters"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">{(errors.password as FieldError).message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-semibold mb-1">
            Confirm Password <span className="text-black">*</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            minLength={8}
            required
            {...register("confirmPassword", {
              required: "Please confirm your password",
              minLength: { value: 8, message: "Confirm password must be at least 8 characters" },
              validate: (val: string | undefined) =>
                val === watchedPassword || "Passwords do not match",
              onChange: (e) => {
                setFormData({ ...getValues(), confirmPassword: e.target.value });
              },
            })}
            placeholder="Re-enter password"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">{(errors.confirmPassword as FieldError).message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2 bg-gray-100 rounded px-3 py-2 text-sm text-gray-700 cursor-pointer select-none">
            <input
              type="checkbox"
              {...register("agreeTerms", {
                required: "You must agree to the terms",
                onChange: (e) => {
                  setFormData({ ...getValues(), agreeTerms: e.target.checked });
                },
              })}
              checked={!!getValues("agreeTerms")}
              className="w-4 h-4 cursor-pointer"
            />
            <span>
              I agree to AgriLink&apos;s{" "}
              <a href="#" className="text-green-600 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-600 underline">
                Privacy Policy
              </a>
              . I confirm that all information provided is accurate.
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-sm text-red-600 mt-2">{(errors.agreeTerms as FieldError).message}</p>
          )}
        </div>

        <div className="flex justify-between gap-3">
          <AppButton
            type="default"
            onClick={onBack}
            className="text-gray-700 border border-gray-300 hover:bg-gray-100"
          >
            &larr; Back
          </AppButton>
          <AppButton type="primary" onClick={() => handleSubmit(submit)()}>
            Complete Registration
          </AppButton>
        </div>
      </form>
    </AppCard>
  );
}
