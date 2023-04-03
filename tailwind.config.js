/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "theme-accent":"#377DFF",
        "theme-secondary":"#4E5D78",

        "theme-foreground-light":"#FFFFFF",
        "theme-foreground-dark":"#191C21",

        "theme-background-light":"#F7F8FA",
        "theme-background-dark":"#212833",

        "theme-text-light":"#727E93",
        "theme-text-dark":"#D3D4D8",

        "theme-muted-light":"#959EAE",
        "theme-muted-dark":"#848B9A",
      },
      borderRadius:{
        "theme":"10px",
      },
      transitionDuration:{
        "theme":"0.4s",
      }
    },
  },
  plugins: [],
}

