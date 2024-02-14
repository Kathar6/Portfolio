import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./**/*.{jsx,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          "primary.500": { value: "#C24E0A" },
          "secondary.500": { value: "#1B1F2C" },
          "secondary.400": { value: "#212530" },
          "secondary.300": { value: "#3A3E4B" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
