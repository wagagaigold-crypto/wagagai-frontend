import Image from "next/image";

const Recognition = () => {
  return (
    <section className="bg-[#09090B] py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#C9A84C]"></span>
              <span className="label">Presidential Recognition</span>
            </div>
            <h2 className="display text-white">
              Endorsed at the{" "}
              <span className="text-[#C9A84C]">Highest Level</span>
            </h2>
          </div>
          <p className="text-gray-500 lg:self-end text-base leading-relaxed">
            Wagagai Gold Mining received a prestigious visit from His Excellency
            the President of Uganda, who personally inspected our state-of-the-art
            Beneficiation System and held certified gold produced at our facility —
            a testament to our standing in Uganda's mining sector.
          </p>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Large photo — group */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden group">
            <div className="aspect-[4/3] relative">
              <Image
                src="/assets/sevo1.jpg"
                alt="Presidential visit to Wagagai Gold Mining facility"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-1">
                  Official Inspection
                </p>
                <p className="text-white text-sm font-medium leading-snug max-w-sm">
                  His Excellency the President inspects the Wagagai Beneficiation System
                </p>
              </div>
            </div>
          </div>

          {/* Tall photo — gold bar */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group">
            <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative min-h-[300px]">
              <Image
                src="/assets/sevo2.jpg"
                alt="President holds certified Wagagai gold bar"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-1">
                  Certified Gold
                </p>
                <p className="text-white text-sm font-medium leading-snug">
                  The President holds a certified Wagagai gold bar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote strip */}
        <div className="mt-10 border border-white/8 rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="text-[#C9A84C] text-5xl font-serif leading-none shrink-0">"</div>
          <div>
            <p className="text-white text-lg font-medium leading-relaxed italic">
              We warmly welcome His Excellency the President for his inspection
              of the Wagagai Beneficiation System.
            </p>
            <p className="text-gray-500 text-sm mt-3">
              — Official banner, Wagagai Gold Mining Facility, Uganda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
