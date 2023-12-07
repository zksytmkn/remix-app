// tailwind.config.ts
import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

export default {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
