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
    },
    plugins: [],
  }
}
