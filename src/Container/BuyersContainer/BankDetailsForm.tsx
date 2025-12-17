import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import { useForm, Controller } from "react-hook-form";
import type { BuyerFormData } from "../../interface/components";

interface ContactDetailsProps {
  formData: BuyerFormData;
  setFormData: React.Dispatch<React.SetStateAction<BuyerFormData>>;
  onBack: () => void;
  onNext: () => void;
}

const BankDetailsForm: React.FC<ContactDetailsProps> = ({
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
            Bank Name <span className="text-red-600">*</span>
            <Controller
              name="bankName"
              control={control}
              rules={{ required: "Bank name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="bankName"
                  placeholder="Enter bank name"
                  size="large"
                  className="rounded bg-gray-200"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({ ...getValues(), bankName: e.target.value });
                  }}
                />
              )}
            />
            {errors.bankName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.bankName.message}
              </p>
            )}
          </label>

          <label className="block font-semibold mb-4" htmlFor="lastName">
            Account Holder Name <span className="text-red-600">*</span>
            <Controller
              name="accountHolderName"
              control={control}
              rules={{ required: "Account holder name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="accountHolderName"
                  placeholder="Enter account holder name"
                  size="large"
                  className="rounded bg-gray-200"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({
                      ...getValues(),
                      accountHolderName: e.target.value,
                    });
                  }}
                />
              )}
            />
            {errors.accountHolderName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.accountHolderName.message}
              </p>
            )}
          </label>

          <label className="block font-semibold mb-4" htmlFor="accountNumber">
            Account Number <span className="text-red-600">*</span>
            <Controller
              name="accountNumber"
              control={control}
              rules={{
                required: "Account number is required",
                pattern: {
                  value: /^\d{9,18}$/,
                  message: "Account number must be 9 to 18 digits",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="accountNumber"
                  placeholder="e.g., Procurement Manager"
                  size="large"
                  className="rounded bg-gray-200"
                  onChange={(e) => {
                    field.onChange(e);
                    setFormData({
                      ...getValues(),
                      accountNumber: e.target.value,
                    });
                  }}
                />
              )}
            />
            {errors.accountNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.accountNumber.message}
              </p>
            )}
          </label>

          <div className="flex gap-4 mb-4">
            <label
              className="flex-1 block font-semibold"
              htmlFor="businessEmail"
            >
              IFSC Code <span className="text-red-600">*</span>
              <Controller
                name="ifscCode"
                control={control}
                rules={{
                  required: "IFSC Code is required",
                  pattern: {
                    value: /^[A-Za-z]{4}0[A-Za-z0-9]{6}$/,
                    message: "Enter a valid IFSC (e.g., SBIN0001234)",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="ifscCode"
                    placeholder="e.g., SBIN0001234"
                    type="text"
                    size="large"
                    className="rounded bg-gray-200"
                    onChange={(e) => {
                      field.onChange(e);
                      setFormData({ ...getValues(), ifscCode: e.target.value });
                    }}
                  />
                )}
              />
              {errors.ifscCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.ifscCode.message}
                </p>
              )}
            </label>

            <label
              className="flex-1 block font-semibold"
              htmlFor="mobileNumber"
            >
              Branch Name <span className="text-red-600">*</span>
              <Controller
                name="branchName"
                control={control}
                rules={{
                  required: "Branch Name is required",
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "Branch name must contain only letters and spaces",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="branchName"
                    placeholder="Kottayam"
                    type="text"
                    size="large"
                    className="rounded bg-gray-200"
                    onChange={(e) => {
                      field.onChange(e);
                      setFormData({
                        ...getValues(),
                        branchName: e.target.value,
                      });
                    }}
                  />
                )}
              />
              {errors.branchName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.branchName.message}
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

export default BankDetailsForm;
