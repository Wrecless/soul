/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cream: '#E2D9CE',
        'warm-white': '#EDE8DF',
        ink: '#2C2825',
        'ink-soft': '#8B7D74',
        sage: '#7BA694',
        teal: '#5B9AA0',
        rose: '#C4836D',
        amber: '#C4936D',
        sanctuary: {
          breathing: '#8BBDB5',
          sleep: '#1E3142',
          meditation: '#D4AF7A',
          exercises: '#8AAD6E',
          sound: '#9B82C8',
          help: '#5A9E8F',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      animation: {
        breathe: 'breathe 5s ease-in-out infinite',
        'float-up': 'floatUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.18)', opacity: '0.38' },
        },
        floatUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
