import { motion, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 'waterpark',
    label: 'Water Park',
    emoji: '🌊',
    embedUrl: 'https://www.youtube.com/embed/iKVRc4WvCC8?autoplay=1&mute=1&loop=1&playlist=iKVRc4WvCC8&controls=0&showinfo=0&rel=0&modestbranding=1&start=9',
    color: '#0077cc',
    title: "America's Largest Indoor Water Park",
    sub: '40+ Slides · Open 365 Days',
  },
  {
    id: 'nickelodeon',
    label: 'Nickelodeon',
    emoji: '🎡',
    embedUrl: 'https://www.youtube.com/embed/TxZdLKVjtQQ?autoplay=1&mute=1&loop=1&playlist=TxZdLKVjtQQ&controls=0&showinfo=0&rel=0&modestbranding=1',
    color: '#ff6600',
    title: 'Nickelodeon Universe Theme Park',
    sub: '35+ Rides · All Ages',
  },
  {
    id: 'bigsnow',
    label: 'Big Snow',
    emoji: '⛷️',
    embedUrl: 'https://www.youtube.com/embed/ctkvZX4drdg?autoplay=1&mute=1&loop=1&playlist=ctkvZX4drdg&controls=0&showinfo=0&rel=0&modestbranding=1',
    color: '#3b5fa0',
    title: "America's Only Indoor Snow",
    sub: '4 Trails · 16°F Year-Round',
  },
  {
    id: 'cinema',
    label: 'Cinema & More',
    emoji: '🎬',
    embedUrl: 'https://www.youtube.com/embed/278IRQ6HSi4?autoplay=1&mute=1&loop=1&playlist=278IRQ6HSi4&controls=0&showinfo=0&rel=0&modestbranding=1&start=50',
    color: '#7c3aed',
    title: 'IMAX Cinema & Entertainment',
    sub: 'Latest Releases · Premium Experience',
  },
];

// Only 1st Pexels URL works — using that only
const BG_VIDEO = 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveSlide(p => (p + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const slide = SLIDES[activeSlide];

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline preload="auto"
          onCanPlay={() => setVideoReady(true)}
          className="w-full h-full object-cover"
          style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 1.4s ease', transform: 'scale(1.06)' }}
        >
          <source src={BG_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/30 to-zinc-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/20 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(37,99,235,0.1) 0%, transparent 60%)' }} />
      </div>

      {/* Main layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 h-full pt-24">

        {/* LEFT — Content */}
        <div className="flex-1 text-left">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-blue-400 text-[11px] font-black uppercase mb-6 tracking-[0.5em]"
          >
            East Rutherford, New Jersey
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-white font-black leading-[0.82] mb-6 tracking-tighter"
            style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}
          >
            <span className="block">AMERICAN</span>
            <span className="block" style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #1d4ed8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>DREAM</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-white/60 text-base md:text-xl font-light italic mb-10 max-w-lg"
          >
            The Western Hemisphere's most spectacular entertainment &amp; retail destination
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <button
              onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/50"
            >
              Explore the Opportunity
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border-2 border-white/30 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white/10 transition-all"
            >
              Book a Venue
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {[
              { num: '40M+', label: 'Annual Visitors' },
              { num: '3M',   label: 'Sq Ft' },
              { num: '450+', label: 'Brands' },
              { num: '8mi',  label: 'From NYC' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-white font-black text-2xl md:text-3xl tracking-tighter">{s.num}</p>
                <p className="text-white/40 text-[9px] uppercase tracking-[0.25em] font-bold mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — YouTube Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden lg:flex flex-col gap-4 w-[380px] flex-shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/10' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <iframe
                  src={slide.embedUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 'none', pointerEvents: 'none' }}
                  title={slide.title}
                />
              </motion.div>
            </AnimatePresence>

            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
              <p className="text-white font-black text-sm">{slide.emoji} {slide.title}</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest">{slide.sub}</p>
            </div>

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
              <motion.div
                className="h-full"
                style={{ background: slide.color }}
                initial={{ width: '0%' }}
                animate={{ width: isHovered ? undefined : '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
                key={`${activeSlide}-${isHovered}`}
              />
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setActiveSlide(i)}>
                <motion.div
                  animate={{
                    width: activeSlide === i ? 28 : 8,
                    backgroundColor: activeSlide === i ? slide.color : 'rgba(255,255,255,0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full"
                />
              </button>
            ))}
          </div>

          {/* Tab labels */}
          <div className="grid grid-cols-4 gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`px-2 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${
                  activeSlide === i ? 'bg-white text-zinc-900' : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                {s.emoji} {s.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(96,165,250,0.8), transparent)' }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</p>
      </motion.div>
    </section>
  );
}
