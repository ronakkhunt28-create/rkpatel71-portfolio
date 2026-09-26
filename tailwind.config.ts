import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090a0f",
        surface: {
          50: "#1e2230",
          100: "#171a24",
          200: "#12141c",
          300: "#0d0f15",
          border: "#1f2433",
          borderHover: "#2d354a",
        },
        accent: {
          DEFAULT: "#0ea5e9", // electric cyan/ice blue
          hover: "#38bdf8",
          muted: "rgba(14, 165, 233, 0.15)",
          glow: "rgba(14, 165, 233, 0.35)",
        },
        subtleAccent: {
          DEFAULT: "#6366f1", // subtle indigo/violet for secondary node links
          muted: "rgba(99, 102, 241, 0.15)",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          tertiary: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px -4px rgba(14, 165, 233, 0.25)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
