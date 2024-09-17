/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shade': '#f7f9fc', 
        'dblue': '#1e40af',
        'lblue': "#1d4ed8",
        'lgray': '#4b5563',
        'dgray': '#374151',
        'tea': "#318ba4",
        'lgreen': "#4ade80",
        'dgreen': "#15803d",
        'dindigo': "#3730a3",
         "blue400":"#60a5fa",
        'dpurple':"#5b21b6",
        "crimson":"#dc143c",
        "Fuchsia" :"#f5d0fe",
        "teal":"#2dd4bf",
        "sky":"#bae6fd",
        "red":"#dc2626",
        "orange500": "#f97316",
        "red600":"#dc2626"
        
      },
    },
  },
  plugins: [],
}
