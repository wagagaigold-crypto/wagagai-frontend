const services = [
  { title: "Gold Refining",         desc: "We process raw gold to the highest purity standards using proven refining techniques tailored to each client's requirements." },
  { title: "Assaying & Analysis",   desc: "Rigorous quality testing via fire assay, XRF, and ICP methods — delivering certified purity reports you can trust." },
  { title: "Casting & Minting",     desc: "Custom cast bars and minted bullion crafted to specification, with bespoke branding and professional packaging available." },
  { title: "Scrap & Recovery",      desc: "We extract maximum value from scrap gold, jewellery, and industrial material through high-efficiency recovery processing." },
  { title: "Secure Transportation", desc: "End-to-end insured logistics with robust security protocols — your precious metals move safely from our facility to yours." },
];

const Services = () => {
  return (
    <section className="bg-[#FAF8F3] py-28">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#C9A84C]"></span>
              <span className="label text-[#C9A84C]">02 / Services</span>
            </div>
            <h2 className="display text-[#09090B]">
              What We <span className="text-[#C9A84C]">Offer</span>
            </h2>
          </div>
          <p className="text-gray-500 lg:self-end text-base leading-relaxed">
            From raw ore to refined bullion, our end-to-end services cover every
            stage of precious metal processing — with precision and integrity at
            the core of everything we do.
          </p>
        </div>

        {/* Numbered list */}
        <div className="divide-y divide-gray-200">
          {services.map((s, i) => (
            <div
              key={i}
              className="group grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr_1fr] items-center gap-6 py-8"
            >
              {/* Number */}
              <span className="text-[#C9A84C] text-sm font-semibold tracking-widest">0{i + 1}</span>

              {/* Title */}
              <h3 className="text-[#09090B] font-bold text-lg group-hover:text-[#C9A84C] transition-colors duration-200">
                {s.title}
              </h3>

              {/* Desc – hidden on mobile */}
              <p className="hidden sm:block text-gray-500 text-sm leading-relaxed">{s.desc}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
