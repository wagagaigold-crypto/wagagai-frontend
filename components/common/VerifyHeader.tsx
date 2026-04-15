// components/VerifyHeader.js
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const VerifyHeader = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#09090B]/90 backdrop-blur-md text-white border-b border-white/8 header-container">
      <div className="container flex items-center justify-between px-3 py-3 mx-auto sm:px-6 sm:py-3">
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/wagagai-logo-transparent.png"
            alt="Wagagai Logo"
            width={500}
            height={500}
            className="h-14 w-auto object-contain"
          />
        </div>

        <button
          className="btn-gold text-xs px-5 py-2 cursor-pointer"
          onClick={() => router.push("/verify")}
        >
          Verify Certificate
        </button>
      </div>
    </header>
  );
};

export default VerifyHeader;
