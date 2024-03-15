import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        'spin-slow': 'spin 20s linear infinite'
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },

      scale: {
        '175': '1.75',
      },
      

      backgroundImage: {
        'gradient': 'linear-gradient(90deg, rgba(155, 148, 224, 1), rgba(109, 206, 87, 1))',
        'gradientviolet': 'linear-gradient(180deg, rgba(232, 232, 248, 1), rgba(84, 81, 122, 1))',
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },

      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'vidaloka': ["Vidaloka", "serif"],

      },

      fontWeight: {
        normal: "400",
        bold: "700",
      },

      colors: {
        textBlancDark: {
          100: "rgba(232, 232, 248, 0.1)",
          200: "rgba(232, 232, 248, 0.2)",
          300: "rgba(232, 232, 248, 0.3)",
          400: "rgba(232, 232, 248, 0.4)",
          500: "rgba(232, 232, 248, 0.5)",
          600: "rgba(232, 232, 248, 0.6)",
          700: "rgba(232, 232, 248, 0.7)",
          800: "rgba(232, 232, 248, 0.8)",
          900: "rgba(232, 232, 248, 0.9)",
          1000: "rgba(232, 232, 248, 1)",
        },
        backgroundDark: {
          100: "#1D1B24",
          200: "rgba(4, 3, 12, 0.2)",
          300: "rgba(4, 3, 12, 0.3)",
          400: "rgba(4, 3, 12, 0.4)",
          500: "rgba(4, 3, 12, 0.5)",
          600: "rgba(4, 3, 12, 0.6)",
          700: "rgba(4, 3, 12, 0.7)",
          800: "rgba(4, 3, 12, 0.8)",
          900: "rgba(4, 3, 12, 0.9)",
          1000: "rgba(4, 3, 12, 1)",
        },
        primaryDark: {
          100: "rgba(155, 148, 224, 0.1)",
          200: "rgba(155, 148, 224, 0.2)",
          300: "rgba(155, 148, 224, 0.3)",
          400: "rgba(155, 148, 224, 0.4)",
          500: "rgba(155, 148, 224, 0.5)",
          600: "rgba(155, 148, 224, 0.6)",
          700: "rgba(155, 148, 224, 0.7)",
          800: "rgba(155, 148, 224, 0.8)",
          900: "rgba(155, 148, 224, 0.9)",
          1000: "rgba(155, 148, 224, 1)",
        },
        secondaryDark: {
          100: "rgba(120, 109, 35, 0.1)",
          200: "rgba(120, 109, 35, 0.2)",
          300: "rgba(120, 109, 35, 0.3)",
          400: "rgba(120, 109, 35, 0.4)",
          500: "rgba(120, 109, 35, 0.5)",
          600: "rgba(120, 109, 35, 0.6)",
          700: "rgba(120, 109, 35, 0.7)",
          800: "rgba(120, 109, 35, 0.8)",
          900: "rgba(120, 109, 35, 0.9)",
          1000: "rgba(120, 109, 35, 1)",
        },
        accentDark: {
          100: "rgba(109, 206, 87, 0.1)",
          200: "rgba(109, 206, 87, 0.2)",
          300: "rgba(109, 206, 87, 0.3)",
          400: "rgba(109, 206, 87, 0.4)",
          500: "rgba(109, 206, 87, 0.5)",
          600: "rgba(109, 206, 87, 0.6)",
          700: "rgba(109, 206, 87, 0.7)",
          800: "rgba(109, 206, 87, 0.8)",
          900: "rgba(109, 206, 87, 0.9)",
          1000: "rgba(109, 206, 87, 1)",
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
};
export default config;
