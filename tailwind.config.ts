import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        "bg_white": 'var(--bg-white)',
        "bg-light-gray": 'var(--bg-light-gray)',
        "bg-dark-blue": 'var(--bg-dark-blue)',
        "bg-light-blue": 'var(--bg-light-blue)',
        "text-light": 'var(--text_light)',
        "text-dark": 'var(--text_dark)',
        "status-delivered-bg": 'var(--status-delivered-bg)',
        "status-delivered-text": 'var(--status-delivered-text)',
        "status-process-bg": 'var(--status-process-bg)',
        "status-process-text": 'var(--status-process-text)',
        "status-canceled-bg": 'var(--status-canceled-bg)',
        "status-canceled-text": 'var(--status-canceled-text)',
        "btn-bg": 'var(--btn-bg)',
        "sort-btn": 'var(--sort-btn)',
        "show-entries-light": 'var(--show-entries-light)',
        "show-entries-dark": 'var(--show-entries-dark)'
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '12': '48px'
      }
    },
  },
  plugins: [],
};
export default config;
