import Image from "next/image";

const pillars = [
  { title: "Industry Knowledge",            desc: "Skilled specialists dedicated to refining gold across East Africa and international markets." },
  { title: "Modern Refining Infrastructure", desc: "Our facility is built for throughput, precision, and the highest safety standards." },
  { title: "Full Transparency",            desc: "Every transaction is documented and traceable — no hidden steps, no surprises." },
  { title: "Responsible Operations",       desc: "We prioritise clean, low-impact processing methods at every stage of production." },
  { title: "Regional & International Reach", desc: "Proudly rooted in Uganda, serving clients across Africa and the wider world." },
];

const AboutUs = () => {
  return (
    <>
      {/* About intro ─────────────────────────────────── */}
      <section className="bg-[#FAF8F3] py-28">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-[#C9A84C]"></span>
                <span className="label text-[#C9A84C]">01 / About Us</span>
              </div>
              <h2 className="display text-[#09090B] mb-6">
                Uganda's Home of<br/>
                <span className="text-[#C9A84C]">Certified Gold</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Wagagai Gold Mining is a Ugandan-based refinery dedicated to setting
                the standard for precious metal processing in East Africa. Our team
                brings expertise at every stage — from raw material intake to
                final certified output.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Backed by modern technology and an unwavering commitment to accuracy,
                we serve individual investors, institutions, and industrial clients.
              </p>
            </div>

            {/* Right: image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/assets/sevo1.jpg"
                  alt="Presidential visit to Wagagai Gold Mining"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner ─────────────────────────────────── */}
      <section className="bg-[#09090B] py-28">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#C9A84C]"></span>
            <span className="label">Why Partner with Us</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <h2 className="display text-white">
              Five Reasons<br/>
              Clients <span className="text-[#C9A84C]">Choose</span><br/>
              Wagagai
            </h2>
            <div className="divide-y divide-white/8">
              {pillars.map((p, i) => (
                <div key={i} className="py-6 group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[#C9A84C] text-xs font-semibold tracking-widest">0{i + 1}</span>
                      <h4 className="text-white font-semibold text-base mt-1 group-hover:text-[#C9A84C] transition-colors duration-200">
                        {p.title}
                      </h4>
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
