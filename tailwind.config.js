
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // if you're using the new /app directory
    ],
    theme: {
      extend: {
        fontFamily:{
            poppins: ['Poppins','sans-serif']
        }
      },
    },
    plugins: [],
  }
  