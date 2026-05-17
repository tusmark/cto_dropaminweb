"use client";
import { useState, useEffect } from 'react';
import { getApiBase } from '@/utils/api';

interface Workshop {
  id: number;
  city: string;
  is_sold_out: number;
}

const ReservationCTA = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshop_id: '',
    tickets_count: 1
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const API_BASE = getApiBase();

    fetch(`${API_BASE}/api/workshops`)
      .then(res => res.json())
      .then(data => {
        if (data.message === 'success') {
          setWorkshops(data.data.filter((w: Workshop) => w.is_sold_out === 0));
        }
      })
      .catch(err => console.error('Error fetching workshops for form:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const API_BASE = getApiBase();

    try {
      const response = await fetch(`${API_BASE}/api/reserve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Rezervácia bola úspešne odoslaná! Vidíme sa na tréningu.');
        setFormData({ name: '', email: '', phone: '', workshop_id: '', tickets_count: 1 });
      } else {
        setStatus('error');
        setMessage(data.error || 'Niečo sa pokazilo. Skúste to znova.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Nepodarilo sa spojiť so serverom.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="registration" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span className="text-[20vw] font-black text-white whitespace-nowrap leading-none font-mono">
          JOIN THE ACADEMY
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-7xl mb-8 leading-tight">
                    ZAISTI SI <span className="text-secondary">SVOJE MIESTO.</span>
                </h2>
                <p className="text-gray-mid font-medium text-lg md:text-xl max-w-2xl mx-auto">
                    Kapacita kurzov je limitovaná, aby sme zabezpečili individuálny prístup. Vyber si svoju úroveň alebo workshop a pridaj sa k nám.
                </p>
            </div>

            {status === 'success' ? (
                <div className="bg-surface p-12 text-center border-2 border-secondary glow-green">
                    <h3 className="text-4xl font-black mb-4 text-secondary uppercase font-mono">ÚSPECH!</h3>
                    <p className="text-white text-xl">{message}</p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="mt-8 btn-primary mx-auto"
                    >
                        Nová registrácia
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-surface p-8 md:p-12 border border-white/10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-secondary text-xs font-bold uppercase tracking-widest font-mono">Meno a priezvisko</label>
                            <input 
                                required
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tvoje Meno" 
                                className="w-full bg-black text-white px-6 py-4 font-bold outline-none border border-white/10 focus:border-secondary transition-colors font-mono"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-secondary text-xs font-bold uppercase tracking-widest font-mono">E-mail</label>
                            <input 
                                required
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="tvoj@email.com" 
                                className="w-full bg-black text-white px-6 py-4 font-bold outline-none border border-white/10 focus:border-secondary transition-colors font-mono"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-secondary text-xs font-bold uppercase tracking-widest font-mono">Úroveň / Workshop</label>
                            <select 
                                required
                                name="workshop_id"
                                value={formData.workshop_id}
                                onChange={handleChange}
                                className="w-full bg-black text-white px-6 py-[18px] font-bold outline-none border border-white/10 focus:border-secondary transition-colors appearance-none font-mono"
                            >
                                <option value="">VYBER SI MOŽNOSŤ</option>
                                <optgroup label="Akadémia">
                                    <option value="začiatočníci">ZAČIATOČNÍCI</option>
                                    <option value="mierne-pokročilí">MIERNE POKROČILÍ</option>
                                    <option value="pokročilí">POKROČILÍ</option>
                                </optgroup>
                                <optgroup label="Tour 2026">
                                    {workshops.map(w => (
                                        <option key={w.id} value={w.id}>{w.city.toUpperCase()}</option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-secondary text-xs font-bold uppercase tracking-widest font-mono">Počet osôb</label>
                            <input 
                                required
                                type="number" 
                                min="1"
                                max="10"
                                name="tickets_count"
                                value={formData.tickets_count}
                                onChange={handleChange}
                                className="w-full bg-black text-white px-6 py-4 font-bold outline-none border border-white/10 focus:border-secondary transition-colors font-mono"
                            />
                        </div>
                    </div>

                    {status === 'error' && (
                        <p className="text-red-500 font-bold text-sm uppercase tracking-tight font-mono">{message}</p>
                    )}

                    <button 
                        disabled={status === 'loading'}
                        type="submit"
                        className="w-full btn-gradient py-6 text-lg disabled:opacity-50"
                    >
                        {status === 'loading' ? 'Odosielam...' : 'REGISTROVAŤ SA TERAZ →'}
                    </button>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
