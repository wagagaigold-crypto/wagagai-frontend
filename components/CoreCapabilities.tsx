"use client";
import { useState } from "react";

const coreCapabilities = [
  {
    title: "Gold Refining",
    desc: "High-purity gold processing built around speed, accuracy, and client trust.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M10 50h44M16 50V28l16-16 16 16v22" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 50v-12h12v12" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="18" r="4" stroke="#C9A84C" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Purity Assaying",
    desc: "Multi-method testing — fire assay, XRF, and ICP — for certified, reliable results.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M22 10h20v8L32 52 12 18V10h10" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 10h20" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="35" r="5" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M32 30v-8M29 33l-5-5M35 33l5-5" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Casting & Minting",
    desc: "Bespoke bullion bars crafted to your exact weight, brand, and finish requirements.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="10" y="22" width="44" height="24" rx="4" stroke="#C9A84C" strokeWidth="2.5"/>
        <rect x="18" y="30" width="28" height="8" rx="2" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M24 22v-4a8 8 0 0116 0v4" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Material Recovery",
    desc: "Responsible recycling of scrap and byproducts with maximum metal recovery rates.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M32 12v8M32 44v8M12 32h8M44 32h8" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 20l5.6 5.6M38.4 38.4L44 44M20 44l5.6-5.6M38.4 25.6L44 20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="8" stroke="#C9A84C" strokeWidth="2.5"/>
        <circle cx="32" cy="32" r="3" fill="#C9A84C"/>
      </svg>
    ),
  },
  {
    title: "Insured Logistics",
    desc: "Secure, fully insured delivery solutions for clients across Africa and beyond.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M8 40h36V22H8v18z" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 28l8 6v6h-8" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="44" r="4" stroke="#C9A84C" strokeWidth="2.5"/>
        <circle cx="46" cy="44" r="4" stroke="#C9A84C" strokeWidth="2.5"/>
        <path d="M22 44h20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const CoreCapabilities = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#09090B] py-28">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-8 h-px bg-[#C9A84C]"></span>
          <span className="label">03 / Core Capabilities</span>
        </div>
        <h2 className="display text-white mb-16">
          Built for <span className="text-[#C9A84C]">Excellence</span>
        </h2>

        {/* Icon card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreCapabilities.map((item, i) => (
            <div
              key={i}
              className={`group relative border rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                active === i
                  ? "border-[#C9A84C] bg-[#C9A84C]/8"
                  : "border-white/8 hover:border-[#C9A84C]/40 bg-white/3"
              }`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#C9A84C] transition-colors duration-200">
                {item.title}
              </h3>
              <p className={`text-gray-500 text-sm leading-relaxed transition-all duration-300 ${active === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                {item.desc}
              </p>
              {active !== i && (
                <p className="text-gray-600 text-sm leading-relaxed group-hover:hidden">
                  {item.desc.split(" ").slice(0, 6).join(" ")}…
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
