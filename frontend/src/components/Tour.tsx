"use client";
import { useEffect, useState } from 'react';
import { getApiBase } from '@/utils/api';
import { MapPin, Calendar, Clock, Ticket } from 'lucide-react';

interface Workshop {
  id: number;
  city: string;
  date: string;
  time: string;
  location: string;
  price: number;
  is_sold_out: boolean;
}

const Tour = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE = getApiBase();
    fetch(`${API_BASE}/api/workshops`)
      .then(res => res.json())
      .then(data => {
        if (data.message === 'success') {
          setWorkshops(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching workshops:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <section id="tour" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-mono text-secondary text-sm tracking-[0.3em] mb-4 uppercase">Letná Tour 2026</h2>
            <h3 className="text-4xl md:text-7xl leading-none">DROPAMIN NA CESTÁCH</h3>
          </div>
          <div className="text-gray-mid font-mono text-right hidden md:block">
            9 MIEST / 2 KRAJINY / 1 BEAT
          </div>
        </div>

        <div className="space-y-4">
          {workshops.map((w) => (
            <div 
              key={w.id}
              className={`group flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 border border-white/5 transition-all duration-300 ${w.is_sold_out ? 'opacity-50 grayscale' : 'hover:bg-black hover:border-secondary hover:glow-green'}`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16 w-full lg:w-auto">
                {/* City */}
                <div className="flex flex-col items-center md:items-start min-w-[150px]">
                  <span className="font-mono text-secondary text-xs uppercase tracking-widest mb-1">Mesto</span>
                  <span className="text-3xl font-bold uppercase tracking-tighter">{w.city}</span>
                </div>

                {/* Date & Time */}
                <div className="flex gap-8">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-gray-mid" />
                    <span className="font-mono text-white text-sm">{w.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-gray-mid" />
                    <span className="font-mono text-white text-sm">{w.time}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="hidden xl:flex items-center gap-3 text-gray-mid">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">{w.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-8 mt-6 lg:mt-0 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-white/10 pt-6 lg:pt-0">
                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-2xl font-bold text-white">{w.price}</span>
                  <span className="text-secondary">€</span>
                </div>

                {w.is_sold_out ? (
                  <span className="bg-white/10 text-white/40 px-6 py-3 font-mono text-xs uppercase font-bold tracking-widest border border-white/5 cursor-not-allowed">
                    Sold Out
                  </span>
                ) : (
                  <a 
                    href="#registration"
                    className="bg-secondary text-dark px-6 py-3 font-mono text-xs uppercase font-bold tracking-widest hover:bg-white transition-colors flex items-center gap-2"
                  >
                    Rezervovať <Ticket size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tour;
