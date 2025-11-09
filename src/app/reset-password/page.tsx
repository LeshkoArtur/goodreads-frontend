"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Input from "../components/ui/Input";
import Logo from "../components/Logo";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetToken = searchParams.get("reset-token");
  const userId = searchParams.get("userId");

  useEffect(() => {
    // If we have reset token and userId, verify them
    if (resetToken && userId) {
      const verifyResetToken = async () => {
        try {
          setIsLoading(true);
          // Simulate API delay
          await new Promise((resolve) => setTimeout(resolve, 2000));

          // Simulate API call (replace with actual API call)
          // const response = await fetch('/api/verify-reset-token', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({ resetToken, userId })
          // });

          console.log("Verifying reset token:", { resetToken, userId });

          setIsSuccess(true);
          setIsLoading(false);
        } catch (err) {
          setError("Failed to verify reset token. Please try again.");
          setIsLoading(false);
        }
      };

      verifyResetToken();
    }
  }, [resetToken, userId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.push("Please enter a valid email address");
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid, proceed with submission
    console.log("Reset password form submitted:", formData);
    setErrors([]);
    // Redirect to waiting page
    router.push("/reset-password-waiting");
  };

  // Loading state for token verification
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        {/* Header with Logo */}
        <div className="mb-8">
          <Logo />
        </div>

        {/* Loading Card */}
        <div className="w-full max-w-md border border-purple-200 rounded-xl p-8 shadow-sm text-center">
          {/* Loading Spinner */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            </div>
          </div>

          {/* Loading Text */}
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Verifying reset token...
          </h1>
          <p className="text-gray-600">
            Please wait while we verify your password reset request.
          </p>
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

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        {/* Header with Logo */}
        <div className="mb-8">
          <Logo />
        </div>

        {/* Error Card */}
        <div className="w-full max-w-md bg-white border border-red-200 rounded-xl p-8 shadow-sm text-center">
          {/* Error Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Verification Failed
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>

          {/* Back to Reset Password Button */}
          <Link
            href="/reset-password"
            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-base inline-block"
          >
            REQUEST NEW RESET LINK
          </Link>
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

  // Success state - Password reset successfully
  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        {/* Header with Logo */}
        <div className="mb-8">
          <Logo />
        </div>

        {/* Success Card */}
        <div className="w-full max-w-md bg-white border border-purple-200 rounded-xl p-8 shadow-sm text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-xl font-semibold text-gray-800 mb-6">
            Password reset successfully
          </h1>

          {/* Sign In Button */}
          <Link
            href="/login"
            className="w-full bg-[#424A72] hover:bg-[#323856] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-base inline-block"
          >
            SIGN IN
          </Link>
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

  // Default form state
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Header with Logo */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* Reset Password Form Card */}
      <div className="w-full max-w-md bg-white border border-purple-200 rounded-xl p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Address */}
          <Input
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.some((error) => error.includes("email"))}
            required
          />

          {/* Send Reset Password Button */}
          <button
            type="submit"
            className="w-full bg-[#424A72] hover:bg-[#333958] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-base"
          >
            SEND ME RESET PASSWORD
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
