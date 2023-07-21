/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'google': '0 2px 5px 1px rgba(64,60,67,.16)',
        'cellphone': "inset 0px 0px 2px 0px rgba(0,0,0,0.75)"
      }
    },
  },
  plugins: [],
}
