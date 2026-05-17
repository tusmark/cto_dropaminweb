"use client";
import { Check } from 'lucide-react';

const Pricing = ({ pricing }: { pricing: any[] }) => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-secondary text-sm tracking-[0.3em] mb-4">CENNÍK & REGISTRÁCIA</h2>
          <h3 className="text-4xl md:text-6xl">PRIDAJ SA K NÁM</h3>
          <div className="mt-4 font-mono text-gray-mid">
             Next batch starts: <span className="text-secondary">01.06.2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-surface p-10 border-2 ${plan.id === 2 ? 'border-secondary' : 'border-white/5'} flex flex-col`}
            >
              {plan.id === 2 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-dark font-mono text-[10px] font-black px-4 py-1 uppercase tracking-widest">
                  Najobľúbenejšie
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-gray-mid font-mono">{plan.currency}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-mid">
                    <Check size={16} className="text-secondary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`${plan.id === 2 ? 'btn-gradient' : 'bg-white/10 hover:bg-white/20 text-white'} w-full py-4 font-mono font-bold uppercase tracking-widest transition-all`}>
                ZAREGISTRUJ SA
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
