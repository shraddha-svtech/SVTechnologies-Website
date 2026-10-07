import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f4f1ea",
        cream2: "#ece7dc",
        ink: "#131311",
        ink2: "#1d1d1a",
        primary: {
          DEFAULT: "#0943c2",
          hover: "#0c8a5f",
          soft: "#dce6f5",
        },
        muted: "#6d6a61",
        line: "rgba(19, 19, 17, 0.14)",
        "line-dark": "rgba(244, 241, 234, 0.15)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["'Space Grotesk'", "sans-serif"],
        serif: ["'Instrument Serif'", "serif"],
      },
      animation: {
        marquee: "scroll 26s linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
