import { useForm, Controller } from "react-hook-form";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import type { FieldError } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PAGE_URL } from "../../utils/constants/routes";

type FarmerLoginValues = {
  email: string; // email or mobile
  password: string;
  rememberMe: boolean;
};

export default function FarmerLogin() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FarmerLoginValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async () => {
    try {
      navigate('/farmer/dashboard');
    } catch {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <AppCard className="border-green-300">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Farmer Login</h2>
      <p className="mb-6 text-gray-600">Access your farmer dashboard</p>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Email or Mobile */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email or Mobile <span className="text-black">*</span>
          </label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email or mobile is required",
              validate: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const mobileRegex = /^\+?[1-9]\d{1,14}$/;
                if (emailRegex.test(value) || mobileRegex.test(value)) {
                  return true;
                }
                return "Enter a valid email or mobile number";
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="email"
                type="text"
                placeholder="farmer@example.com or +91 98765 43210"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            )}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">
              {(errors.email as FieldError).message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block font-semibold mb-1">
            Password <span className="text-black">*</span>
          </label>
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            )}
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">
              {(errors.password as FieldError).message}
            </p>
          )}
        </div>

        {/* Remember & Forgot */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <Controller
              control={control}
              name="rememberMe"
              render={({ field }) => (
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              )}
            />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="text-green-600 hover:underline"
            // onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </button>
        </div>

        {/* Submit */}
        <AppButton
          type="primary"
          className="w-full bg-black text-white hover:bg-gray-900"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Signing in..." : "Sign In as Farmer"}
        </AppButton>

        {/* Footer */}
        <p className="mt-4 text-sm text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="text-green-600 font-semibold hover:underline"
            onClick={() => navigate(PAGE_URL.FARMER_REGISTRATION)}
          >
            Register as Farmer
          </button>
        </p>
      </form>
    </AppCard>
  );
}
