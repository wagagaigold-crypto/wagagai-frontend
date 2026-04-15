const certificates = [
  {
    title: "Quality Management",
    code: "ISO 9001",
    icon: (
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M48 8L14 22v26c0 20 14.7 38.7 34 44 19.3-5.3 34-24 34-44V22L48 8z" stroke="#C9A84C" strokeWidth="3" fill="none"/>
        <path d="M34 48l10 10 18-20" stroke="#C9A84C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Environmental Management",
    code: "ISO 14001",
    icon: (
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M48 8L14 22v26c0 20 14.7 38.7 34 44 19.3-5.3 34-24 34-44V22L48 8z" stroke="#C9A84C" strokeWidth="3" fill="none"/>
        <path d="M48 30c-8 8-12 18-8 28 4 2 8 2 12 0 8-10 6-20 0-26" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round"/>
        <path d="M48 56V72" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Occupational Health & Safety",
    code: "ISO 45001",
    icon: (
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M48 8L14 22v26c0 20 14.7 38.7 34 44 19.3-5.3 34-24 34-44V22L48 8z" stroke="#C9A84C" strokeWidth="3" fill="none"/>
        <circle cx="48" cy="36" r="7" stroke="#C9A84C" strokeWidth="3"/>
        <path d="M30 66c0-9.9 8.1-18 18-18s18 8.1 18 18" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const Certifications = () => {
  return (
    <section className="bg-[#09090B] py-28">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#C9A84C]"></span>
          <span className="label">05 / Certifications & Standards</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <h2 className="display text-white">
            Internationally<br/>
            <span className="text-[#C9A84C]">Accredited</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            We operate under internationally recognised accreditation for quality,
            environment, and safety — ensuring every product meets the strictest
            global standards.
          </p>
        </div>

        {/* Certs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
          {certificates.map((c, i) => (
            <div key={i} className="flex flex-col items-center text-center p-12">
              <div className="w-20 h-20 mb-8">
                {c.icon}
              </div>
              <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-2">{c.code}</span>
              <h3 className="text-white font-semibold text-base">{c.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
