const stats = [
  { value: "99.99%", label: "Purity Standard" },
  { value: "Certified", label: "Refining Process" },
  { value: "Global", label: "Market Reach" },
  { value: "Trusted", label: "By Institutions" },
];

const Hero = ({ onVerify }: { onVerify?: () => void }) => {
  return (
    <div className="layout-wrapper">
      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 lg:px-16 py-32">
          <div className="max-w-xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-[#C9A84C]"></span>
              <span className="label">Kampala, Uganda</span>
            </div>

            {/* Headline */}
            <h1 className="display text-white mb-6">
              Where Gold{" "}
              <br />
              <span className="text-[#C9A84C]">Meets Precision</span>
            </h1>

            {/* Body */}
            <p className="text-gray-400 text-base leading-relaxed max-w-md mb-10">
              A Ugandan precious metal refinery — delivering certified
              gold refining, assaying, and casting services to East Africa
              and global markets.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button onClick={onVerify} className="btn-gold cursor-pointer">
                Verify Certificate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 text-center ${i !== 3 ? "border-r border-white/10" : ""}`}
              >
                <div className="text-[#C9A84C] text-2xl font-bold tracking-tight">{s.value}</div>
                <div className="text-gray-500 text-xs mt-1 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
