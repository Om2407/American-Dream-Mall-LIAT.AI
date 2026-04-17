import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { img } from 'motion/react-client';

function MarvelLogo() {
  return (
    <motion.div
      className="relative inline-block overflow-hidden rounded-sm"
      whileHover={{ scale: 1.05 }}
    >
      <svg viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg" className="w-48 md:w-64 h-auto shadow-2xl">
        <defs>
          <linearGradient id="glint" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect width="300" height="80" fill="#ED1D24"/>
        <text x="150" y="62" textAnchor="middle" fontFamily="Arial Black, sans-serif"
          fontSize="72" fontWeight="900" fill="white" letterSpacing="-2" style={{ fontStyle: 'italic' }}>
          MARVEL
        </text>
        <motion.rect
          width="100" height="80" fill="url(#glint)"
          animate={{ x: [-100, 400] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
        />
      </svg>
    </motion.div>
  );
}

const HERO_CARDS = [
  {
    name: 'Spider-Man',
    color: '#CC0000',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/portrait_uncanny.jpg',
    tagline: 'With great power...'
  },
  {
    name: 'Iron Man',
    color: '#D4AF37',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/portrait_uncanny.jpg',
    tagline: 'I am Iron Man.'
  },
  {
    name: 'Black Panther',
    color: '#4B0082',
    // img: 'https://i.annihil.us/u/prod/marvel/i/mg/1/c0/537ba2bfd6cf5/portrait_uncanny.jpg',
    img: 'https://www.pixelstalk.net/wp-content/uploads/images6/Black-Panther-HD-Wallpaper-Free-download.jpg',
    tagline: 'Wakanda Forever.'
  },
  {
    name: 'Thor',
    color: '#007FFF',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/portrait_uncanny.jpg',
    tagline: 'The God of Thunder.'
  },
  {
    name: 'Hulk',
    color: '#2E7D32',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/portrait_uncanny.jpg',
    tagline: 'Hulk Smash!'
  },
  {
    name: 'Captain America',
    color: '#1565C0',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/portrait_uncanny.jpg',
    tagline: 'I can do this all day.'
  },
];

const HeroCard = ({ hero, index }: { hero: typeof HERO_CARDS[0]; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 300, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - (rect.left + rect.width / 2));
    y.set(event.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="relative group h-[400px] w-full cursor-pointer"
    >
      <div className="absolute inset-0 bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-red-500/50">
        {/* Real Marvel API image */}
        <img
          src={hero.img}
          alt={hero.name}
          className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
        />

        {/* Halftone comic overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `radial-gradient(${hero.color} 1px, transparent 0)`,
          backgroundSize: '10px 10px'
        }} />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

        {/* Text */}
        <div className="absolute bottom-0 left-0 p-6 w-full group-hover:-translate-y-2 transition-transform duration-300">
          <p className="text-red-500 font-bold text-xs tracking-widest uppercase mb-1">{hero.tagline}</p>
          <h3 className="text-white text-3xl font-black uppercase tracking-tighter">{hero.name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function MarvelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#050505] py-24 selection:bg-red-600 selection:text-white">

      {/* Grid background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">

        {/* Header */}
        <motion.div style={{ opacity: titleOpacity }} className="text-center mb-24">
          <MarvelLogo />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-red-600 mx-auto my-8"
          />
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-none">
            UNLEASH THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 italic">
              MULTIVERSE
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
            Step into the largest Marvel retail hub in existence. A cinematic experience where
            the heroes of Earth-616 and beyond come to life.
          </p>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {HERO_CARDS.map((hero, i) => (
            <HeroCard key={hero.name} hero={hero} index={i} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-32">
          {[
            { n: '12K+', l: 'Rare Collectibles' },
            { n: '50+', l: 'Exclusive Drops' },
            { n: 'LIVE', l: 'Hero Meetups' },
            { n: 'VR', l: 'Stark Tech Lab' },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
              className="bg-zinc-900 border-2 border-zinc-800 p-8 rounded-tr-3xl rounded-bl-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/10 rounded-full -mr-8 -mt-8 group-hover:scale-[5] transition-transform duration-700" />
              <p className="text-4xl font-black text-white mb-2">{s.n}</p>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">{s.l}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="flex flex-col items-center justify-center space-y-8">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(237,29,36,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-16 py-6 bg-red-600 text-white text-sm font-black uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all"
          >
            <span className="relative z-10">Get Your Access Pass</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="absolute inset-0 flex items-center justify-center text-red-600 font-black opacity-0 group-hover:opacity-100 z-20 transition-opacity delay-100">
              AVENGERS ASSEMBLE!
            </span>
          </motion.button>
          <p className="text-zinc-600 text-xs font-bold tracking-widest uppercase">
            Official Stark Industries Partnership
          </p>
        </motion.div>

      </div>

      {/* Comic panel skews */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-600/5 skew-x-12 -translate-x-1/2 pointer-events-none" />
    </section>
  );
}
// import { motion, useScroll, useTransform } from 'motion/react';
// import { useRef } from 'react';

// function MarvelLogo() {
//   return (
//     <svg viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg" style={{ width: 260, height: 70 }}>
//       <rect width="300" height="80" rx="6" fill="#ED1D24"/>
//       <text x="150" y="62" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif"
//         fontSize="60" fontWeight="900" fill="white" letterSpacing="4" style={{ fontStyle: 'italic' }}>
//         MARVEL
//       </text>
//     </svg>
//   );
// }


// const HERO_CARDS = [
//   { name: 'Spider-Man',      color: '#CC0000', accent: '#1C1C3C', emoji: '🕷️' },
//   { name: 'Iron Man',        color: '#C0392B', accent: '#F39C12', emoji: '🦾' },
//   { name: 'Thor',            color: '#1A237E', accent: '#FFD700', emoji: '⚡' },
//   { name: 'Hulk',            color: '#2E7D32', accent: '#81C784', emoji: '💪' },
//   { name: 'Black Widow',     color: '#212121', accent: '#B71C1C', emoji: '⚫' },
//   { name: 'Captain America', color: '#1565C0', accent: '#E53935', emoji: '🛡️' },
// ];


// export default function MarvelSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
//   const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

//   return (
//     <section ref={containerRef} id="marvel" className="relative min-h-screen overflow-hidden bg-zinc-950 py-24">

//       {/* Animated background */}
//       <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
//         <div className="absolute inset-0" style={{
//           background: 'radial-gradient(ellipse at 20% 50%, rgba(237,29,36,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(28,28,60,0.4) 0%, transparent 60%), #09090b',
//         }} />
//         {Array.from({ length: 8 }).map((_, i) => (
//           <motion.div key={i} className="absolute w-px opacity-5"
//             style={{ left: `${(i + 1) * 12}%`, top: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent, #ED1D24, transparent)' }}
//             animate={{ opacity: [0.03, 0.08, 0.03] }}
//             transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
//           />
//         ))}
//       </motion.div>

//       {/* Chibi Avengers — peeking from right edge */}
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
//         <motion.div
//           initial={{ x: 120 }}
//           whileInView={{ x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="flex flex-col gap-1"
//         >
//           {['🕷️', '🟢', '🔴', '🔵', '⚫', '🛡️'].map((e, i) => (
//             <motion.div
//               key={i}
//               className="text-4xl"
//               animate={{ x: [0, -8, 0] }}
//               transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
//             >
//               {e}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Doctor Doom peeking from left */}
//       <div className="absolute left-0 bottom-32 z-20 hidden xl:block">
//         <motion.div
//           initial={{ x: -80 }}
//           whileInView={{ x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           animate={{ x: [0, 10, 0] }}
//         >
//           <motion.div
//             className="text-6xl"
//             transition={{ duration: 3, repeat: Infinity }}
//           >
//             🦹
//           </motion.div>
//         </motion.div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6">

//         {/* Header */}
//         <motion.div className="text-center mb-20"
//           initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }} transition={{ duration: 0.8 }}
//         >
//           <div className="inline-block mb-6"><MarvelLogo /></div>
//           <p className="text-white/50 uppercase tracking-[0.35em] text-[11px] font-black mb-4">
//             Exclusive Retail Destination
//           </p>
//           <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6">
//             Earth's Mightiest<br />
//             <span style={{ background: 'linear-gradient(135deg, #ED1D24 0%, #FF6B35 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
//               Shopping Experience
//             </span>
//           </h2>
//           <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
//             The official Marvel Studios retail flagship inside American Dream — merchandise, collectibles,
//             immersive experiences, and hero meet-and-greets, all under one roof.
//           </p>
//         </motion.div>

//         {/* Hero Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-20 max-w-5xl mx-auto">
//           {HERO_CARDS.map((hero, i) => (
//             <motion.div key={hero.name}
//               initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="relative rounded-2xl overflow-hidden cursor-pointer group"
//               style={{ background: `linear-gradient(135deg, ${hero.color}22, ${hero.color}44)` }}
//             >
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 style={{ background: `linear-gradient(135deg, ${hero.color}44, ${hero.color}88)` }} />
//               <div className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"
//                 style={{ boxShadow: `inset 0 0 0 1px ${hero.color}` }} />
//               <div className="relative z-10 p-6 md:p-8">
//                 <motion.div className="text-5xl md:text-6xl mb-4 block"
//                   animate={{ rotate: [0, 5, -5, 0] }}
//                   transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}>
//                   {hero.emoji}
//                 </motion.div>
//                 <h3 className="text-white font-black text-lg md:text-xl tracking-tight mb-1">{hero.name}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats */}
//         <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
//           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }} transition={{ duration: 0.7 }}
//         >
//           {[
//             { num: '12,000+', label: 'Collectibles' },
//             { num: '30+',     label: 'Characters' },
//             { num: '5,000',   label: 'Sq Ft Store' },
//             { num: 'Exclusive', label: 'Merch Drops' },
//           ].map((s) => (
//             <div key={s.label} className="text-center p-5 rounded-2xl border border-white/10"
//               style={{ background: 'rgba(237,29,36,0.05)' }}>
//               <p className="text-white font-black text-2xl md:text-3xl tracking-tighter mb-1">{s.num}</p>
//               <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">{s.label}</p>
//             </div>
//           ))}
//         </motion.div>

//         {/* CTA */}
//         <motion.div className="text-center"
//           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
//             <button className="px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs text-white transition-all duration-300 hover:scale-105 shadow-2xl"
//               style={{ background: 'linear-gradient(135deg, #ED1D24, #FF6B35)', boxShadow: '0 20px 40px rgba(237,29,36,0.3)' }}>
//               Visit Marvel Store
//             </button>
//             <button className="px-12 py-5 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white/5 transition-all duration-300">
//               Meet the Heroes
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }