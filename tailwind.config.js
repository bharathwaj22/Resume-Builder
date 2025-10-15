/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
        // nunito: ['Nunito', 'sans-serif'],           // Nunito
        // times: ['"Times New Roman"', 'serif'],      // Times New Roman
        // roboto: ['"Roboto Serif"', 'serif'],        // Roboto Serif

         nunito: ['nunito', 'sans-serif'],  
        roboto: ['roboto', 'serif'], 
      },},
  },
  plugins: [],
}
