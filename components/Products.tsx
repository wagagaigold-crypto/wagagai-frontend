import Image from "next/image";

const products = [
  {
    title: "Cast Gold Bars",
    badge: "Investor Grade",
    desc: "Available in multiple weights — 1 kg, 500 g, 100 g and more — suitable for investors, institutions, and bulk purchasers.",
    img: "/assets/refining-a.jpg",
  },
  {
    title: "Certified Gold Bars",
    badge: "Presidential Endorsed",
    desc: "Precision-certified bars bearing the Wagagai mark — inspected at the highest levels, trusted by institutions across East Africa.",
    img: "/assets/sevo2.jpg",
  },
];

const Products = () => {
  return (
    <section className="bg-[#FAF8F3] py-28">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#C9A84C]"></span>
              <span className="label text-[#C9A84C]">04 / Products</span>
            </div>
            <h2 className="display text-[#09090B]">
              Certified <span className="text-[#C9A84C]">Bullion</span>
            </h2>
          </div>
          <p className="text-gray-500 lg:self-end text-base leading-relaxed">
            Every Wagagai product meets global investor standards — traceable,
            certified, and crafted with precision from our state-of-the-art facility.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#09090B] text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              {/* Text */}
              <div className="p-8">
                <h3 className="text-[#09090B] text-xl font-bold mb-3 group-hover:text-[#C9A84C] transition-colors duration-200">
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-[#C9A84C] mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
