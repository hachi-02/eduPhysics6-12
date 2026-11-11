import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Be Vietnam Pro',
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        violetBrand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgb(15 23 42 / 0.05), 0 1px 3px 0 rgb(15 23 42 / 0.04)',
        card: '0 4px 20px -4px rgb(15 23 42 / 0.07), 0 12px 32px -8px rgb(79 70 229 / 0.06)',
        lift: '0 8px 25px -5px rgb(15 23 42 / 0.10), 0 20px 45px -12px rgb(79 70 229 / 0.18)',
        glow: '0 10px 30px -8px rgb(79 70 229 / 0.50)',
        'glow-emerald': '0 10px 30px -8px rgb(16 185 129 / 0.45)',
        'glow-cyan': '0 10px 30px -8px rgb(6 182 212 / 0.45)',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(at 0% 0%, rgba(99,102,241,0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(6,182,212,0.12) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(139,92,246,0.06) 0px, transparent 55%), radial-gradient(at 90% 100%, rgba(16,185,129,0.08) 0px, transparent 50%)',
        'hero-glow':
          'radial-gradient(1200px 500px at 10% -10%, rgba(99,102,241,0.22), transparent 60%), radial-gradient(900px 420px at 100% 0%, rgba(6,182,212,0.18), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        'aurora-dark':
          'radial-gradient(at 15% 10%, rgba(99,102,241,0.35) 0px, transparent 55%), radial-gradient(at 85% 15%, rgba(6,182,212,0.30) 0px, transparent 55%), radial-gradient(at 50% 100%, rgba(16,185,129,0.22) 0px, transparent 60%), linear-gradient(135deg, #090d16 0%, #131b36 50%, #1a1238 100%)',
        'brand-gradient': 'linear-gradient(120deg, #4f46e5 0%, #7c3aed 52%, #0891b2 100%)',
        'grid-light':
          'linear-gradient(to right, rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(18px, -14px) scale(1.06)' },
          '66%': { transform: 'translate(-12px, 12px) scale(0.96)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.35s ease-out both',
        pop: 'pop 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 5s ease-in-out infinite',
        blob: 'blob 9s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      transitionTimingFunction: {
        snap: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
