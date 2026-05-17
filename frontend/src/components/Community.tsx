"use client";
import { Star } from 'lucide-react';

const Community = ({ testimonials, stats }: { testimonials: any[], stats: any }) => {
  return (
    <section id="community" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="mb-24">
          <h2 className="font-mono text-secondary text-sm tracking-[0.3em] mb-8">FEEDBACK OD VÁS</h2>
          
          <div className="relative inline-block">
             <div className="absolute inset-0 bg-secondary blur-[60px] opacity-20" />
             <div className="font-mono text-8xl md:text-[120px] font-bold text-white relative z-10 leading-none">
               {stats.avg_rating}
               <span className="text-secondary">/10</span>
             </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-6">
            {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="#CCFF00" color="#CCFF00" />)}
            <span className="ml-2 font-mono text-white text-lg">5/5 Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card p-8 group hover:glow-green transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-secondary text-xs uppercase tracking-widest">{t.source}</span>
                <div className="flex gap-1">
                   {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} fill="#CCFF00" color="#CCFF00" />)}
                </div>
              </div>
              
              <p className="text-white text-lg mb-8 italic">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-mono text-primary font-bold">
                  {t.author[0]}
                </div>
                <span className="font-bold text-white uppercase tracking-tight">{t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
