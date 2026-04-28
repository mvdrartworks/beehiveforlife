import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        cream: "#FFFDF7",
        charcoal: {
          DEFAULT: "#3A3A3A",
          muted: "#6B6560",
        },
        honey: "#D4A853",
        terracotta: "#A0522D",
        deep: "#2C1810",
        card: "#FFFFFF",
        hover: "#F5EDE3",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Garamond", "serif"],
        sans: ["var(--font-nunito)", "Nunito", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wordmark: "0.18em",
      },
      transitionTimingFunction: {
        hive: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        warm: "0 10px 40px -12px rgba(160, 82, 45, 0.18)",
        card: "0 4px 20px -8px rgba(58, 58, 58, 0.12)",
      },
      backgroundImage: {
        "honey-gradient": "linear-gradient(135deg, rgba(212, 168, 83, 0.18) 0%, rgba(160, 82, 45, 0.10) 100%)",
        "warm-radial": "radial-gradient(circle at top, rgba(212, 168, 83, 0.22) 0%, rgba(250, 247, 242, 0) 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
