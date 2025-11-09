"use client";

import Link from "next/link";
import Logo from "../components/Logo";

export default function ResetPasswordWaitingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Main Card */}
      <div className="mb-8">
        <Logo />
      </div>
      <div className="w-full max-w-md bg-white border border-purple-200 rounded-xl p-8 shadow-sm text-center">
        {/* Email Icon */}
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
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Check your email
        </h1>

        {/* Descriptive Text */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Please check your inbox and follow the link to securely reset your
          password.
        </p>

        {/* Check Email Button */}
        <button
          onClick={() => {
            // In a real app, this would open the user's email client
            window.open("mailto:", "_blank");
          }}
          className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-base mb-4"
        >
          CHECK EMAIL
        </button>

        {/* Demo Link - Remove in production */}
        <Link
          href="/reset-password?reset-token=demo-token-123&userId=demo-user-456"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-base mb-4 inline-block text-center"
        >
          DEMO: VERIFY RESET TOKEN
        </Link>

        {/* Back to Login Link */}
        <Link
          href="/login"
          className="text-sm text-gray-600 hover:text-gray-800 underline"
        >
          Back to login
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
