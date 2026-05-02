/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488',
        secondary: '#0ea5e9',
        slateDeep: '#0f172a',
        mist: '#f7fbff'
      },
      boxShadow: {
        soft: '0 12px 35px rgba(14, 165, 233, 0.15)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top right, rgba(14,165,233,0.18), transparent 35%), radial-gradient(circle at 20% 10%, rgba(13,148,136,0.12), transparent 40%)'
      }
    }
  },
  plugins: []
};
