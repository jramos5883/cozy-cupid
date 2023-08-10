/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {

    extend: {
      screens: {
        // Define your custom breakpoints here
        'xs-cellphone': '360px',
        'sm-cellphone': '420px',
        'md-tablet': '768px',
        'lg-laptop': '1200px',
        'xl-desktop': '1440px',
      },
    },
  },
  plugins: [],

}
