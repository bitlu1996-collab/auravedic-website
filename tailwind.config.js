/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FBF6E9',
          100: '#F5EACB',
          200: '#EBD69B',
          300: '#E0C077',
          400: '#D4AF37',
          500: '#C29A2C',
          700: '#7A5C17',
          900: '#33260A',
        },
        secondary: {
          300: '#7FA7CC',
          400: '#5B8DB8',
          500: '#3F6E96',
          700: '#26476A',
          900: '#12233A',
        },
        accent: {
          300: '#8EE0D6',
          400: '#5FCABE',
          500: '#3DAFA3',
          700: '#23706A',
          900: '#103532',
        },
        success: {
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          700: '#047857',
          900: '#022C22',
        },
        warning: {
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          700: '#B45309',
          900: '#451A03',
        },
        error: {
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          700: '#BE123C',
          900: '#4C0519',
        },
        gold: {
          50: '#FBF6E9',
          100: '#F5EACB',
          200: '#EBD69B',
          300: '#E0C077',
          400: '#D4AF37',
          500: '#C29A2C',
          600: '#9E7A1F',
          700: '#7A5C17',
          800: '#55400F',
          900: '#33260A',
        },
        ink: {
          50: '#F4F5F8',
          100: '#E4E7EE',
          200: '#C9CFDB',
          300: '#A3ABBD',
          400: '#7A8397',
          500: '#596175',
          600: '#3A4154',
          700: '#232938',
          800: '#161A26',
          900: '#0D1119',
          950: '#07090F',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F6E7B0 0%, #D4AF37 45%, #A9822A 100%)',
        'night-glow':
          'radial-gradient(ellipse at top, rgba(212,175,55,0.14), transparent 55%), radial-gradient(ellipse at bottom right, rgba(91,141,184,0.12), transparent 50%)',
      },
      boxShadow: {
        'glow-gold': '0 0 32px -6px rgba(212,175,55,0.65)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 24px -4px rgba(212,175,55,0.5)' },
          '50%': { boxShadow: '0 0 48px 2px rgba(212,175,55,0.8)' },
        },
        'drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(20px,-16px,0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'spin-slow': 'spin-slow 48s linear infinite',
        'glow-pulse': 'glow-pulse 2.6s ease-in-out infinite',
        'drift': 'drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
