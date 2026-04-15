const items = [
  {
    number: "06",
    title: "Sustainability",
    headline: "Clean Refining,\nResponsible Future",
    desc: "At Wagagai, environmental responsibility is built into how we operate — from low-waste processing techniques to careful chemical handling and energy-conscious refining practices.",
  },
  {
    number: "07",
    title: "Global Reach",
    headline: "Rooted in Uganda,\nReaching the World",
    desc: "From Ugandan miners to international bullion buyers, Wagagai serves a diverse client base with the same standard of excellence, regardless of scale or location.",
  },
];

const Susandglobal = () => {
  return (
    <section className="bg-[#FAF8F3] py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#09090B] rounded-2xl p-10 lg:p-14 flex flex-col justify-between min-h-[380px] group hover:ring-1 hover:ring-[#C9A84C]/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="block w-6 h-px bg-[#C9A84C]"></span>
                  <span className="label">{item.number} / {item.title}</span>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-6 whitespace-pre-line">
                  {item.headline}
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed border-t border-white/8 pt-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Susandglobal;
