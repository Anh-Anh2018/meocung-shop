import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff7f5c',
          hover: '#f0643d',
          light: '#fff2ee',
          50: '#fff8f6',
          100: '#ffede7',
          500: '#ff7f5c',
          600: '#f0643d',
          700: '#db4920',
        },
        policy: {
          yellow: '#FAF7CA',
          green: '#E3FFD3',
          pink: '#FED5DC',
          purple: '#E4E7FF',
        }
      },
    },
  },
  plugins: [],
};
export default config;
