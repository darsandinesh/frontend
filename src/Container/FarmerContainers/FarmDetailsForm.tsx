import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
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

export default function FarmDetailsForm({ formData, setFormData, onNext, onBack }: Props) {
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
        <FaMapMarkerAlt />
        <h2>Farm Details</h2>
      </div>
      <p className="mb-6 text-gray-600">Tell us about your farm</p>

      <form onSubmit={handleSubmit(submit)} className="w-full">
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="farmName" className="block font-semibold mb-1">
              Farm Name
            </label>

            <Controller
              control={control}
              name="farmName"
              render={({ field }) => (
                <input
                  {...field}
                  id="farmName"
                  type="text"
                  placeholder="e.g., Green Valley Farm"
                  className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), farmName: e.target.value });
                  }}
                />
              )}
            />
            {errors.farmName && (
              <p className="text-sm text-red-600 mt-1">{(errors.farmName as FieldError).message}</p>
            )}
          </div>

          <div>
            <label htmlFor="farmSize" className="block font-semibold mb-1">
              Farm Size (in acres)
            </label>

            <Controller
              control={control}
              name="farmSize"
              rules={{
                validate: (val: string | undefined) => {
                  if (val === "" || val === undefined || val === null) return true;
                  const num = Number(val);
                  if (Number.isNaN(num)) return "Farm size must be a number";
                  if (num < 0) return "Farm size cannot be negative";
                  return true;
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="farmSize"
                  type="number"
                  min="0"
                  placeholder="e.g., 25"
                  className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), farmSize: e.target.value });
                  }}
                />
              )}
            />
            {errors.farmSize && (
              <p className="text-sm text-red-600 mt-1">{(errors.farmSize as FieldError).message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="state" className="block font-semibold mb-1">
              State <span className="text-black">*</span>
            </label>

            <Controller
              control={control}
              name="state"
              rules={{ required: "State is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  id="state"
                  required
                  className="w-full bg-gray-100 rounded-lg py-2 px-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-green-600"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), state: e.target.value });
                  }}
                >
                  <option value="">Select state</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              )}
            />
            {errors.state && (
              <p className="text-sm text-red-600 mt-1">{(errors.state as FieldError).message}</p>
            )}
          </div>

          <div>
            <label htmlFor="district" className="block font-semibold mb-1">
              District <span className="text-black">*</span>
            </label>

            <Controller
              control={control}
              name="district"
              rules={{ required: "District is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  id="district"
                  required
                  type="text"
                  placeholder="Enter district"
                  className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), district: e.target.value });
                  }}
                />
              )}
            />
            {errors.district && (
              <p className="text-sm text-red-600 mt-1">{(errors.district as FieldError).message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="pincode" className="block font-semibold mb-1">
            Pincode <span className="text-black">*</span>
          </label>

          <Controller
            control={control}
            name="pincode"
            rules={{
              required: "Pincode is required",
              pattern: {
                value: /^\d{6}$/,
                message: "Pincode must be 6 digits",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="pincode"
                type="text"
                required
                placeholder="e.g., 380001"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({ ...getValues(), pincode: e.target.value });
                }}
              />
            )}
          />
          {errors.pincode && (
            <p className="text-sm text-red-600 mt-1">{(errors.pincode as FieldError).message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="block font-semibold mb-1">
            Full Address
          </label>

          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <textarea
                {...field}
                id="address"
                rows={3}
                placeholder="Enter complete farm address"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 resize-none"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({ ...getValues(), address: e.target.value });
                }}
              />
            )}
          />
          {errors.address && (
            <p className="text-sm text-red-600 mt-1">{(errors.address as FieldError).message}</p>
          )}
        </div>

        <div className="flex justify-between gap-3">
          <AppButton type="default" onClick={onBack} className="text-gray-700 border border-gray-300 hover:bg-gray-100">
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
