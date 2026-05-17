"use client";
import Image from 'next/image';

const experience = [
  {
    title: "Shuffle základy a footwork",
    description: "Kroky ako Running Man, T-Step, spiny a technika, ktorá ti dá základ, aj keď si nikdy netancoval.",
    image: "/assets/tour-placeholder.png"
  },
  {
    title: "Freestyle, hudba a energia",
    description: "Prestaneš len rátať kroky a začneš cítiť beat. Freestyle nie je póza — je to sloboda pohybu, ktorá príde sama.",
    image: "/assets/tour-placeholder.png"
  },
  {
    title: "Komunita a Dropamin experience",
    description: "Nie si na workshopoch sám. Ideš si energiu, stretneš nových ľudí a zažiješ vibe, ktorý ťa pohltí.",
    image: "/assets/tour-placeholder.png"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
            <span className="text-primary font-black uppercase text-xs tracking-[0.4em] mb-4 block">Viac ako tanec</span>
            <h2 className="text-white">Čo zažiješ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {experience.map((item, index) => (
            <div key={index} className="group">
              <div className="aspect-square relative mb-10 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 overflow-hidden border border-white/10">
                <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                    <span className="text-primary text-4xl font-black italic">0{index + 1}</span>
                </div>
              </div>
              <h3 className="text-white text-2xl mb-6 tracking-tighter group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed font-medium text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
