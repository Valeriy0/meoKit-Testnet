/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"inter"', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        "2xl": { max: "1900px" },
        // => @media (max-width: 1535px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        lg: { max: "1121px" },
        sm: { max: "991px" }
      },
      colors: {
        orange: '#FD9C22',
        lightBlack: "rgba(9, 10, 10, 0.90)",
        "black-200": "rgba(0, 0, 0, 0.20)",
        lightGray: "rgba(255, 255, 255, 0.07)",
        "main-blue": "#406AFF",
        red: "#E1444D",
        white: "#FFFFFF",
        lightGreen: "rgba(150, 242, 51, 0.20)",
        "white-10": "rgba(255, 255, 255, 0.01)",
        "white-30": "rgba(255, 255, 255, 0.03)",
        'white-40': "rgba(255, 255, 255, 0.04)",
        "white-50": "rgba(255, 255, 255, 0.05)",
        "white-60": "rgba(255, 255, 255, 0.06)",
        "white-70": "rgba(255, 255, 255, 0.07)",
        "white-80": "rgba(255, 255, 255, 0.08)",
        "white-90": "rgba(255, 255, 255, 0.09)",
        "white-100": "rgba(255, 255, 255, 0.1)",
        "white-200": "rgba(255, 255, 255, 0.2)",
        "white-300": "rgba(255, 255, 255, 0.3)",
        "white-400": "rgba(255, 255, 255, 0.4)",
        "white-500": "rgba(255, 255, 255, 0.5)",
        "white-600": "rgba(255, 255, 255, 0.6)",
        "white-700": "rgba(255, 255, 255, 0.7)",
        "white-800": "rgba(255, 255, 255, 0.8)",
        "orange-30": "rgba(255, 187, 84, 0.03)",
        "green-30": "rgba(150, 242, 51, 0.03)",
        "black-300": 'rgba(13, 14, 15, 0.30)',
        "black-400": 'rgba(0, 0, 0, 0.40)',
      },
      backdropBlur: {
        small: "10px",
        mini: "15px",
        xl: "20px",
        medium: "25px",
        large: "50px"
      },
      boxShadow: {
        wrapper: "0px 20px 40px 0px #00000040"
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-1-1-0': {
          flex: '1 1 0',
        },
        '.header-dialog-content': {
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          padding: '0px',
          boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 8px 0px',
          maxHeight: '100vh',
          outline: 'none',
        },
        '.header-dialog-content-mob': {
          display: 'flex',
          alignSelf: 'end',
          justifyContent: 'center',
          padding: '0px',
          boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 8px 0px',
          maxHeight: '100vh',
          outline: 'none',
        },
      
        '.header-dialog-overlay': {
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 9998,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0, .6)',
        },
      });
    }),
  ],
};
