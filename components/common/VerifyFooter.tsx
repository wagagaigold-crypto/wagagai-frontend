"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const VerifyFooter = () => {
  const router = useRouter();

  return (
    <>
      <footer className="bg-[#252525] py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center text-white gap-y-4 md:gap-x-8 lg:gap-x-10">

            {/* 1. Copyright */}
            <div className="text-center text-base order-3 md:order-1">
              © Copyright 2025 <strong>Wagagai.</strong> All Rights Reserved.
            </div>

            {/* 2. Logo */}
            <div
              className="flex justify-center cursor-pointer order-1 md:order-2"
              onClick={() => router.push('/')}
            >
              <Image
                src="/wagagai-logo-transparent.png"
                alt="Wagagai Logo"
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </div>

            {/* 3. Contact Us Info */}
            <div className="text-center text-base order-2 md:order-3">
              Contact info:{" "}
              <a
                href="mailto:info@wagagaigold.co"
                className="text-[#D4A017] hover:underline whitespace-nowrap ms-2"
              >
                info@wagagaigold.co
              </a>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default VerifyFooter;
