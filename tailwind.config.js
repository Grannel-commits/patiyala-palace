/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Don Julio Signature Theme Palette
        'beige': '#FAF8F5',           // Don Julio Warm Luxury Beige
        'beige-card': '#E8E4DC',      // Don Julio Card Placeholder
        'darkRedText': '#1B1412',     // Don Julio Dark Text
        'khaki': '#1C1917',           // Don Julio Dark Drawer
        
        // Monkey Shoulder Official Signature Palette
        'monkey-orange': '#E6501E',   // Cinnabar Signature Brand Orange
        'monkey-bright': '#F58220',   // Vibrant High-Energy Orange
        'monkey-amber': '#D47A37',    // Malt Amber
        'monkey-black': '#111111',    // Deep Charcoal Foundation
        'monkey-charcoal': '#1A1A1A', // Dark Charcoal Card Surface
        'monkey-cream': '#F1E6DA',    // Merino Soft Cream
        'monkey-rosewood': '#62000C', // Deep Rosewood Contrast
        
        // Luxury Spirits Refined Palette
        'royal-blue': '#04153B',      // Deep Royal Blue
        'dark-navy': '#020B1F',       // Dark Navy
        'palace-blue': '#04153B',
        'palace-dark': '#020B1F',
        'palace-gold': '#D4AF37',
        'palace-gold-light': '#F3E5AB',
        'palace-gold-dark': '#996515',
        'palace-amber': '#C47D2B',
        'near-black': '#000000',      // Solid Foundation Black
        'deep-obsidian': '#000000',   // Foundation Black
        'antique-gold': '#C8A85B',    // Antique Gold
        'champagne-gold': '#D9C27A',  // Champagne Gold
        'warm-ivory': '#FAF8F5',      // Warm Ivory
        'whisky-amber': '#A96820',    // Whisky Amber
        'amber-glow': '#C47D2B',      // Warm Amber Glow
        
        // Clase Azul Signature Luxury Palette
        'brand-cobalt': '#00248B',    // Royal Cobalt Blue
        'brand-cosmos': '#07173E',    // Deep Cosmos Navy
        'brand-clay': '#FAF8F5',      // Brand Clay
        'brand-rain': '#0F51CF',      // Vivid Cobalt Rain
        'brand-sand': '#FAF8F5',      // Warm Sand White
        'brand-slate': '#45516E',     // Editorial Secondary Slate
        'brand-gold': '#C8A85B',      // Royal Antique Gold
        'brand-navy': '#07173E',
        'brand-ivory': '#FFFFFF',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        donjulio: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sofia: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'widest': '0.25em',
        'wider': '0.15em',
      },
      boxShadow: {
        'gold-subtle': '0 0 25px rgba(200, 168, 91, 0.18)',
        'gold-glow': '0 0 50px rgba(200, 168, 91, 0.28)',
        'amber-glow': '0 0 60px rgba(169, 104, 32, 0.25)',
      },
    },
  },
  plugins: [],
}

