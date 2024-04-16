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
      screens: {
        xxs: "380px",
        xs: "576px",
        sm: "768px",
        md: "992px",  
        lg: "1200px",
        xl: "1400px",
        xxl: "1600px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1400px",
        },
      },
      colors: {
        primary: {
          100: "#754F23",
          200: "#E20F0F",
          300: "#2F2F2F",
          400:"#757575",
          offBlack: "#2F2F2F",
          blackShade:
            "background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(102, 102, 102, 0.3) 100%)",
        },
      },
    },
  },
  plugins: [],
};
