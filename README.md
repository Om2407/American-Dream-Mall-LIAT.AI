# 🏬 American Dream — Interactive Sales Deck

A fully interactive, browser-based sales tool for **American Dream Mall** (East Rutherford, NJ) — the Western Hemisphere's largest entertainment and retail destination. Built as a cinematic pitch deck for prospective retail tenants, sponsors, and event partners.

---

## 🚀 Live Demo

Live Url- https://american-dream-mall-liat-ai.vercel.app/

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| AI | Google Gemini 2.0 Flash (`@google/genai`) |
| Media | Pexels API (dining images), Clearbit (brand logos) |
| Deployment | Vercel / Netlify / GitHub Pages |

---

## 📁 Project Structure

```
src/
├── App.tsx                        # Root — section composition + state
├── index.css                      # Global styles + Tailwind theme
├── main.tsx                       # Entry point
│
├── components/
│   ├── Header.tsx                 # Sticky nav with smooth scroll
│   ├── BrandLogoStrip.tsx         # Infinite marquee — 450+ brands
│   ├── BrandVisual3D.tsx          # CSS brand orb (hover effect)
│   ├── BrandView.tsx              # Full-screen brand detail overlay
│   ├── ThreeScene.tsx             # Interactive venue map (CSS)
│   ├── MascotScene.tsx            # Animated mascots (CSS)
│   ├── WaterParkSimulation.tsx    # Interactive water park modal
│   ├── AIConcierge.tsx            # Gemini AI chat widget
│   ├── ScrollGuide.tsx            # Right-side section dot nav
│   │
│   └── sections/
│       ├── Hero.tsx               # Cinematic hero + YouTube carousel
│       ├── Overview.tsx           # Stats + Gemini AI insights
│       ├── ParksSection.tsx       # Nickelodeon / DreamWorks / Big Snow
│       ├── WaterParkSection.tsx   # Water park deep dive + video BG
│       ├── MallTourSection.tsx    # Mall tour video section
│       ├── Retail.tsx             # Luxury brand grid (The Avenue)
│       ├── Entertainment.tsx      # Tech corridor brands
│       ├── Events.tsx             # The Arena + past events
│       ├── DiningSection.tsx      # 100+ restaurants (Pexels images)
│       ├── MarvelSection.tsx      # Marvel Studios flagship
│       ├── SocailSection.tsx      # Social media wall
│       ├── ParkingSection.tsx     # Location & access (CSS map)
│       └── Contact.tsx            # CTA — leasing / events / sponsorship
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+
- npm 9+

### Install

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/american-dream-sales-deck.git
cd american-dream-sales-deck

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your Gemini API key (optional — fallbacks work without it)

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

Create a `.env` file in root:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> **Note:** Gemini API key is optional. The app uses pre-written fallback answers for all AI prompts when no key is provided.

Get a free Gemini API key at: https://aistudio.google.com/app/apikey

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

### Deploy to Vercel (recommended)

```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Drag & drop the dist/ folder to netlify.com/drop
```

### Deploy to GitHub Pages

```bash
# vite.config.ts mein base set karo:
# base: '/your-repo-name/'

npm run build
# dist/ folder ko gh-pages branch pe push karo
```

---

## 🧠 AI Integration

The project uses **Google Gemini 2.0 Flash** in two places:

1. **Overview Section** — 4 preset business insight questions answered by AI with mall-specific context
2. **AI Concierge** — Floating chat widget with FAQ about leasing, events, sponsorship, attractions

Both features work fully offline via hardcoded fallback responses if no API key is set.

---

## 🎨 Design Decisions

- **Dark sections** (`bg-zinc-950`) for cinematic feel; **white sections** for retail/luxury
- **Framer Motion** for all animations — scroll-triggered, entrance animations, hover effects
- **YouTube iframes** embedded muted+autoplay for video-first storytelling (Hero, Parks, Water Park)
- **Pexels API** for real food photography in Dining section
- **Clearbit Logo API** for brand logos in the marquee strip (no API key needed)
- **CSS-only interactive map** in Location section — no heavy mapping library
- **Right-side dot navigation** for non-linear section jumping

---

## 📊 Performance Notes

- Three.js / `@react-three/fiber` removed — saves ~10MB bundle
- All imports unified to `framer-motion` (no `motion/react` split)
- Videos use `preload="auto"` with opacity fade-in on load
- Images lazy-loaded via Pexels API on mount
- Lighthouse target: 85+ (limited by YouTube iframes)

---

## 🐛 Known Issues

- YouTube autoplay may be blocked in some browsers (shows poster frame fallback)
- Pexels API key is hardcoded in `DiningSection.tsx` — move to `.env` for production
- `SocailSection.tsx` has a typo in filename (intentionally kept to avoid import breakage)

---

## 📬 Submission

Built for the **liat.ai** screening assignment.

- **Live URL:** https://american-dream-mall-liat-ai.vercel.app/
- **GitHub:** https://github.com/Om2407/American-Dream-Mall-LIAT.AI
- **Email:** medi@liat.ai

---

## 📄 License

Private — built for interview/assessment purposes only.

 Made with ❤️ by **Om Gupta** for **LIAT.AI**
