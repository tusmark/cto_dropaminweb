"use client";
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Levels from '@/components/Levels';
import WhyShuffle from '@/components/WhyShuffle';
import Tour from '@/components/Tour';
import Community from '@/components/Community';
import Pricing from '@/components/Pricing';
import ReservationCTA from '@/components/ReservationCTA';
import Footer from '@/components/Footer';

// Importing local data
import academyData from '../../academy-data.json';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById('cursor');
      if (cursor) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isLoaded) return <div className="bg-black h-screen w-screen" />;

  return (
    <main className="relative bg-black min-h-screen text-white selection:bg-secondary selection:text-black scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Levels levels={academyData.levels} />
      <WhyShuffle />
      <Tour />
      <Community testimonials={academyData.testimonials} stats={academyData.stats} />
      <Pricing pricing={academyData.pricing} />
      <ReservationCTA />
      <Footer />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 blur-[150px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 blur-[200px] opacity-30" />
      </div>

      {/* Custom Cursor Overlay (Basic) */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
          .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid #CCFF00;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease-out, width 0.3s, height 0.3s;
            mix-blend-mode: difference;
          }
          a:hover ~ .custom-cursor, button:hover ~ .custom-cursor {
            transform: scale(3);
            background: #CCFF00;
            mix-blend-mode: normal;
          }
        }
      `}</style>
      <div id="cursor" className="custom-cursor hidden lg:block" />
    </main>
  );
}
