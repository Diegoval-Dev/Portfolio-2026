import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#08080E',
        'bg-card': '#12121A',
        'bg-card2': '#1A1A28',
        'accent-indigo': '#6366F1',
        'accent-violet': '#8B5CF6',
        'accent-cyan': '#06B6D4',
        'text-primary': '#F8FAFC',
        'text-muted': '#94A3B8',
        'text-faint': '#475569',
        'border-subtle': 'rgba(255,255,255,0.06)',
        'border-accent': 'rgba(99,102,241,0.3)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6366F1, #8B5CF6)',
        'gradient-accent-h': 'linear-gradient(90deg, #6366F1, #8B5CF6)',
        'gradient-card': 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.05))',
        'gradient-border': 'linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.2), rgba(6,182,212,0.1))',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.3), transparent)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(99,102,241,0.3), 0 8px 40px rgba(99,102,241,0.15)',
        'glow': '0 0 80px rgba(99,102,241,0.4)',
        'glow-sm': '0 0 30px rgba(99,102,241,0.2)',
      },
    },
  },
  plugins: [],
}

export default config
