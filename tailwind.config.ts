import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
        gray: 'var(--gray)',
        'gray-light': 'var(--gray-light)',
        badges: 'var(--badges)',
        inputs: 'var(--inputs)',
        button: 'var(--button)',
        'button-hover': 'var(--button-hover)',
      },
    },
  },
  plugins: [],
};

export default config;
