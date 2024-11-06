import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cozy, light theme palette
        sage: {
          50: '#f8f9f7',
          100: '#e8efe7',
          200: '#d1e0d4',
          300: '#b3ccb9',
          400: '#8fb39b',
          500: '#659b7b',
          600: '#4d7b61',
          700: '#3e614d',
          800: '#324c3e',
          900: '#2a3e34',
        },
        blossom: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#fbd0da',
          300: '#f7a8bc',
          400: '#f27a9b',
          500: '#e63f71',
          600: '#d3295d',
          700: '#b01d4a',
          800: '#931b42',
          900: '#7d1a3d',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf7f4',
          200: '#f5ede5',
          300: '#efe2d4',
          400: '#e8d3be',
          500: '#e0c4a8',
          600: '#d4b094',
          700: '#c49c7f',
          800: '#b3886c',
          900: '#a2765c',
        },
      },
      fontFamily: {
        serif: ['var(--font-crimson-pro)', 'serif'],
        sans: ['var(--font-nunito)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(242, 122, 155, 0.2)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(242, 122, 155, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
