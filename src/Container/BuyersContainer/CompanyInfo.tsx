import React from "react";
import { ApartmentOutlined, BulbOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import { useForm, Controller } from "react-hook-form";
import type { BuyerFormData } from "../../interface/components";
import { CompanyType, CompanyTypeLabel } from "../../enums/company-type";
import { useNavigate } from "react-router-dom";
import { PAGE_URL } from "../../utils/constants/routes";

const { Option } = Select;

interface CompanyInfoProps {
  formData: BuyerFormData;
  setFormData: React.Dispatch<React.SetStateAction<BuyerFormData>>;
  onNext: () => void;
  onCancel: () => void;
}

const CompanyInfoForm: React.FC<CompanyInfoProps> = ({
  formData,
  setFormData,
  onNext,
  // onCancel,
}) => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<BuyerFormData>({
    defaultValues: formData,
  });

  const submit = (values: BuyerFormData) => {
    setFormData(values);
    onNext();
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* PROGRESS TABS AND BAR can be here or in parent */}

      <AppCard className="p-6 rounded-lg border-gray-300 shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-gray-900">
          <ApartmentOutlined className="text-xl" />
          <div>
            <h2 className="font-semibold text-lg">Company Information</h2>
            <p
              className="
            -gray-500 text-sm"
            >
              Tell us about your organization
            </p>
          </div>
        </div>

        {/* Company Name */}
        <form onSubmit={handleSubmit(submit)} className="w-full">
          <label className="block font-semibold mb-1" htmlFor="companyName">
            Company Name <span className="text-red-600">*</span>
          </label>
          <Controller
            name="companyName"
            control={control}
            rules={{ required: "Company name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                id="companyName"
                type="text"
                required
                placeholder="Enter your company name"
                size="large"
                className="mb-4"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({ ...getValues(), companyName: e.target.value });
                }}
              />
            )}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mb-4">
              {errors.companyName.message}
            </p>
          )}

          {/* Company Type */}
          <label className="block font-semibold mb-1" htmlFor="companyType">
            Company Type <span className="text-red-600">*</span>
          </label>
          <Controller
            name="companyType"
            control={control}
            rules={{ required: "Company type is required" }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select company type"
                size="large"
                allowClear
                className="mb-4 w-full"
                onChange={(value) => {
                  field.onChange(value); // <-- update react-hook-form
                  setFormData((prev) => ({ ...prev, companyType: value })); // <-- your custom update
                }}
              >
                {Object.values(CompanyType).map((type) => (
                  <Option key={type} value={type}>
                    {CompanyTypeLabel[type]} {/* <-- FULL NAME */}
                  </Option>
                ))}
              </Select>
            )}
          />
          {errors.companyType && (
            <p className="text-red-500 text-sm mb-4">
              {errors.companyType.message}
            </p>
          )}

          {/* GST and PAN */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="gstNumber">
                GST Number <span className="text-red-600">*</span>
              </label>
              <Controller
                name="gstNumber"
                control={control}
                rules={{
                  required: "GST Number is required",
                  pattern: {
                    value:
                      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                    message: "Invalid GST Number format",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="gstNumber"
                    placeholder="e.g., 27AAAAA0000A1Z5"
                    size="large"
                    onChange={(e) => {
                      field.onChange(e);
                      setFormData({
                        ...getValues(),
                        gstNumber: e.target.value,
                      });
                    }}
                  />
                )}
              />
              {errors.gstNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gstNumber.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="panNumber">
                PAN Number <span className="text-red-600">*</span>
              </label>
              <Controller
                name="panNumber"
                control={control}
                rules={{
                  required: "PAN Number is required",
                  pattern: {
                    value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                    message: "Invalid PAN Number format",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="panNumber"
                    placeholder="e.g., AAAAA0000A"
                    size="large"
                    onChange={(e) => {
                      field.onChange(e);
                      setFormData({
                        ...getValues(),
                        panNumber: e.target.value,
                      });
                    }}
                  />
                )}
              />
              {errors.panNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.panNumber.message}
                </p>
              )}
            </div>

            <div className="mb-1">
              <label
                htmlFor="aadhaarNumber"
                className="block font-semibold mb-1"
              >
                Aadhaar Number (for verification)
              </label>
              <Controller
                control={control}
                name="aadhaarNumber"
                rules={{
                  validate: (val) => {
                    if (!val) return true;
                    const digits = val.replace(/\s+/g, "");
                    return (
                      /^\d{12}$/.test(digits) || "Aadhaar must be 12 digits"
                    );
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="aadhaarNumber"
                    type="text"
                    placeholder="XXXX XXXX XXXX"
                    className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                    onChange={(e) => {
                      field.onChange(e);
                      setFormData({
                        ...getValues(),
                        aadhaarNumber: e.target.value,
                      });
                    }}
                  />
                )}
              />
              {errors.aadhaarNumber && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.aadhaarNumber.message}
                </p>
              )}
            </div>
          </div>

          {/* Info Box */}
          <div className="flex items-center gap-2 bg-blue-100 border border-blue-300 p-3 mb-6 text-blue-700 rounded text-sm">
            <BulbOutlined />
            <span>
              All enterprises must have valid GST and PAN for B2B transactions
            </span>
          </div>
        </form>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <AppButton
            type="default"
            onClick={() => navigate(PAGE_URL.LANDING_PAGE)}
          >
            Cancel
          </AppButton>
          <AppButton type="primary" onClick={handleSubmit(submit)}>
            Next →
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};

export default CompanyInfoForm;
