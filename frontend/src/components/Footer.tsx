"use client";
import Link from 'next/link';
import { Globe, Users, Share2, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
                <span className="text-3xl font-black text-white tracking-tighter">
                DROPAMIN<span className="text-secondary">.</span>
                </span>
            </Link>
            <p className="text-gray-mid max-w-xs leading-relaxed">
              Prvá shuffle dance akadémia na Slovensku. Drop the beat, feel the dopamine.
            </p>
            <div className="flex gap-4">
              {[Globe, Users, Share2, Send].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-black border border-white/5 text-secondary hover:bg-secondary hover:text-dark transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Nav */}
          <div>
            <h5 className="font-mono text-white text-sm font-bold uppercase tracking-widest mb-8">Navigácia</h5>
            <ul className="grid grid-cols-1 gap-4">
              {["O nás", "Úrovne", "Prečo Shuffle", "Komunita", "Cenník"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-mid hover:text-secondary transition-colors uppercase font-mono text-sm tracking-wider">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h5 className="font-mono text-white text-sm font-bold uppercase tracking-widest mb-8">Kontakt</h5>
            <div className="space-y-6">
                <div>
                    <span className="block text-[10px] text-gray-mid uppercase tracking-[0.3em] mb-1">Inštruktor</span>
                    <span className="text-white text-lg font-bold">Matúš Vršanský</span>
                </div>
                <div>
                    <span className="block text-[10px] text-gray-mid uppercase tracking-[0.3em] mb-1">Lokalita</span>
                    <span className="text-white text-lg font-bold">Žilina, Slovakia</span>
                </div>
                <div>
                    <span className="block text-[10px] text-gray-mid uppercase tracking-[0.3em] mb-1">Email</span>
                    <span className="text-white text-lg font-bold">info@dropamin.sk</span>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-gray-mid text-xs font-mono uppercase tracking-widest">
            © 2026 DROPAMIN Academy. Všetky práva vyhradené.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-mid hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-mid hover:text-white text-[10px] uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
