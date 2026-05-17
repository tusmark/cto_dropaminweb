"use client";
import Link from 'next/link';

const Navbar = () => {
  const links = [
    { name: "O nás", href: "#about" },
    { name: "Úrovne", href: "#levels" },
    { name: "Prečo Shuffle", href: "#why-shuffle" },
    { name: "Komunita", href: "#community" },
    { name: "Cenník", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-black text-white tracking-tighter">
            DROPAMIN<span className="text-secondary">.</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex space-x-8 items-center">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="font-mono text-sm uppercase tracking-wider text-gray-mid hover:text-secondary transition-colors relative group py-2">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link href="#pricing" className="bg-secondary text-dark px-8 py-4 font-mono font-bold uppercase transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 py-2 px-6 text-xs">
            ZAREGISTRUJ SA
          </Link>
        </div>

        <button className="lg:hidden text-secondary font-mono text-sm font-bold">
          MENU
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
