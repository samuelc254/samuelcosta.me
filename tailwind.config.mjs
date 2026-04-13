import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Semantic surfaces
        'app-bg': {
          light: '#f8fafc', // slate-50
          dark: '#020617',  // slate-950 (deep blue-black)
        },
        'app-card': {
          light: '#ffffff',
          dark: '#0f172a',  // slate-900
        },
        'app-border': {
          light: '#e2e8f0', // slate-200
          dark: '#1e293b',  // slate-800
        },
        // Refined Pastels (Adjusted for Contrast)
        'p-mint': {
          light: '#065f46', // Emerald 800 (Darker for light mode)
          dark: '#a7f3d0',  // Emerald 200
        },
        'p-blue': {
          light: '#075985', // Blue 800
          dark: '#bae6fd',  // Blue 200
        },
        'p-amber': {
          light: '#92400e', // Amber 800
          dark: '#fde68a',  // Amber 200
        },
        'p-peach': {
          light: '#9d174d', // Pink 800
          dark: '#fbcfe8',  // Pink 200
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [typography],
}
