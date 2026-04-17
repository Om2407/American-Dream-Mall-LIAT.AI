import { motion } from 'motion/react';

const PAST_EVENTS = [
  { name: 'BTS Pop-Up',        cat: 'Brand Activation', year: '2023' },
  { name: 'WWE SmackDown',     cat: 'Live Event',        year: '2023' },
  { name: 'Nickelodeon Awards',cat: 'Award Show',        year: '2024' },
  { name: 'NY Fashion Week',   cat: 'Industry Event',    year: '2024' },
  { name: 'Samsung Launch',    cat: 'Product Launch',    year: '2024' },
  { name: 'Doja Cat Concert',  cat: 'Concert',           year: '2024' },
];

export default function Events() {
  return (
    <section id="events" className="min-h-screen py-24 flex items-center bg-zinc-950 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(139,92,246,0.12) 0%, transparent 60%)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left — Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-400 uppercase tracking-[0.3em] text-xs font-black block mb-5">
              Stage Your Legend
            </span>
            <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-8">
              The<br />
              <span className="italic font-serif" style={{ color: '#a78bfa' }}>Arena.</span>
            </h2>
            <p className="text-white/50 mb-12 text-lg leading-relaxed max-w-md">
              A state-of-the-art concert and event venue designed to host the world's most iconic
              performers and grand-scale corporate activations.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/10">
              {[
                { num: '5,000+', label: 'Capacity' },
                { num: '4K',     label: 'Visual Tech' },
                { num: 'VIP',    label: 'Lounges' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-white text-3xl md:text-4xl font-black tracking-tighter mb-1">{s.num}</p>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-4 bg-purple-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-purple-500 transition-all duration-300">
                Book Venue
              </button>
              <button className="px-10 py-4 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white/5 transition-all duration-300">
                Event Packages
              </button>
            </div>
          </motion.div>

          {/* Right — Past events */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black mb-6">
              Recent Highlights
            </p>
            <div className="flex flex-col gap-3">
              {PAST_EVENTS.map((ev, i) => (
                <motion.div
                  key={ev.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="flex items-center justify-between p-5 rounded-2xl border border-white/8 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 cursor-pointer group"
                >
                  <div>
                    <p className="text-white font-black text-sm group-hover:text-purple-300 transition-colors">{ev.name}</p>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider mt-0.5">{ev.cat}</p>
                  </div>
                  <div className="text-white/20 text-xs font-bold">{ev.year}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl border border-purple-500/20" style={{ background: 'rgba(139,92,246,0.06)' }}>
              <p className="text-white font-black text-sm mb-1">300,000 sq ft Exposition Center</p>
              <p className="text-white/40 text-xs leading-relaxed">
                For conventions, product launches, and large-scale corporate events. Modular floor plans
                support 500 to 30,000 guests.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
