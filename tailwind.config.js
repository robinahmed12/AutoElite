/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'carbon-black': '#1a1a1a',
        'garage-white': '#f8f9fa',
        'warm-silver': '#e0e0e0',
        
        // Accent colors
        'electric-blue': {
          100: '#e6f7ff',
          300: '#66c2ff',
          500: '#00a8ff',
          700: '#0077cc',
          900: '#004d80'
        },
        'turbo-red': {
          100: '#ffe6e6',
          300: '#ff6666',
          500: '#ff2800',
          600: '#e61e00',
          700: '#cc1900',
          900: '#800f00'
        },
        'neon-cyan': {
          100: '#e6ffff',
          300: '#66ffff',
          500: '#00ffff',
          700: '#00cccc',
          900: '#008080'
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Barlow Condensed"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'highlight': 'highlight 1.5s ease-out 1'
      },
      keyframes: {
        highlight: {
          '0%, 100%': { 'background-color': 'transparent' },
          '50%': { 'background-color': 'rgba(0, 168, 255, 0.2)' }
        }
      },
      boxShadow: {
        'glow-blue': '0 0 10px rgba(0, 168, 255, 0.5)',
        'glow-cyan': '0 0 15px rgba(0, 255, 255, 0.7)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [
    
  ],
}