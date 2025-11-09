"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "../components/ui/Input";
import Logo from "../components/Logo";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

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

    // Password validation
    if (formData.password.length < 3) {
      newErrors.push("Password must be at least 3 characters long");
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
    console.log("Login form submitted:", formData);
    setErrors([]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Header with Logo */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* Login Form Card */}
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

          {/* Password */}
          <div>
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.some((error) => error.includes("Password"))}
              showPasswordToggle={true}
              required
            />
            <p className="mt-2 text-sm text-gray-600">
              Lowercase letters, numbers, and underscores only 3 to 30 characters.
            </p>
          </div>

          {/* Don't have account link */}
          <div className="text-right">
            <Link
              href="/signup"
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              Don't have an account?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-base"
          >
            SIGN IN
          </button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <Link
              href="/reset-password"
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              Forgot your password?
            </Link>
          </div>
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
