import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1144px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'pops': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#FFB606',
        'secondary': '#26235B',
        'overlay': 'rgba(30, 28, 73, 0.90)',
      },
      spacing: {
        'btn': '16px 32px',
      },
    },
  },
  plugins: [],
};
export default config;
