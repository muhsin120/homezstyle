import type { Config } from "tailwindcss";
import fluid, { extract,screens, fontSize } from "fluid-tailwind";
const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }:any) => ({
      defaultScreens: ["20rem", theme("screens.xl")],
    }),
    screens,
    fontSize,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        darkGreen: "#1C3732",
        darkYellow: "#f8b904",
        darkOrange: "#b91c1c",
        darkBlue: "#0e162f",
        navy: "#045b62",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navy: "#045b62",
        darkBlue: "#0e162f",
        darkYellow: "#f8b904",
        darkGreen: "#1C3732",
        darkOrange: "#b91c1c",
      },
      fontFamily: {
        nunito: "var(--nunito)",
        poppins: "var(--poppins)",
      },
      fontSize: {
        "display-large": ["3.5625rem", "1.12"],
        "display-medium": ["2.7rem", "1.15"],
        "display-hero": ["2.5rem", "1.15"],
        "display-small": ["2.25rem", "1.22"],
        "headline-large": ["2rem", "1.25"],
        "case-study-title": ["2rem", "1.125"],
        "headline-medium": ["1.75rem", "1.28"],
        "headline-small": ["1.5rem", "1.33"],
        "title-large": ["1.375rem", "1.75"],
        "title-medium": ["1rem", "1.50"],
        "title-small": ["0.875rem", "1.42"],
        "label-large": ["0.875rem", "1.42"],
        "label-medium": ["0.75rem", "1.33"],
        "label-small": ["0.6875rem", "1.45"],
        "body-large": ["1rem", "1.50"],
        "body-medium": ["0.875rem", "1.42"],
        "body-small": ["0.75rem", "1.33"],
        "heading-footer": ["2rem", "1.2"],
        "label-footer": ["1.125rem", "1.2"],
        "desktop-body": ["1.125rem", "1.35"],
        "small-screen": ["1.125rem", "1.66"],
        "small-car-text": ["1.125rem", "1.38"],
        "small-footer-headings": ["1.375rem", "1.65"],
        "small-case-study-desc": ["0.75rem", "1.57"],
        "small-case-study-title": ["1.375rem", "2.36"],
        "ready-button": ["0.60325rem", "3.0"],
        "small-product-above": ["1.25rem", "1.0"],
        "small-productpage-title": ["2rem", "2.0"],
        "small-tab-text": ["0.75rem", "1.15"],
        "small-productDetails-title": ["1.25rem", "1.15"],
        "medium-product-desc": ["1.5rem", "1.2"],
        "small-footer-menu": ["1.2rem", "1.75"],
      },
    },
  },
  plugins: [fluid],
};
export default config;
