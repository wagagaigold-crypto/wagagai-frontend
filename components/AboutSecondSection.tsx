import Image from "next/image";

const pillars = [
  { icon: "🏅", title: "Deep Industry Knowledge", desc: "Years of hands-on experience refining gold across East Africa and international markets." },
  { icon: "🏭", title: "Modern Refining Infrastructure", desc: "Our facility is built for throughput, precision, and the highest safety standards." },
  { icon: "🔍", title: "Full Transparency", desc: "Every transaction is documented and traceable — no hidden steps, no surprises." },
  { icon: "🌿", title: "Responsible Operations", desc: "We prioritise clean, low-impact processing methods at every stage of production." },
  { icon: "🌍", title: "Regional & International Reach", desc: "Proudly rooted in Uganda, serving clients across Africa and the wider world." },
];

const AboutSecondSection = () => {
  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/assets/about-refining.png"
              alt="Wagagai Refining"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="section-title text-2xl sm:text-3xl text-white mb-8 block">
              Why Partner with Wagagai?
            </h2>
            {pillars.map((p, i) => (
              <div key={i} className="card-dark flex items-start gap-4 p-4 rounded-xl">
                <div className="text-2xl shrink-0">{p.icon}</div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{p.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecondSection;
