"use client";
import { Zap, Activity, Award, Flame } from 'lucide-react';

const icons = [Zap, Activity, Award, Flame];

const Levels = ({ levels }: { levels: any[] }) => {
  return (
    <section id="levels" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-secondary text-sm tracking-[0.3em] mb-4">NAVIGÁCIA PROGRESOM</h2>
          <h3 className="text-4xl md:text-6xl">VYBER SI SVOJU ÚROVEŇ</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={level.id}
                className="group relative bg-black p-8 border border-white/10 transition-all duration-500 hover:border-primary hover:glow-purple"
              >
                <div className="mb-8 text-secondary group-hover:scale-110 transition-transform duration-500">
                  <Icon size={48} strokeWidth={1} />
                </div>
                
                <h4 className="text-2xl mb-4 group-hover:text-secondary transition-colors">{level.title}</h4>
                <p className="text-gray-mid text-sm leading-relaxed mb-6">
                  {level.description}
                </p>
                
                <div className="pt-6 border-t border-white/5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary block mb-1">Cieľovka:</span>
                  <span className="text-xs text-white/60 italic">{level.target_audience}</span>
                </div>

                {/* Corner detail */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 flex items-center justify-center font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  0{level.id}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Levels;
