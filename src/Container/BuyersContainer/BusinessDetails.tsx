import { EnvironmentOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import { useForm, Controller } from "react-hook-form";
import type { BuyerFormData } from "../../interface/components";
import {
  AnnualProcurementVol,
  AnnualProcurementVolLabel,
} from "../../enums/annual-procurement";
import {
  ProcurementFrequency,
  ProcurementFrequencyLabel,
} from "../../enums/procurement-frequency";

const { Option } = Select;

interface BusinessDetailsProps {
  formData: BuyerFormData;
  setFormData: React.Dispatch<React.SetStateAction<BuyerFormData>>;
  onBack: () => void;
  onNext: () => void;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  formData,
  setFormData,
  onBack,
  onNext,
}) => {
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
    <div className="max-w-3xl mx-auto px-4">
      {/* Remove outer header and progress tabs from here */}

      <AppCard className="p-6 border-blue-300 rounded-lg shadow-sm">
        <div className="flex items-start gap-2 mb-4 text-gray-900">
          <EnvironmentOutlined className="text-xl mt-1 flex-shrink-0 text-blue-600" />
          <div>
            <h2 className="font-semibold text-lg">Business Details</h2>
            <p className="text-gray-500 text-sm mb-4">
              Location and procurement information
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(submit)}>
          <label className="block font-semibold mb-4" htmlFor="businessAddress">
            Business Address <span className="text-red-600">*</span>
            <Controller
              name="businessAddress"
              control={control}
              rules={{ required: "Business address is required" }}
              render={({ field }) => (
                <Input.TextArea
                  {...field}
                  id="businessAddress"
                  placeholder="Enter complete business address"
                  size="large"
                  className="rounded bg-gray-200"
                  rows={3}
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({
                      ...getValues(),
                      businessAddress: e.target.value,
                    });
                  }}
                />
              )}
            />
            {errors.businessAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessAddress.message}
              </p>
            )}
          </label>

          <label className="flex-1 block font-semibold" htmlFor="businessEmail">
            Business Email <span className="text-red-600">*</span>
            <Controller
              name="businessEmail"
              control={control}
              rules={{
                required: "Business email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="businessEmail"
                  placeholder="contact@company.com"
                  type="email"
                  size="large"
                  className="rounded bg-gray-200"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({
                      ...getValues(),
                      businessEmail: e.target.value,
                    });
                  }}
                />
              )}
            />
            {errors.businessEmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessEmail.message}
              </p>
            )}
          </label>

          <label className="flex-1 block font-semibold" htmlFor="businessPhone">
            Business Phone <span className="text-red-600">*</span>
            <Controller
              name="businessPhone"
              control={control}
              rules={{
                required: "Business phone is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Invalid phone format",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="businessPhone"
                  placeholder="1234567890"
                  type="text"
                  size="large"
                  className="rounded bg-gray-200"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({
                      ...getValues(),
                      businessPhone: e.target.value,
                    });
                  }}
                />
              )}
            />
            {errors.businessPhone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessPhone.message}
              </p>
            )}
          </label>

          <div className="flex gap-4 mb-5 flex-col md:flex-row">
            <label className="flex-1 block font-semibold" htmlFor="city">
              City <span className="text-red-600">*</span>
              <Controller
                name="city"
                control={control}
                rules={{ required: "City is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="city"
                    placeholder="City"
                    size="large"
                    className="rounded bg-gray-200"
                    onChange={(e) => {
                      field.onChange(e);
                      setFormData({ ...getValues(), city: e.target.value });
                    }}
                  />
                )}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </label>
            <label className="flex-1 block font-semibold" htmlFor="state">
              State <span className="text-red-600">*</span>
              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    id="state"
                    placeholder="Select state"
                    size="large"
                    className="rounded bg-gray-200 w-full"
                    onChange={(value) => {
                      field.onChange(value);
                      setFormData((prev) => ({ ...prev, state: value }));
                    }}
                  >
                    <Option value="Maharashtra">Maharashtra</Option>
                    <Option value="Karnataka">Karnataka</Option>
                    <Option value="Tamil Nadu">Tamil Nadu</Option>
                    <Option value="Delhi">Delhi</Option>
                  </Select>
                )}
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </label>
            <label className="flex-1 block font-semibold" htmlFor="district">
              district <span className="text-red-600">*</span>
              <Controller
                name="district"
                control={control}
                rules={{ required: "district is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    id="district"
                    placeholder="Select district"
                    size="large"
                    className="rounded bg-gray-200 w-full"
                    onChange={(value) => {
                      field.onChange(value);
                      setFormData((prev) => ({ ...prev, district: value }));
                    }}
                  >
                    <Option value="Idukki">Idukki</Option>
                    <Option value="Wayanad">Wayanad</Option>
                    <Option value="Kannur">Kannur</Option>
                    <Option value="Kochi">Kochi</Option>
                  </Select>
                )}
              />
              {errors.district && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.district.message}
                </p>
              )}
            </label>
            <label className="flex-1 block font-semibold" htmlFor="pincode">
              Pincode <span className="text-red-600">*</span>
              <Controller
                name="pincode"
                control={control}
                rules={{
                  required: "Pincode is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Invalid pincode format (6 digits)",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="pincode"
                    placeholder="e.g., 400001"
                    size="large"
                    className="rounded bg-gray-200"
                    onChange={(e) => {
                      field.onChange(e);
                      setFormData({ ...getValues(), pincode: e.target.value });
                    }}
                  />
                )}
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pincode.message}
                </p>
              )}
            </label>
          </div>

          <label
            className="block font-semibold mb-4"
            htmlFor="annualProcurementVolume"
          >
            Estimated Annual Procurement Volume
            <Controller
              name="annualProcurementVol"
              control={control}
              rules={{ required: "Annual Procurement Volume is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select company type"
                  size="large"
                  allowClear
                  className="mb-4 w-full"
                  onChange={(value) => {
                    field.onChange(value);
                    setFormData((prev) => ({
                      ...prev,
                      annualProcurementVolume: value,
                    }));
                  }}
                >
                  {Object.values(AnnualProcurementVol).map((type) => (
                    <Option key={type} value={type}>
                      {AnnualProcurementVolLabel[type]} {/* <-- FULL NAME */}
                    </Option>
                  ))}
                </Select>
              )}
            />
          </label>

          <label
            className="block font-semibold mb-6"
            htmlFor="procurementFrequency"
          >
            Procurement Frequency
            <Controller
              name="procurementFrequency"
              control={control}
              rules={{ required: "Procurement Frequency is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select company type"
                  size="large"
                  allowClear
                  className="mb-4 w-full"
                  onChange={(value) => {
                    field.onChange(value);
                    setFormData((prev) => ({
                      ...prev,
                      procurementFrequency: value,
                    }));
                  }}
                >
                  {Object.values(ProcurementFrequency).map((type) => (
                    <Option key={type} value={type}>
                      {ProcurementFrequencyLabel[type]} {/* <-- FULL NAME */}
                    </Option>
                  ))}
                </Select>
              )}
            />
          </label>
        </form>

        <div className="flex justify-between gap-4">
          <AppButton
            type="default"
            onClick={onBack}
            className="flex items-center gap-1"
          >
            ← Back
          </AppButton>
          <AppButton
            type="primary"
            onClick={handleSubmit(submit)}
            className="flex items-center gap-1"
          >
            Next →
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};

export default BusinessDetails;
