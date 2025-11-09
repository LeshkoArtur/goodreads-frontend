import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/assets/readloop-logo.png"
        alt="ReadLoop"
        width={140}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </div>
  );
}
