import type { Config } from "tailwindcss";

/* Tokens mirror ../DESIGN.md ("The Casablanca Console"). The palette is
   achromatic on purpose: emphasis comes from brightness and opacity steps,
   never from a hue. */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0d0e",
        graphite: "#1a1b1c",
        hairline: "#262626",
        paper: "#fafafa",
        ash: "#d4d4d4",
        bone: "#e5e5e5",
        fog: "#8a8a8a",
        heat: {
          0: "#232426",
          1: "#3a3b3d",
          2: "#5a5b5d",
          3: "#888a8c",
          4: "#c8c9ca",
        },
      },
      fontFamily: {
        display: ["var(--font-doto)", "ui-monospace", "monospace"],
        mono: [
          "var(--font-geist-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      borderRadius: {
        hair: "1px",
        xs: "2px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.23,1,.32,1)",
      },
      maxWidth: {
        page: "80rem",
      },
    },
  },
  plugins: [],
};
export default config;
