/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['VT323', 'monospace']
      },
      colors: {
        bg: '#0D0F12',
        surface: '#171A20',
        accent: '#6A4C93',
        muted: '#8A9AA9',
        paper: '#E0D7CC',
        crtgreen: '#A3FF8F',
        alert: '#C44536'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)'
      },
      keyframes: {
        scan: { '0%,100%': { opacity: 0.12 }, '50%': { opacity: 0.22 } },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(1px, -1px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)' },
          '100%': { transform: 'translate(0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        scan: 'scan 6s linear infinite',
        glitch: 'glitch 1.2s steps(2,end) infinite',
        marquee: 'marquee 30s linear infinite'
      }
    }
  },
  plugins: []
};