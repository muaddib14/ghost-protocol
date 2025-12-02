import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ghost Protocol Brand Colors
        ghost: {
          bg: {
            dark: '#050015',
            light: '#120026',
          },
          neon: {
            magenta: '#FF2EC9',
            cyan: '#3DFFFF',
            green: '#20FF9F',
          },
          text: {
            primary: '#F5F5FF',
            secondary: '#A6A6D9',
          },
          border: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'ghost-gradient': 'linear-gradient(135deg, #050015 0%, #120026 100%)',
        'neon-gradient': 'linear-gradient(135deg, #FF2EC9 0%, #3DFFFF 100%)',
        'glow-radial': 'radial-gradient(ellipse at center, rgba(255,46,201,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon-magenta': '0 0 20px rgba(255,46,201,0.5), 0 0 40px rgba(255,46,201,0.3)',
        'neon-cyan': '0 0 20px rgba(61,255,255,0.5), 0 0 40px rgba(61,255,255,0.3)',
        'neon-glow': '0 0 30px rgba(255,46,201,0.4), 0 0 60px rgba(61,255,255,0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
