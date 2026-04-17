import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';

const brandData = [
  {
    name: 'Hermès', color: '#de7a31', url: 'https://www.hermes.com',
    specialty: 'High Jewelry & Leather',
    desc: 'Since 1837, Hermès has remained faithful to its artisan model. World-renowned for leather goods, silk scarves, and Birkin bags.',
    why: 'Ultra-high-net-worth clientele within 20 miles. Average transaction: $2,400+',
    founded: '1837', origin: 'Paris, France',
    svgLogo: <svg viewBox="0 0 140 28" style={{width:120,height:22}}><text x="2" y="21" fontFamily="Georgia,serif" fontSize="18" fontWeight="700" fill="#de7a31" letterSpacing="3">HERMÈS</text></svg>,
  },
  {
    name: 'Gucci', color: '#006633', url: 'https://www.gucci.com',
    specialty: 'Ready-to-Wear',
    desc: 'Influential, innovative and progressive. Gucci redefines luxury for the 21st century with bold designs and cultural relevance.',
    why: '40M+ annual visitors, 60% aged 18–45. Prime demographic for luxury fashion.',
    founded: '1921', origin: 'Florence, Italy',
    svgLogo: <svg viewBox="0 0 90 28" style={{width:76,height:22}}><text x="2" y="21" fontFamily="Georgia,serif" fontSize="18" fontWeight="700" fill="#006633" letterSpacing="2">GUCCI</text></svg>,
  },
  {
    name: 'Saint Laurent', color: '#000000', url: 'https://www.ysl.com',
    specialty: 'French Luxury',
    desc: 'Founded in 1961, Saint Laurent remains a symbol of Parisian elegance and rock-and-roll rebellion. Iconic for its tuxedo suit.',
    why: 'Proximity to NYC fashion market. Foot traffic from 8M annual tri-state shoppers.',
    founded: '1961', origin: 'Paris, France',
    svgLogo: <svg viewBox="0 0 200 22" style={{width:160,height:16}}><text x="2" y="16" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700" fill="#000" letterSpacing="4">SAINT LAURENT</text></svg>,
  },
  {
    name: 'Cartier', color: '#CC0000', url: 'https://www.cartier.com',
    specialty: 'Jewelry & Timepieces',
    desc: 'Jeweler of Kings, King of Jewelers. Cartier produces watches, jewelry, and luxury items that transcend time.',
    why: 'Highest per-sq-ft revenue potential. Average jewelry purchase: $8,000+',
    founded: '1847', origin: 'Paris, France',
    svgLogo: <svg viewBox="0 0 110 28" style={{width:88,height:22}}><text x="2" y="21" fontFamily="Georgia,serif" fontSize="17" fontWeight="400" fill="#CC0000" letterSpacing="3">CARTIER</text></svg>,
  },
  {
    name: 'Dior', color: '#1a1a1a', url: 'https://www.dior.com',
    specialty: 'Haute Couture',
    desc: 'The House of Dior has defined the modern silhouette since 1947. A testament to timeless style and innovative haute couture.',
    why: 'Event-driven retail — 200+ mall events/year drive premium foot traffic.',
    founded: '1946', origin: 'Paris, France',
    svgLogo: <svg viewBox="0 0 70 28" style={{width:56,height:22}}><text x="2" y="22" fontFamily="Georgia,serif" fontSize="20" fontWeight="700" fill="#1a1a1a" letterSpacing="3">Dior</text></svg>,
  },
  {
    name: 'Louis Vuitton', color: '#211205', url: 'https://www.louisvuitton.com',
    specialty: 'Luxury Travel',
    desc: 'The Art of Travel since 1854. Legendary trunks, leather goods, and the iconic LV monogram define global luxury.',
    why: 'Only 8 miles from Manhattan — gateway to the world\'s wealthiest consumer market.',
    founded: '1854', origin: 'Paris, France',
    svgLogo: <svg viewBox="0 0 60 44" style={{width:42,height:32}}><text x="2" y="36" fontFamily="Georgia,serif" fontSize="34" fontWeight="700" fill="#211205" letterSpacing="-2">LV</text></svg>,
  },
  {
    name: 'Chanel', color: '#111111', url: 'https://www.chanel.com',
    specialty: 'Haute Couture',
    desc: 'The essence of timeless elegance. Chanel defines feminine style through bold vision, the iconic No. 5, and signature tweed.',
    why: 'Mall\'s luxury wing delivers white-glove experience matching Chanel\'s brand standards.',
    founded: '1910', origin: 'Paris, France',
    svgLogo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style={{width:38,height:38}}>
        <circle cx="15" cy="25" r="13" fill="none" stroke="#000" strokeWidth="3"/>
        <circle cx="35" cy="25" r="13" fill="none" stroke="#000" strokeWidth="3"/>
        <rect x="15" y="12" width="20" height="26" fill="white"/>
        <path d="M15 12 Q25 12 25 25 Q25 38 15 38" fill="none" stroke="#000" strokeWidth="3"/>
        <path d="M35 12 Q25 12 25 25 Q25 38 35 38" fill="none" stroke="#000" strokeWidth="3"/>
      </svg>
    ),
  },
  {
    name: 'Prada', color: '#333333', url: 'https://www.prada.com',
    specialty: 'Contemporary Luxury',
    desc: 'Prada challenges fashion conventions with its intellectual approach — balancing tradition and innovation at every turn.',
    why: 'Flagship-grade space available in luxury wing. Perfect for Prada\'s architectural retail vision.',
    founded: '1913', origin: 'Milan, Italy',
    svgLogo: <svg viewBox="0 0 88 28" style={{width:76,height:20}}><text x="2" y="21" fontFamily="Georgia,serif" fontSize="18" fontWeight="400" fill="#333" letterSpacing="3">PRADA</text></svg>,
  },
  {
    name: 'Valentino', color: '#cc0000', url: 'https://www.valentino.com',
    specialty: 'Italian Couture',
    desc: 'Bold red, romantic couture. Valentino embodies Italian passion, craftsmanship, and a fearless sense of modern style.',
    why: 'Growing US market presence. American Dream offers ideal tri-state flagship opportunity.',
    founded: '1960', origin: 'Rome, Italy',
    svgLogo: <svg viewBox="0 0 130 22" style={{width:118,height:18}}><text x="2" y="17" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="700" fill="#cc0000" letterSpacing="4">VALENTINO</text></svg>,
  },
];

export default function Retail({ onNavigateBrand }: { onNavigateBrand?: (brand: any) => void }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<typeof brandData[0] | null>(null);

  const specialties = ['All', ...Array.from(new Set(brandData.map(b => b.specialty)))];
  const filtered = activeFilter === 'All' ? brandData : brandData.filter(b => b.specialty === activeFilter);

  return (
    <section id="retail" className="min-h-screen py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-blue-600 uppercase tracking-[0.4em] text-[10px] font-black block mb-4">
            A Selection of Excellence
          </motion.span>
          <h2 className="section-title">The Avenue</h2>
          <p className="section-subtitle">
            A curated collection of the world's most prestigious fashion houses. Hover to explore. Click to visit.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {specialties.map((s) => (
            <button key={s} onClick={() => setActiveFilter(s)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                activeFilter === s ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-100 text-zinc-400 hover:border-zinc-300'
              }`}>
              {s}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((brand) => (
              <motion.div key={brand.name} layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer text-center relative"
                onMouseEnter={() => setHoveredBrand(brand.name)}
                onMouseLeave={() => setHoveredBrand(null)}
                onClick={() => setSelectedBrand(brand)}
              >
                {/* Logo card */}
                <div className="aspect-square bg-white rounded-3xl mb-4 overflow-hidden border border-zinc-100 group-hover:border-blue-300 group-hover:shadow-xl transition-all duration-500 relative flex items-center justify-center p-4">
                  <div className="flex items-center justify-center w-full h-full">
                    {brand.svgLogo}
                  </div>

                  {/* Hover overlay */}
                  <AnimatePresence>
                    {hoveredBrand === brand.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-3 text-center"
                        style={{ background: `linear-gradient(135deg, ${brand.color}ee, ${brand.color}cc)` }}
                      >
                        <p className="text-white text-[9px] font-black uppercase tracking-wider mb-2">{brand.specialty}</p>
                        <p className="text-white/80 text-[8px] leading-relaxed mb-3 line-clamp-3">{brand.why}</p>
                        <div className="flex items-center gap-1 text-white text-[9px] font-black uppercase tracking-wider">
                          <span>Explore</span>
                          <ExternalLink size={10} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <h3 className="text-[10px] uppercase font-black tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  {brand.name}
                </h3>
                <div className="text-[8px] font-bold text-zinc-300 uppercase tracking-widest mt-1">
                  {brand.specialty}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 text-center">
          <button className="px-12 py-5 border-2 border-zinc-900 rounded-full font-black text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300">
            Browse Full Luxury Portfolio
          </button>
        </div>
      </div>

      {/* Brand Detail Modal */}
      <AnimatePresence>
        {selectedBrand && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedBrand(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-10 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedBrand(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors">
                <X size={16} />
              </button>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center justify-center h-12">
                  {selectedBrand.svgLogo}
                </div>
                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Est. {selectedBrand.founded}</p>
                  <p className="text-[9px] uppercase tracking-widest text-zinc-400">{selectedBrand.origin}</p>
                </div>
              </div>

              <div className="mb-1">
                <span className="inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white mb-4"
                  style={{ background: selectedBrand.color }}>
                  {selectedBrand.specialty}
                </span>
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed mb-6">{selectedBrand.desc}</p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 mb-8">
                <p className="text-[9px] uppercase tracking-widest font-black text-blue-600 mb-1">Why American Dream?</p>
                <p className="text-zinc-700 text-sm">{selectedBrand.why}</p>
              </div>

              <div className="flex gap-3">
                <a href={selectedBrand.url} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-zinc-200 text-xs font-black uppercase tracking-widest hover:border-zinc-900 transition-colors">
                  <ExternalLink size={14} /> Visit Website
                </a>
                <button
                  onClick={() => { setSelectedBrand(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="flex-1 py-3 rounded-xl text-white text-xs font-black uppercase tracking-widest transition-all hover:opacity-90"
                  style={{ background: selectedBrand.color }}>
                  Inquire About Leasing
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
