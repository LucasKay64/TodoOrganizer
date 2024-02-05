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
  plugins: [daisyui],

  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#068fff",
  //         info: "#67e8f9",
  //         success: "#4bb543",
  //         warning: "#facc15",
  //         error: "#e11d48",
  //       },
  //     },
  //   ],
  // },
};
