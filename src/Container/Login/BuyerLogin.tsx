import { useForm, Controller } from "react-hook-form";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import type { FieldError } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PAGE_URL } from "../../utils/constants/routes";

type BuyerLoginValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};


export default function BuyerLogin() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BuyerLoginValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });


  const onSubmit = async () => {
    try {
      navigate('/buyer/dashboard');
    } catch {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <AppCard className="border-blue-300">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Buyer Login</h2>
      <p className="mb-6 text-gray-600">Access your buyer dashboard</p>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Business Email */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Business Email <span className="text-black">*</span>
          </label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
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
                placeholder="buyer@company.com"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
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
          <button type="button" className="text-blue-600 hover:underline">
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
          {isSubmitting ? "Signing in..." : "Sign In as Buyer"}
        </AppButton>

        {/* Footer */}
        <p className="mt-4 text-sm text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline"
            onClick={() => navigate(PAGE_URL.BUYER_REGISTRATION)}
          >
            Register as Buyer
          </button>
        </p>
      </form>
    </AppCard>
  );
}
