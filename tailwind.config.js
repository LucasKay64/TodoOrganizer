import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": "url('/src/assets/images/heroSectionBackground.svg')",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#068FFF",
          neutral: "#b0b0b0",
          "base-100": "#ffffff",
          error: "#e11d48",
        },
      },
    ],
  },

  plugins: [daisyui],
};
