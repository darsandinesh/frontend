import React from "react";
import { FaUniversity } from "react-icons/fa";
import AppButton from "../../components/AppButton";
import AppCard from "../../components/AppCard";
import type { FormData } from "../../interface/components";
import { useForm, Controller } from "react-hook-form";
import type { FieldError } from "react-hook-form";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
  onBack: () => void;
}

export default function BankDetailsForm({ formData, setFormData, onNext, onBack }: Props) {
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
        <FaUniversity />
        <h2>Bank Details</h2>
      </div>
      <p className="mb-6 text-gray-600">For receiving payments securely</p>

      <form onSubmit={handleSubmit(submit)} className="w-full">
        <div className="mb-4">
          <label htmlFor="bankName" className="block font-semibold mb-1">
            Bank Name <span className="text-black">*</span>
          </label>

          <Controller
            control={control}
            name="bankName"
            rules={{ required: "Bank name is required" }}
            render={({ field }) => (
              <input
                {...field}
                id="bankName"
                type="text"
                required
                placeholder="e.g., State Bank of India"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({ ...getValues(), bankName: e.target.value });
                }}
              />
            )}
          />
          {errors.bankName && (
            <p className="text-sm text-red-600 mt-1">
              {(errors.bankName as FieldError).message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="accountHolderName" className="block font-semibold mb-1">
            Account Holder Name <span className="text-black">*</span>
          </label>

          <Controller
            control={control}
            name="accountHolderName"
            rules={{ required: "Account holder name is required" }}
            render={({ field }) => (
              <input
                {...field}
                id="accountHolderName"
                type="text"
                required
                placeholder="Name as per bank account"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({ ...getValues(), accountHolderName: e.target.value });
                }}
              />
            )}
          />
          {errors.accountHolderName && (
            <p className="text-sm text-red-600 mt-1">
              {(errors.accountHolderName as FieldError).message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="accountNumber" className="block font-semibold mb-1">
              Account Number <span className="text-black">*</span>
            </label>

            <Controller
              control={control}
              name="accountNumber"
              rules={{
                required: "Account number is required",
                pattern: {
                  value: /^\d{9,18}$/,
                  message: "Account number must be 9 to 18 digits",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="accountNumber"
                  type="text"
                  required
                  placeholder="Enter account number"
                  className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), accountNumber: e.target.value });
                  }}
                />
              )}
            />
            {errors.accountNumber && (
              <p className="text-sm text-red-600 mt-1">
                {(errors.accountNumber as FieldError).message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="ifscCode" className="block font-semibold mb-1">
              IFSC Code <span className="text-black">*</span>
            </label>

            <Controller
              control={control}
              name="ifscCode"
              rules={{
                required: "IFSC code is required",
                pattern: {
                  value: /^[A-Za-z]{4}0[A-Za-z0-9]{6}$/,
                  message: "Enter a valid IFSC (e.g., SBIN0001234)",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="ifscCode"
                  type="text"
                  required
                  placeholder="e.g., SBIN0001234"
                  className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), ifscCode: e.target.value });
                  }}
                />
              )}
            />
            {errors.ifscCode && (
              <p className="text-sm text-red-600 mt-1">
                {(errors.ifscCode as FieldError).message}
              </p>
            )}
          </div>
        </div>

        <div className="bg-blue-100 border border-blue-300 text-blue-700 rounded p-3 mb-6 text-sm flex items-center gap-2">
          <span role="img" aria-label="tip">
            💡
          </span>
          Your bank details are securely encrypted and used only for payment processing.
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
            Next &rarr;
          </AppButton>
        </div>
      </form>
    </AppCard>
  );
}
