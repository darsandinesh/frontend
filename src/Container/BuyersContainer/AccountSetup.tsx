import { FileTextOutlined } from "@ant-design/icons";
import { Checkbox, Input } from "antd";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import { useForm, Controller } from "react-hook-form";
import type { BuyerFormData } from "../../interface/components";

interface Props {
  formData: BuyerFormData;
  setFormData: React.Dispatch<React.SetStateAction<BuyerFormData>>;
  onBack: () => void;
  onSubmit: () => void;
}

const AccountSetupForm: React.FC<Props> = ({
  formData,
  setFormData,
  onBack,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<BuyerFormData>({ mode: "onBlur", defaultValues: formData });

  const watchedPassword = watch("password") ?? "";

  const submit = (values: BuyerFormData) => {
    setFormData(values);
    onSubmit();
  };

  return (
    <AppCard className="p-6 border-blue-300 rounded-lg">
      <div className="flex items-start gap-2 mb-4">
        <FileTextOutlined className="text-blue-600 text-xl mt-1 flex-shrink-0" />
        <div>
          <h2 className="font-semibold text-lg text-gray-900">Account Setup</h2>
          <p className="text-gray-500 text-sm mb-4">
            Complete your registration
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(submit)} className="w-full">
        <label className="block font-semibold mb-2">
          Create Password <span className="text-red-600">*</span>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Minimum 8 characters"
                size="large"
                className="rounded bg-gray-200"
                onChange={(e) => {
                  field.onChange(e); // update RHF
                  setFormData({ ...getValues(), password: e.target.value }); // update parent state
                }}
              />
            )}
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </label>

        <label className="block font-semibold mb-4">
          Confirm Password <span className="text-red-600">*</span>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm password is required",
              validate: (value) =>
                value === watchedPassword || "Passwords do not match",
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Re-enter password"
                size="large"
                className="rounded bg-gray-200"
                onChange={(e) => {
                  field.onChange(e);
                  setFormData({
                    ...getValues(),
                    confirmPassword: e.target.value,
                  });
                }}
              />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </label>
      </form>

      <Controller
        name="agreeTerms"
        control={control}
        rules={{ required: "You must accept the terms" }}
        render={({ field }) => (
          <Checkbox
            {...field}
            checked={field.value}
            className="mb-4"
            onChange={(e) => {
              field.onChange(e);
              setFormData({ ...getValues(), agreeTerms: e.target.checked });
            }}
          >
            I agree to AgriLink's Terms of Service, Privacy Policy, and
            Enterprise Buyer Agreement. I confirm that all information provided
            is accurate and I am authorized to represent the company.
          </Checkbox>
        )}
      />
      {errors.agreeTerms && (
        <p className="text-red-600 text-sm mb-3">{errors.agreeTerms.message}</p>
      )}

      <div className="flex items-center gap-2 text-blue-700 bg-blue-100 border border-blue-300 px-4 py-3 rounded-md text-sm mb-6">
        <span role="img" aria-label="note" className="select-none text-lg">
          📋
        </span>
        <p>
          Your account will be verified by our team within 24-48 hours. You'll
          receive an email once approved.
        </p>
      </div>

      <div className="flex justify-between">
        <AppButton
          type="default"
          onClick={onBack}
          className="flex items-center gap-1"
        >
          ← Back
        </AppButton>
        <AppButton
          type="primary"
          onClick={handleSubmit(onSubmit)}
          className="flex items-center gap-1"
        >
          Complete Registration
        </AppButton>
      </div>
    </AppCard>
  );
};

export default AccountSetupForm;
