import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        // Palette extracted from the client logo. These are the ONLY colours
        // permitted in the UI. Leaf-green from the logo is intentionally absent.
        espresso: "hsl(var(--espresso) / <alpha-value>)",
        caramel: "hsl(var(--caramel) / <alpha-value>)",
        hairline: "hsl(var(--hairline) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        body: "hsl(var(--body) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
      },
      maxWidth: {
        content: "1240px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.15em",
        strip: "0.08em",
      },
      boxShadow: {
        // The single permitted shadow. Nothing heavier is allowed.
        subtle: "0 1px 2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
