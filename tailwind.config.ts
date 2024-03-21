import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "light-orange": "#FFE5C5",
        orange: "#FD9109",
        "light-blue": "#0C1546",
        blue: "#126FFF",
        "light-green": "#BAEDBD",
        green: "#409B30",
        red: "#D72E2E",
        indigo: "#95A4FC",
        slate: "#EFF1F9",
        "dark-blue": "#050B2D",
        "gray-100": "#FFFFFF",
        "gray-200": "#F4F4F4",
        "gray-300": "#E2E2E2",
        "gray-400": "#C0C0C0",
        "gray-500": "#8A8A8A",
        "gray-600": "#393939",
        "gray-700": "#313131",
      },
    },
  },
  plugins: [],
};
export default config;
