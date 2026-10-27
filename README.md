# 👑 Patiala Palace — Luxury Whisky Digital Experience (v5.0 MK)

Welcome to the official developer repository and production package for **Patiala Palace**, an ultra-premium Indian luxury whisky brand website built with modern web technologies, smooth kinetic scrolling, interactive 3D WebGL bottle rendering, and editorial storytelling.

---

## 📁 Repository & Folder Structure

```
patiyala palace 5.0 mk/
├── dist/                      # Production-ready build artifacts (ready for Netlify deployment)
├── public/                    # Static assets served at the root
│   ├── _redirects             # Netlify SPA routing rules (/* -> /index.html 200)
│   ├── assets/                # High-definition images, videos, logos, and UI graphics
│   │   ├── backgrounds/       # Rich ambient textures and royal backgrounds
│   │   ├── brand/             # Royal palace motifs, seals, and brand visual assets
│   │   ├── cocktails/         # Cocktail imagery, cards, and covers
│   │   ├── editorial/         # Storytelling photography and editorial assets
│   │   ├── logo/              # Official Patiala Palace gold seal and insignia
│   │   ├── pptx_media/        # Cocktail glassware and flavor profile vector icons
│   │   ├── product/           # Bottle cutouts, labels, and packaging renders
│   │   └── video/             # Hero cinematic MP4 background videos
│   └── models/                # 3D GLTF/GLB models & PBR texture maps
│       ├── patiyala-palace-bottle.glb   # Master 3D bottle geometry
│       └── textures/          # High-resolution diffuse, normal, and roughness maps
├── src/                       # React & TypeScript source code
│   ├── components/            # Reusable UI & 3D components
│   │   ├── AgeGate.tsx        # Age verification modal (persists via localStorage)
│   │   ├── Bottle3D.tsx       # Three.js / React Three Fiber interactive bottle
│   │   ├── CustomCursor.tsx   # Bespoke luxury gold fluid cursor
│   │   ├── MenuOverlay.tsx    # Fullscreen sliding royal navigation drawer
│   │   ├── MonkeyHeader.tsx   # Premium top navigation header
│   │   └── ScrollOverlay.tsx  # Scroll-linked kinetic typography and overlays
│   ├── data/                  # Static content and geo-spatial datasets
│   │   ├── cocktailsData.ts   # Curated cocktail recipes, ingredients, and metrics
│   │   └── indiaMapData.json  # Vector coordinates for India distillery distribution
│   ├── sections/              # Page sections & views
│   │   ├── MonkeyHeroSection.tsx          # Fullscreen video hero with sound toggle
│   │   ├── MonkeyEditorialSection.tsx     # "The Past with a Pulse" heritage narrative
│   │   ├── MonkeyCraftSection.tsx         # Handcrafted batch distillation story
│   │   ├── MonkeyCocktailsCarousel.tsx    # Drag-and-scroll bespoke cocktail showcase
│   │   ├── MonkeyCultureCollab.tsx        # Royal music, arts & cultural initiatives
│   │   ├── MonkeyNewsGrid.tsx             # Curated press & editorial stories
│   │   ├── MonkeyClubSection.tsx          # VIP Connoisseur Club subscription
│   │   ├── MonkeyFooterSection.tsx        # Luxury footer with compliance links
│   │   ├── OurCocktailsPage.tsx           # Dedicated mixology exploration page
│   │   └── OurStoryPage.tsx               # Dedicated multi-chapter heritage journey
│   ├── utils/                 # Audio controls and 3D decanter geometry helpers
│   ├── App.tsx                # Master application component & route management
│   ├── main.tsx               # React DOM entrypoint
│   └── index.css              # Custom Tailwind directives & typography styling
├── scripts/                   # Procedural 3D model & asset generation utilities
├── Shoot/                     # Master raw studio shoot footage (Website Video.mp4)
├── netlify.toml               # Netlify CI/CD build & redirection configuration
├── package.json               # Node.js dependencies and run scripts
├── tailwind.config.js         # Custom luxury color palette & typography themes
├── tsconfig.json              # TypeScript compilation rules
└── vite.config.ts             # Vite bundler configuration (port 5174, auto-host)
```

---

## 🚀 Quick Start for Developers

### Prerequisites
- **Node.js**: v18.0.0 or higher (Node v20+ recommended)
- **npm**: v9.0.0 or higher

### 1. Installation
In the project directory, run:
```bash
npm install
```
*(Note: A custom post-install hook automatically ensures Rollup WASM compatibility for all architectures.)*

### 2. Local Development Server
Launch the hot-reloading development server:
```bash
npm run dev
```
The site will be live at:
```
http://localhost:5174/
```

### 3. URL Parameters & Direct Navigation
- **Bypass Age Gate**: Append `?verified=true` to any URL (e.g. `http://localhost:5174/?verified=true`)
- **Direct to Cocktails**: Append `?page=cocktails&verified=true`
- **Direct to Our Story**: Append `?page=story&verified=true`

### 4. Production Build
Compile and bundle all assets for production:
```bash
npm run build
```
The output will be placed in the `dist/` directory, optimized and minified for CDN distribution.

---

## 🌐 Deploying to Netlify

The repository is pre-configured for seamless Netlify deployment via **`netlify.toml`** and **`public/_redirects`**.

### Option A: Drag-and-Drop (Instant, No Git Required)
1. Run `npm run build` (or use the pre-built `dist/` folder already included).
2. Go to **[https://app.netlify.com/drop](https://app.netlify.com/drop)** in your browser.
3. Drag and drop the **`dist`** folder into the upload box.
4. Netlify will assign a live URL within seconds (e.g., `https://amazing-palace-xxxxxx.netlify.app`).

### Option B: Git Integration (Recommended for Continuous Deployment)
1. Initialize a git repository and push this folder to GitHub / GitLab:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Patiala Palace 5.0 MK"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Log in to [Netlify Dashboard](https://app.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Select your repository.
5. Netlify will auto-detect the settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**. Every future push will trigger an automatic preview and production deployment.

---

## 🎨 Tech Stack & Libraries
- **Bundler / Framework**: [Vite 5](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with royal color tokens (`#EC192C` imperial red, `#C6A865` regal gold, `#0A0D14` obsidian black)
- **Smooth Inertia Scroll**: [@studio-freight/lenis](https://github.com/darkroomengineering/lenis)
- **3D Graphics & Canvas**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Kinetic Animations**: [GSAP](https://gsap.com/) (ScrollTrigger) + [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📜 Compliance & Age Verification
- Includes an alcoholic beverage age verification modal adhering to international and Indian drinking age laws (21+ / 25+).
- Verification state is cached in `localStorage.getItem("patiala_age_verified")`.
