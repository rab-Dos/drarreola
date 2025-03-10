/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'workSans': ['Work Sans', 'sans-serif']
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
      height: {
        'screen-fallback': '100vh; height: 100dvh',
        'min-h-screen-fallback': 'min-height: 100vh; height: 100dvh',
      },
      fontSize: {
        'clamp-navbar': 'clamp(0.375rem, 1.5vw, .99rem)', // Entre 6px y 12px (Mobile)
        'clamp-xs': 'clamp(0.375rem, 1.5vw, 0.875rem)', // Entre 6px y 12px
        'clamp-sm': 'clamp(0.5rem, 2vw, 1rem)',        // Entre 8px y 16px
        'clamp-md': 'clamp(1rem, 3vw, 1.25rem)',       // Entre 16px y 20px
        'clamp-lg': 'clamp(1.25rem, 4vw, 1.5rem)',     // Entre 20px y 24px
      } ,
      screens: {
        'mobile-portrait': '480px',   // Móviles en vertical (≥ 480px)
        'mobile-landscape': '768px',  // Móviles en horizontal (≥ 768px)
        'tablet-portrait': '834px',   // Tablets en vertical (≥ 834px)
        'tablet-landscape': '1024px', // Tablets en horizontal (≥ 1024px)
        'desktop': '1280px',          // Escritorios estándar (≥ 1440px)
      }
    },
  },
  plugins: [],
}
