"use client";

import { useState } from "react";
import Input from "./ui/Input";
import Image from "next/image";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    // Password validation
    if (formData.password.length < 6) {
      newErrors.push("Password is too short (minimum is 6 characters)");
    }

    // Check if password has at least one number or special character
    const hasNumberOrSpecial = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
      formData.password
    );
    if (!hasNumberOrSpecial) {
      newErrors.push("Please use at least one number or special character");
    }

    // Password confirmation validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.push("Password confirmation does not match");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.push("Please enter a valid email address");
    }

    // Username validation
    if (formData.username.length < 3) {
      newErrors.push("Username must be at least 3 characters long");
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
    console.log("Form submitted:", formData);
    setErrors([]);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm">
      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
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
              <h3 className="text-red-800 font-medium text-base">
                There were {errors.length} error{errors.length > 1 ? "s" : ""}{" "}
                your form submission:
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

      <form onSubmit={handleSubmit} className="space-y-4">
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

        {/* Username */}
        <Input
          label="Username"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleInputChange}
          error={errors.some((error) => error.includes("Username"))}
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
            error={errors.some(
              (error) =>
                error.includes("Password") && !error.includes("confirmation")
            )}
            showPasswordToggle={true}
            required
          />
          <p className="mt-2 text-sm text-gray-500">
            Lowercase letters, numbers, and underscores only 3 to 30 characters.
          </p>
        </div>

        {/* Password Confirmation */}
        <Input
          label="Password confirmation"
          type="password"
          name="confirmPassword"
          placeholder="Enter your password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={errors.some((error) => error.includes("confirmation"))}
          showPasswordToggle={true}
          required
        />

        {/* Newsletter Checkbox */}
        <div className="flex items-center">
          <div className="relative flex-shrink-0">
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
              className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-0 focus:border-[#9574AE] appearance-none bg-white checked:bg-white checked:border-[#9574AE] cursor-pointer"
            />
            {formData.newsletter && (
              <svg
                className="absolute top-0 left-0 w-5 h-5 pointer-events-none"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  fill="#9574AE"
                />
              </svg>
            )}
          </div>
          <label
            htmlFor="newsletter"
            className="ml-3 text-gray-600 text-base cursor-pointer leading-5"
          >
            Sign up to our product newsletter
          </label>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-base"
        >
          SIGN UP
        </button>

        {/* Already have account */}
        <div className="text-center">
          <p className="text-gray-600 text-base mb-4">
            Already have an account?
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-base">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4">
          {/* Apple */}
          <button
            type="button"
            className="w-14 h-14 bg-[#9574AE] hover:bg-[#a883c4] rounded-xl flex items-center justify-center transition-colors duration-200"
            aria-label="Sign up with Apple"
          >
            <Image
              src="/assets/icons/apple-icon.svg"
              alt="Apple"
              width={24}
              height={24}
            />
          </button>

          {/* Facebook */}
          <button
            type="button"
            className="w-14 h-14 bg-[#9574AE] hover:bg-[#a883c4] rounded-xl flex items-center justify-center transition-colors duration-200"
            aria-label="Sign up with Facebook"
          >
            <Image
              src="/assets/icons/fb-icon.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </button>

          {/* Google */}
          <button
            type="button"
            className="w-14 h-14 bg-[#9574AE] hover:bg-[#a883c4] rounded-xl flex items-center justify-center transition-colors duration-200"
            aria-label="Sign up with Google"
          >
            <Image
              src="/assets/icons/google-icon.svg"
              alt="Google"
              width={24}
              height={24}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
