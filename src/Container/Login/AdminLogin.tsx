import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AppCard from "../../components/AppCard";
import AppButton from "../../components/AppButton";
import { loginAdmin } from "../../Api/adminApi";
import type { FieldError } from "react-hook-form";

type AdminLoginValues = {
  email: string;
  password: string;
};

export default function AdminLogin() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (values: AdminLoginValues) => {
    try {
      // const res = await loginAdmin({
      //   email: values.email,
      //   password: values.password,
      // });

      // if (res.success) {
      //   navigate("/admin/dashboard");
      // } else {
      //   alert(res.message ?? "Login failed. Please try again.");
      // }
      navigate("/admin/dashboard");
    } catch {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <AppCard className="border-purple-300">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Admin Login</h2>
      <p className="mb-4 text-gray-600">Access system administration panel</p>

      {/* Info banner */}
      <div className="mb-6 text-xs text-purple-700 bg-purple-50 border border-purple-200 rounded-lg px-3 py-2">
        Admin access is restricted to authorized AgriLink personnel only.
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Admin Email */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Admin Email <span className="text-black">*</span>
          </label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Admin email is required",
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
                placeholder="admin@agrilink.com"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
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
                placeholder="Enter admin password"
                className="w-full bg-gray-100 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
              />
            )}
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">
              {(errors.password as FieldError).message}
            </p>
          )}
        </div>

        {/* Submit */}
        <AppButton
          type="primary"
          className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Signing in..." : "Sign In as Admin"}
        </AppButton>
      </form>
    </AppCard>
  );
}
