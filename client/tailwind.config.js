/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxl: { max: '1920px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      keyframes: {
        slideIn: {
          '0%': { width: '0%', height: '100vh', padding: 0 },
          '100%': { width: '75%', height: '100vh', padding: '24px' },
        },
        slideOut: {
          '0%': { width: '75%', height: '100vh' },
          '100%': { width: '0%', height: '100vh' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out forwards',
        slideOut: 'slideOut 0.5s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('flowbite/plugin')],
};
