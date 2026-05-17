"use client";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            {/* Visual with motion blur effect using gradient */}
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden bg-surface">
                <img 
                    src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974&auto=format&fit=crop" 
                    alt="Shuffle Joy" 
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 signature-gradient mix-blend-overlay opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            {/* Accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary" />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl">
              Tancuj pre <br />
              <span className="text-primary italic">čistú radosť.</span>
            </h2>
            
            <div className="space-y-6 text-gray-mid text-lg leading-relaxed">
              <p>
                Dropamin nie je len o krokoch. Je o momente, kedy sa hudba spojí s tvojím telom a svet okolo prestane existovať. Shuffle dance je oslobodzujúci, energický a vysoko návykový.
              </p>
              
              <blockquote className="font-mono text-white text-xl md:text-2xl border-l-4 border-secondary pl-6 py-2 italic">
                "Nezáleží na tom, ako to vyzerá, ale ako sa pri tom cítiš. To je naša filozofia."
              </blockquote>
              
              <p>
                V našej akadémii búrame mýty o tom, že tanec je len pre vyvolených. Každý tréning je navrhnutý tak, aby ťa nabil dopamínom a posunul tvoje hranice, či už máš 15 alebo 50 rokov.
              </p>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="font-mono text-secondary text-3xl font-bold">100%</span>
                <span className="text-xs uppercase tracking-widest text-gray-mid">Vášeň</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-mono text-secondary text-3xl font-bold">0%</span>
                <span className="text-xs uppercase tracking-widest text-gray-mid">Predsudky</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
