// tailwind.config.js
import { tailwindConfig } from "@storefront-ui/vue/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: [
    "./index.html",
    "./**/*.vue",
    "./node_modules/@storefront-ui/vue/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:"#754F23",
          200:"#E20F0F"
        }
      }
    
    },
  },
  plugins: [],
};
