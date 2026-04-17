import { Search, ShoppingCart, Menu, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home',         id: 'hero' },
  { label: 'Parks',        id: 'parks' },
  { label: 'Shops',        id: 'retail' },
  { label: 'Dining',       id: 'dining' },
  { label: 'Events',       id: 'events' },
  { label: 'Marvel',       id: 'marvel' },
  { label: 'Contact',      id: 'contact' }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-zinc-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo + Nav */}
        <div className="flex items-center gap-10">
          <button onClick={() => scrollTo('hero')} className="text-xl font-black tracking-tighter uppercase whitespace-nowrap hover:text-blue-600 transition-colors">
            American Dream<span className="text-blue-600">.</span>
          </button>
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-black uppercase tracking-widest text-zinc-400">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-4 text-zinc-400">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-zinc-700 transition-colors">
              <MapPin size={15} />
              <span className="text-[10px] uppercase font-bold tracking-wider">Directions</span>
            </div>
            <div className="flex items-center gap-1.5 border-l pl-4 border-zinc-100 cursor-pointer hover:text-zinc-700 transition-colors">
              <Clock size={15} />
              <span className="text-[10px] uppercase font-bold tracking-wider">Hours</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-zinc-50 rounded-full transition-colors"><Search size={19} /></button>
            <button className="p-2 hover:bg-zinc-50 rounded-full transition-colors"><ShoppingCart size={19} /></button>
            <button
              className="lg:hidden p-2 hover:bg-zinc-50 rounded-full transition-colors"
              onClick={() => setMobileOpen(o => !o)}
            >
              <Menu size={19} />
            </button>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:block btn-primary text-[10px] uppercase tracking-widest px-6 py-3"
          >
            Book Tickets
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-zinc-100 bg-white px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-sm font-black uppercase tracking-widest text-zinc-500 hover:text-blue-600 transition-colors py-2"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
