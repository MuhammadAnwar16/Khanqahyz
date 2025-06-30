/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Elite White-Based Theme Colors
        white: '#FFFFFF',               // Primary background
        black: '#000000',               // Primary text
        electric: '#1A73E8',            // Accent 1 (buttons, icons)
        mist: '#F5F5F5',                // Accent 2 (light sections)
        charcoal: '#4A4A4A',            // Secondary text
        silver: '#E0E0E0',              // Hover/focus

        // Optional legacy support or section-specific
        midnight: '#1A1A1A',
        gold: '#D4AF37',
        ivory: '#F5F3EF',
        sandstone: '#D8C5AD',
        olive: '#5A5A43',
      },
      fontFamily: {
        urdu: ['"Noto Nastaliq Urdu"', '"Scheherazade New"', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
