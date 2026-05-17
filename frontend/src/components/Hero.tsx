"use client";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Using a placeholder for the video loop */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-40 scale-105 animate-pulse"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop')" }}
        />
      </div>

      {/* Pulsing Background Orbs */}
      <div className="bg-glow-orb bg-primary w-[500px] h-[500px] -top-20 -left-20 animate-pulse" />
      <div className="bg-glow-orb bg-secondary w-[400px] h-[400px] bottom-0 -right-20 animate-pulse delay-700" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
        <h1 className="text-5xl md:text-8xl mb-6 leading-tight">
          Drop the beat,<br />
          <span className="text-secondary">feel the dopamine.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-mid max-w-2xl mx-auto mb-10 font-medium">
          Shuffle dance kurzy pre každého, bez rozdielu veku.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#about" className="btn-primary py-5 px-12 text-lg">
            ZISTIŤ VIAC
          </Link>
          <Link href="#levels" className="btn-gradient py-5 px-12 text-lg bg-none border border-white/20 hover:border-secondary">
            MOJE ÚROVNE
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <span className="font-mono text-secondary text-sm tracking-widest uppercase vertical-rl">scroll</span>
      </div>
    </section>
  );
};

export default Hero;
