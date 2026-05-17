"use client";

const WhyShuffle = () => {
  const benefits = [
    {
      title: "Kardio",
      description: "500-850 kcal za jeden tréning. Najzábavnejší spôsob, ako budovať kondíciu a spaľovať tuky.",
      value: "850 kcal"
    },
    {
      title: "Mental Health",
      description: "Okamžité uvoľnenie endorfínov a dopamínu. Tanec ako terapia proti stresu a úzkosti.",
      value: "Stress Off"
    },
    {
      title: "Komunita",
      description: "Nové priateľstvá, podpora a energia, ktorú nikde inde nezažiješ. Sme rodina.",
      value: "Energy+"
    }
  ];

  return (
    <section id="why-shuffle" className="py-24 md:py-32 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-7xl mb-16 leading-tight">
            VÝHODY, KTORÉ <br />
            <span className="text-secondary">UDRÚ NAPLNO.</span>
          </h2>

          <div className="space-y-12 md:space-y-24">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
                <div className="font-mono text-7xl md:text-9xl text-white/5 group-hover:text-secondary/20 transition-colors duration-500 leading-none">
                  0{index + 1}
                </div>
                <div className="pt-2 md:pt-8 flex-1">
                    <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl md:text-5xl">{benefit.title}</h3>
                        <span className="font-mono text-secondary text-sm px-3 py-1 border border-secondary/30 rounded-full">{benefit.value}</span>
                    </div>
                  <p className="text-gray-mid text-xl md:text-2xl max-w-2xl leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative background text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 rotate-90 origin-right pointer-events-none">
        <span className="text-[20vh] font-black text-white/5 uppercase whitespace-nowrap">
          BEAT FEEL STEP REPEAT
        </span>
      </div>
    </section>
  );
};

export default WhyShuffle;
