"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-[#09090B] border-t border-white/8">
      {/* Top strip */}
      <div className="border-b border-white/8">
        <div className="container mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <div
              className="cursor-pointer mb-5 inline-block"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image src="/wagagai-logo-transparent.png" alt="Wagagai" width={120} height={120} className="h-14 w-auto object-contain" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              A Ugandan precious metal refinery — built on integrity,
              precision, and a commitment to responsible sourcing.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="label mb-5 block">Contact</p>
            <div className="space-y-4 text-sm text-gray-500">
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:info@wagagaigold.co" className="hover:text-[#C9A84C] transition-colors">info@wagagaigold.co</a>
              </div>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Location</p>
                <span>Kampala, Uganda</span>
              </div>
              <div className="pt-2">
                <button
                  className="btn-gold text-xs px-5 py-2.5 cursor-pointer"
                  onClick={() => router.push("/verify")}
                >
                  Verify Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-700 text-xs">
        <span>© {new Date().getFullYear()} Wagagai Gold Mining Ltd. All rights reserved.</span>
        <span>Kampala, Uganda</span>
      </div>
    </footer>
  );
};

export default Footer;
