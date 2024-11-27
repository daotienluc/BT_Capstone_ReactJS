/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "2rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "9rem",
      },
    },
    extend: {
      padding: {
        30: "30px",
      },
      backgroundImage: {
        "bg-banner": "url(./src/assets/img/banner.jpg)",
      },
      boxShadow: {
        ServicesBoxShadow:
          "0 0 .880517px rgba(0, 0, 0, .029), 0 0 2.29197px rgba(0, 0, 0, .03), 0 0 5.52px rgba(0, 0, 0, .054), 0 0 11px rgba(0, 0, 0, .09);",
        VontélleBoxShadow:
          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09);",
        VontélleBoxShadowHover:
          "0 .08px 2.55728px rgba(0, 0, 0, .053), 0 1.28px 5.57858px rgba(0, 0, 0, .077), 0 3px 10px rgba(0, 0, 0, .13);",
      },
    },
  },
  plugins: [],
};
