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
        padding: {
          DEFAULT: "20px",
          sm: "0px",
        },
      },
      colors: {
        // Official Mazze Colors
        mazze: {
          gray: "#313131",
          orange: "#FD9109",
          dark: "#14110C",
          stroke: "#353A55",
          searchText: "#8A8A8A",
          blueBg: "#050B2D",
          // Additional Mazze-inspired colors
          darkBlue: "#050B2D",
          darkBlueLight: "#080D28",
          darkBlueLighter: "#0D122D",
          orangeLight: "#FFE5C5",
          orangeLighter: "#FFF7F0",
          grayLight: "#8A8A8A",
          grayLighter: "#E2E2E2",
          white: "#FFFFFF",
        },
        // Legacy colors for backward compatibility
        "fore-orange": "#FFF7F0",
        "light-orange": "#FFE5C5",
        orange: "#FD9109",
        "light-blue": "#0C1546",
        "light-blue-100": "#2E386D",
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
        "gray-750": "#373B50",
        "gray-800": "#313131",
        "gray-900": "#1E1E1E",
      },
      fontFamily: {
        'mazze': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mazze-gradient': 'linear-gradient(135deg, #050B2D 0%, #080D28 50%, #0D122D 100%)',
        'mazze-orange-gradient': 'linear-gradient(135deg, #FD9109 0%, #FFB366 100%)',
        'mazze-green-gradient': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'mazze-card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'mazze': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'mazze-card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'mazze-glow': '0 0 20px rgba(253, 145, 9, 0.3)',
      },
      animation: {
        'mazze-pulse': 'mazze-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'mazze-fade-in': 'mazze-fade-in 0.5s ease-out',
        'mazze-slide-up': 'mazze-slide-up 0.3s ease-out',
      },
      keyframes: {
        'mazze-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'mazze-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'mazze-slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
