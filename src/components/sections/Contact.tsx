import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 flex items-center justify-center bg-zinc-950">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-400 uppercase tracking-[0.4em] text-[10px] font-black block mb-6">
            Partner With Us
          </span>
          <h2 className="text-5xl md:text-8xl mb-10 font-black tracking-tighter text-white leading-[0.85]">
            The Future<br />
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Awaits.</span>
          </h2>
          <p className="text-white/50 mb-16 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are looking to secure a flagship location, activate a sponsorship, or
            stage your next global event — American Dream provides the ultimate platform for your brand.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center mb-24">
            <a
              href="mailto:leasing@americandream.com"
              className="px-16 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/30"
            >
              Leasing Inquiry
            </a>
            <button className="px-16 py-5 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-full hover:bg-white/5 transition-all duration-300">
              Event Booking
            </button>
            <button className="px-16 py-5 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-full hover:bg-white/5 transition-all duration-300">
              Sponsorship
            </button>
          </div>

          <div className="pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Location</div>
              <div className="text-sm text-white/70 leading-relaxed">
                1 American Dream Way<br />East Rutherford, NJ 07073
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Phone</div>
              <div className="text-sm text-white/70">+1 (833) 263-7326</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Email</div>
              <div className="text-sm text-blue-400">leasing@americandream.com</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Follow</div>
              <div className="text-sm text-white/70">@americandream</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
