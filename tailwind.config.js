/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        'screen-fallback': '100vh; height: 100dvh',
      },
    },
    plugins: [],
  }
}
