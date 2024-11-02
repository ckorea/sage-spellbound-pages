import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Add your custom colors here
        'f5f3ed': '#f5f3ed', // Light beige background
        '3e4c39': '#3e4c39', // Dark sage text color
        '8b6c61': '#8b6c61', // Earthy rose for headings
        'f4a261': '#f4a261', // Accent color for links/hover
        '9d8471': '#9d8471', // Signature color
      },
    },
  },
  plugins: [],
};

export default config;
