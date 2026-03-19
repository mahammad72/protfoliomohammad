// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         background: '#050505',
//         surface: '#0A0A0A',
//         'surface-highlight': '#171717',
//         border: '#262626',
//         primary: '#6366F1',
//         secondary: '#A855F7',
//         'accent-start': '#7C3AED',
//         'accent-end': '#3B82F6',
//         'text-primary': '#EDEDED',
//         'text-secondary': '#A1A1AA',
//         'text-muted': '#52525B',
//       },
//       fontFamily: {
//         heading: ['"Plus Jakarta Sans"', 'sans-serif'],
//         body: ['"Inter"', 'sans-serif'],
//         code: ['"JetBrains Mono"', 'monospace'],
//         accent: ['"Outfit"', 'sans-serif'],
//       },
//       animation: {
//         'gradient-x': 'gradient-x 3s ease infinite',
//         'float': 'float 6s ease-in-out infinite',
//         'glow': 'glow 2s ease-in-out infinite alternate',
//         'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//       keyframes: {
//         'gradient-x': {
//           '0%, 100%': { 'background-position': '0% 50%' },
//           '50%': { 'background-position': '100% 50%' },
//         },
//         'float': {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//         'glow': {
//           '0%': { 'box-shadow': '0 0 20px rgba(124, 58, 237, 0.3)' },
//           '100%': { 'box-shadow': '0 0 40px rgba(124, 58, 237, 0.6)' },
//         },
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0A0A0A',
        'surface-highlight': '#171717',
        border: '#262626',
        primary: '#6366F1',
        secondary: '#A855F7',
        'accent-start': '#7C3AED',
        'accent-end': '#3B82F6',
        'text-primary': '#EDEDED',
        'text-secondary': '#A1A1AA',
        'text-muted': '#52525B',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};