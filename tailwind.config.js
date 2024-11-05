module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-amber-50',
    'bg-amber-100',
    'text-amber-700',
    'ring-amber-500',
    'bg-pink-50',
    'bg-pink-100',
    'text-pink-700',
    'ring-pink-500',
    'bg-indigo-50',
    'bg-indigo-100',
    'text-indigo-700',
    'ring-indigo-500',
  ],
} 