"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Input from "../components/ui/Input";
import Logo from "../components/Logo";

export default function NewPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (formData.newPassword.length < 3) {
      newErrors.push("Password must be at least 3 characters long");
    }

    if (formData.newPassword.length > 30) {
      newErrors.push("Password must be no more than 30 characters long");
    }

    const passwordRegex = /^[a-z0-9_]+$/;
    if (!passwordRegex.test(formData.newPassword)) {
      newErrors.push(
        "Password can only contain lowercase letters, numbers, and underscores"
      );
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.push("Password confirmation does not match");
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setErrors([]);

    try {
      // Simulate API call to change password
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const resetToken = searchParams.get("reset-token");
      const userId = searchParams.get("userId");

      console.log("Changing password:", {
        newPassword: formData.newPassword,
        resetToken,
        userId,
      });

      router.push(`/reset-password?reset-token=${resetToken}&userId=${userId}`);
    } catch (error) {
      setErrors(["Failed to change password. Please try again."]);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Header with Logo */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* New Password Form Card */}
      <div className="w-full max-w-md border border-purple-200 rounded-xl p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password */}
          <Input
            label="New password"
            type="password"
            name="newPassword"
            placeholder="Enter your password"
            value={formData.newPassword}
            onChange={handleInputChange}
            error={errors.some(
              (error) =>
                error.includes("Password") && !error.includes("confirmation")
            )}
            showPasswordToggle={true}
            required
          />

          {/* Confirm New Password */}
          <Input
            label="Confirm new password"
            type="password"
            name="confirmPassword"
            placeholder="Enter your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={errors.some((error) => error.includes("confirmation"))}
            showPasswordToggle={true}
            required
          />

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-red-500 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-red-800 font-medium text-sm">
                    There were {errors.length} error
                    {errors.length > 1 ? "s" : ""} with your password:
                  </h3>
                  <ul className="mt-2 text-red-700 text-sm space-y-1">
                    {errors.map((error, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Change Password Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#424A72] hover:bg-[#323856] disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-base flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                CHANGING PASSWORD...
              </>
            ) : (
              "CHANGE MY PASSWORD"
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-gray-800">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-gray-800">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
