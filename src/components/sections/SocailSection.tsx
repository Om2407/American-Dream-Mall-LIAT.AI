import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Play, Heart, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

// American Dream themed social posts — real Unsplash images matching the property
const SOCIAL_POSTS = [
  {
    id: 1, type: 'instagram',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600',
    label: 'Nickelodeon Universe',
    tag: '@americandream',
    likes: '12.4K',
    caption: 'Biggest indoor theme park in North America 🎡 #AmericanDream #NickelodeonUniverse',
  },
  {
    id: 2, type: 'instagram',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600',
    label: 'DreamWorks Water Park',
    tag: '@americandream',
    likes: '9.8K',
    caption: "America's largest indoor water park 🌊 Open 365 days a year! #WaterPark #DreamWorks",
  },
  {
    id: 3, type: 'tiktok',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600',
    label: 'Baby',
    tag: '@americandreamnj',
    likes: '34.2K',
    caption: 'Skiing in New Jersey?! Yes, really ❄️ #BigSnow #IndoorSkiing #NJ',
  },
  {
    id: 4, type: 'instagram',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600',
    label: 'Dining Experience',
    tag: '@americandream',
    likes: '7.1K',
    caption: '60+ restaurants under one roof 🍽️ Fine dining to fast casual #AmericanDream #Dining',
  },
  {
    id: 5, type: 'tiktok',
    img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=600',
    label: 'Luxury Shopping',
    tag: '@americandreamnj',
    likes: '22.7K',
    caption: 'Hermès, Gucci, LV — all in one place 🛍️ #LuxuryShopping #AmericanDream',
  },
  {
    id: 6, type: 'instagram',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=600',
    label: 'Live Events',
    tag: '@americandream',
    likes: '41.3K',
    caption: 'Another sold-out night 🎤 Book your event: americandream.com #LiveEvents #Concert',
  },
];

const FILTERS = [
  { icon: Instagram, label: 'Instagram', color: '#E1306C' },
  { icon: Play,      label: 'TikTok',    color: '#010101' },
  { icon: Share2,    label: 'All',       color: '#3b82f6' },
];

export function SocialSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const filtered = activeFilter === 'All'
    ? SOCIAL_POSTS
    : SOCIAL_POSTS.filter(p =>
        activeFilter === 'Instagram' ? p.type === 'instagram' : p.type === 'tiktok'
      );

  const toggleLike = (id: number) => {
    setLikedPosts(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="social" className="bg-[#4A84C4] py-24 px-6 overflow-hidden relative">

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      <div className="container mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/50 uppercase tracking-[0.35em] text-[10px] font-black mb-3">
              Social Feed
            </p>
            <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-none">
              Let's Get<br />Social!
            </h2>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {FILTERS.map(({ icon: Icon, label, color }) => (
              <motion.button
                key={label}
                onClick={() => setActiveFilter(label)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg ${
                  activeFilter === label
                    ? 'bg-white text-zinc-900 shadow-xl'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Icon size={16} style={{ color: activeFilter === label ? color : 'currentColor' }} />
                {label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* ── POSTS GRID ── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl cursor-pointer"
              >
                <img
                  src={post.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={post.label}
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Platform badge */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm p-2.5 rounded-2xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                  {post.type === 'instagram'
                    ? <Instagram size={18} className="text-pink-600" />
                    : <Play size={18} className="text-zinc-900" fill="currentColor" />
                  }
                </div>

                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="text-white/70 text-[10px] font-black uppercase tracking-widest bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-black text-base tracking-tight mb-2 drop-shadow">
                    {post.label}
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 line-clamp-2">
                    {post.caption}
                  </p>

                  {/* Action row */}
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-1.5 text-white text-xs font-bold"
                    >
                      <Heart
                        size={16}
                        className="transition-all duration-200"
                        fill={likedPosts.has(post.id) ? '#ef4444' : 'none'}
                        stroke={likedPosts.has(post.id) ? '#ef4444' : 'white'}
                      />
                      {post.likes}
                    </button>
                    <div className="flex items-center gap-3 text-white/60">
                      <MessageCircle size={15} />
                      <Share2 size={15} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-white/60 text-sm mb-5 font-medium">
            Follow us for daily updates, exclusive offers & behind-the-scenes content
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/americandream"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 bg-white text-zinc-900 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all"
              >
                <Instagram size={18} className="text-pink-600" />
                Follow on Instagram
              </motion.button>
            </a>
            <a
              href="https://tiktok.com/@americandreamnj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 bg-zinc-900 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all"
              >
                <Play size={18} fill="white" />
                Follow on TikTok
              </motion.button>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}