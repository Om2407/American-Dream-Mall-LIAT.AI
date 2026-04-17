
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import BrandLogoStrip from './components/BrandLogoStrip';
import Overview from './components/sections/Overview';
import ParksSection from './components/sections/ParksSection';
import WaterParkSection from './components/sections/WaterParkSection';
import MallTourSection from './components/sections/MallTourSection';
import Retail from './components/sections/Retail';
import Entertainment from './components/sections/Entertainment';
import Events from './components/sections/Events';
import DiningSection from './components/sections/DiningSection';
import Contact from './components/sections/Contact';
import WaterParkSimulation from './components/WaterParkSimulation';
import ScrollGuide from './components/ScrollGuide';
import BrandView from './components/BrandView';
import AIConcierge from './components/AIConcierge';
import MarvelSection from './components/sections/MarvelSection';
import { ParkingCircle } from 'lucide-react';
import { SocialSection } from './components/sections/SocailSection';
import ParkingSection from './components/sections/ParkingSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSimOpen, setIsSimOpen] = useState(false);
  const [selectedBrandView, setSelectedBrandView] = useState<any | null>(null);

  useEffect(() => {
    document.body.style.overflow = isSimOpen ? 'hidden' : 'auto';
  }, [isSimOpen]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    ['hero','overview','retail','entertainment','events','contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <main className="relative bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <div className="flex flex-col">
        <Hero />
        <BrandLogoStrip />
        <Overview />
        <ParksSection />
        <WaterParkSection />
        <MallTourSection />
        <Retail onNavigateBrand={setSelectedBrandView} />
        <Entertainment onStartSim={() => setIsSimOpen(true)} />
        <Events />
        <DiningSection />
        <MarvelSection /> 
        <Contact />
        <ParkingCircle/>
        <SocialSection />
        <ParkingSection />
      </div>

      <AnimatePresence>
        {isSimOpen && <WaterParkSimulation onOpenChange={setIsSimOpen} />}
      </AnimatePresence>
      <AnimatePresence>
        {selectedBrandView && <BrandView brand={selectedBrandView} onBack={() => setSelectedBrandView(null)} />}
      </AnimatePresence>

      <ScrollGuide activeSection={activeSection} />
      <AIConcierge />

      <footer className="relative bg-zinc-900 py-24 px-12 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-16 text-[11px] text-zinc-400 uppercase tracking-widest font-bold">
        <div className="max-w-sm">
          <div className="text-2xl text-white font-black tracking-tighter mb-8">AMERICAN DREAM.</div>
          <p className="leading-loose mb-8 normal-case font-normal text-zinc-500">
            Sign up for the latest news on openings, events, and promotions.
          </p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email" className="bg-zinc-800 border-none rounded-lg px-4 py-3 text-white flex-1" />
            <button className="bg-blue-600 text-white rounded-lg px-6 py-3">Join</button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12">
          {[
            { title: 'Plan Your Trip', items: ['Hours & Directions','Parking','Transportation'] },
            { title: 'Partner With Us', items: ['Leasing','Advertising','Events & Group Sales'] },
            { title: 'About', items: ['Careers','Contact us','Press'] },
          ].map(col => (
            <div key={col.title} className="space-y-4">
              <div className="text-white mb-6">{col.title}</div>
              {col.items.map(item => <div key={item} className="hover:text-white cursor-pointer transition-colors">{item}</div>)}
            </div>
          ))}
        </div>
      </footer>

      {/* Luxury border frame */}
      <div className="fixed inset-0 pointer-events-none border-[20px] border-white z-[100] md:block hidden" />
    </main>
  );
}
