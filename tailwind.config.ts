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
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "0px",
        },
      },
      colors: {
        "fore-orange": "#FFF7F0",
        "light-orange": "#FFE5C5",
        orange: "#FD9109",
        "light-blue": "#0C1546",
        blue: "#126FFF",
        "light-green": "#BAEDBD",
        green: "#409B30",
        red: "#D72E2E",
        indigo: "#95A4FC",
        "fore-indigo": "#F3F0FF",
        "fore-pink": "#FFF2F5",
        slate: "#EFF1F9",
        "dark-blue": "#050B2D",
        "dark-blue-100": "#080D28",
        "dark-blue-200": "#0D122D",
        "gray-100": "#FFFFFF",
        "gray-200": "#F4F4F4",
        "gray-300": "#E2E2E2",
        "gray-350": "#D1D3D8",
        "gray-400": "#C0C0C0",
        "gray-500": "#8A8A8A",
        "gray-600": "#6A6C73",
        "gray-700": "#393939",
        "gray-800": "#313131",
        "gray-900": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
export default config;
