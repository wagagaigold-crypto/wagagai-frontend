"use client";
import { useState } from "react";

const faqs = [
  { q: "How do I verify that my Wagagai gold product is genuine?",       a: "Enter the serial number printed on your Wagagai certificate into the verification field on this page, then press Verify. Our system will match it against the official registry and display the product's full details — including metal type, purity, and weight." },
  { q: "Where do I find my certificate serial number?",                  a: "Your serial number appears on the physical Wagagai Certificate of Authenticity included with your product. It is also embedded in the QR code on that certificate for quick scanning." },
  { q: "What if my QR code scan fails?",                                 a: "Try cleaning the lens and scanning under good lighting. If the problem continues, type the serial number manually into the verify field. Still having trouble? Contact Wagagai support with a clear photo of your certificate." },
  { q: "Is one certificate valid for one product only?",                 a: "Yes — every Wagagai certificate corresponds to a single, specific item. A certificate cannot be transferred to another product, and attempting to use one for a different item will return a mismatch in our system." },
  { q: "I received multiple items. Do I verify them separately?",        a: "Yes. Each item in your order has its own certificate with its own serial number. Please run a separate verification for each product to confirm authenticity individually." },
  { q: "Will my certificate become invalid over time?",                  a: "Wagagai certificates do not expire. As long as the gold product is in its original, unaltered condition, the certificate remains a valid proof of authenticity." },
  { q: "How do I know if a certificate has been forged?",                a: "If a serial number returns no results or the details shown do not match the physical product, treat the item with caution. Contact Wagagai immediately with the certificate number and photos — our team will investigate." },
  { q: "How quickly do I get a verification result?",                    a: "Results are returned instantly in most cases. If a manual review is needed, a member of the Wagagai team will follow up with you directly." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#09090B] py-28">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#C9A84C]"></span>
              <span className="label">08 / FAQ</span>
            </div>
            <h2 className="display text-white">
              Frequently<br/>
              <span className="text-[#C9A84C]">Asked</span>
            </h2>
          </div>
          <p className="text-gray-500 lg:self-end text-base leading-relaxed">
            Everything you need to know about verifying Wagagai-certified gold
            and using our authentication system.
          </p>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/8">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-6 group cursor-pointer"
              >
                <span className={`font-medium text-base transition-colors duration-200 ${open === i ? "text-[#C9A84C]" : "text-white group-hover:text-[#C9A84C]"}`}>
                  {faq.q}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-sm transition-all duration-200 ${open === i ? "border-[#C9A84C] text-[#C9A84C] rotate-45" : "border-white/20 text-white/40"}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="pb-6 text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "Keep your certificate in a safe place as proof of authenticity.",
            "Do not accept a product or certificate that looks altered or tampered.",
            "Ensure product details on the certificate match the physical gold item.",
          ].map((tip, i) => (
            <div key={i} className="border border-white/8 rounded-xl p-6">
              <div className="text-[#C9A84C] text-lg mb-3">✓</div>
              <p className="text-gray-400 text-sm leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
