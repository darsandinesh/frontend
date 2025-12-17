import { UserOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import { useForm, Controller } from "react-hook-form";
import type { BuyerFormData } from "../../interface/components";
import { DesignationLabel, Designation } from "../../enums/designation";

const { Option } = Select;

interface ContactDetailsProps {
  formData: BuyerFormData;
  setFormData: React.Dispatch<React.SetStateAction<BuyerFormData>>;
  onBack: () => void;
  onNext: () => void;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
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
    <div className="max-w-3xl mx-auto">
      <AppCard className="p-6 border-blue-300 rounded-lg shadow-sm">
        <div className="flex items-start gap-2 mb-4 text-gray-900">
          <UserOutlined className="text-xl mt-1 flex-shrink-0 text-blue-600" />
          <div>
            <h2 className="font-semibold text-lg">Contact Person Details</h2>
            <p className="text-gray-500 text-sm">
              Primary contact for your account
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit(submit)} className="w-full">
          <label className="block font-semibold mb-4" htmlFor="firstName">
            First Name <span className="text-red-600">*</span>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="firstName"
                  placeholder="Enter contact person's name"
                  size="large"
                  className="rounded bg-gray-200"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), firstName: e.target.value });
                  }}
                />
              )}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </label>

          <label className="block font-semibold mb-4" htmlFor="lastName">
            Last Name <span className="text-red-600">*</span>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="lastName"
                  placeholder="Enter contact person's name"
                  size="large"
                  className="rounded bg-gray-200"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), lastName: e.target.value });
                  }}
                />
              )}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </label>

          <label className="flex-1 block font-semibold" htmlFor="city">
            Full Address <span className="text-red-600">*</span>
            <Controller
              name="fullAddress"
              control={control}
              rules={{ required: "Full address is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="fullAddress"
                  placeholder="Full Address"
                  size="large"
                  className="rounded bg-gray-200"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({
                      ...getValues(),
                      fullAddress: e.target.value,
                    });
                  }}
                />
              )}
            />
            {errors.fullAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullAddress.message}
              </p>
            )}
          </label>

          <label className="flex-1 block font-semibold" htmlFor="city">
            Personal Email <span className="text-red-600">*</span>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="email"
                  placeholder="Enter contact person's email"
                  size="large"
                  className="rounded bg-gray-200"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), email: e.target.value });
                  }}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </label>

          <label className="block font-semibold mb-4" htmlFor="designation">
            Designation <span className="text-red-600">*</span>
            <Controller
              name="designation"
              control={control}
              rules={{ required: "Designation is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select designation"
                  size="large"
                  allowClear
                  className="mb-4 w-full"
                  onChange={(value) => {
                    field.onChange(value);
                    setFormData((prev) => ({ ...prev, designation: value }));
                  }}
                >
                  {Object.values(Designation).map((type) => (
                    <Option key={type} value={type}>
                      {DesignationLabel[type]}
                    </Option>
                  ))}
                </Select>
              )}
            />
            {errors.designation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.designation.message}
              </p>
            )}
          </label>

          <div className="flex gap-4 mb-4">
            <label
              className="flex-1 block font-semibold"
              htmlFor="mobileNumber"
            >
              Mobile Number <span className="text-red-600">*</span>
              <Controller
                name="mobileNumber"
                control={control}
                rules={{
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message:
                      "Invalid mobile number format (10 digits starting with 6-9)",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="mobileNumber"
                    placeholder="+91 98765 43210"
                    type="tel"
                    size="large"
                    className="rounded bg-gray-200"
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobileNumber.message}
                </p>
              )}
            </label>
          </div>
        </form>

        {/* Button Group */}
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

export default ContactDetails;
