import SignUpForm from "../components/SignUpForm";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto items-center justify-center flex flex-col gap-12">
        <Image src="/assets/readloop-logo.png" alt="logo" width={250} height={35} />
        <SignUpForm />
      </div>
    </div>
  );
}
