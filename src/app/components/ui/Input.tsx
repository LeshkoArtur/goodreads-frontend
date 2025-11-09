"use client";

import { forwardRef, useState } from "react";
import Image from "next/image";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      className,
      showPasswordToggle = false,
      type,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
      setInputType(showPassword ? "password" : "text");
    };

    return (
      <div className="w-full font-regular font-sans">
        {label && (
          <label className="block text-[#424A72] text-base mb-2">{label}</label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={showPasswordToggle ? inputType : type}
            className={`
              w-full px-4 py-3 border-2 border-[#424A72] rounded-xl
              focus:outline-none focus:border-slate-500 focus:ring-0
              placeholder:text-gray-400 text-[#424A72]
              transition-colors duration-200
              ${showPasswordToggle ? "pr-12" : ""}
              ${error ? "border-red-500 focus:border-red-500" : ""}
              ${className || ""}
            `}
            {...props}
          />
          {showPasswordToggle && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
              tabIndex={-1}
            >
              <Image
                src="/assets/icons/eye-icon.svg"
                alt={showPassword ? "Hide password" : "Show password"}
                width={21}
                height={20}
                className={showPassword ? "opacity-100" : "opacity-50"}
              />
            </button>
          )}
        </div>
        {helperText && (
          <p
            className={`mt-2 text-sm ${
              error ? "text-red-500" : "text-[#424A72]"
            }`}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
