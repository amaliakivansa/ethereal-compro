import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A0A6B1',
        secondary: '#000',
        accent: '#FAC32E',
      },
    },
  },
  darkMode: 'class',
  plugins: [daisyui],
} satisfies Config;
