import type { Config } from "tailwindcss";
import { colors } from "./styles/colors";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};

export default config;
