import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': {'max': '1023px'},

      // 'tablet': {'min': '640px'},
      
      'desktop': {'min': '1024px'},

    },
    extend: {
      boxShadow: {
        'custom': '3px 3px 5px rgba(0,0,0,0.2);',
        'custom2': '0 2px 4px darkslategray',
      },
      textShadow: {
        'custom': '5px 5px 5px rgba(0,0,0,0.3)',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        lightcyan: '#84ffff', // Define aqua color with hexadecimal value
        gradientLeft: '#1e88e5',
        gradientRight: '#8e24aa',
      },
      animation: {
        blinking: "blinking 10s linear infinite",
        scalepulse: "scalepulse 8s ease-in-out infinite",
        fadeIn: "fadeIn 5s",
        moveFade: "moveFade 2s linear infinite"
      },
      keyframes: {
        moveFade: {
          '0%': { 
            opacity: "0",
            transform: "rotate(45deg) translate(-10px, -10px)",
          },
          '50%': { 
            opacity: "1",
          },
          '100%': {    
            opacity: "0",
            transform: "rotate(45deg) translate(10px, 10px)",
          },
      },

        fadeIn: {
          from: { opacity: "0"},
          to: { opacity: "1"}
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },
        blinking: {
          to: { "background-position": "400%"}
        },
        scalepulse: {
          '0%': { "scale": "1" },
          '50%': { "scale": "1.05" },
          '100%': { "scale": "1" },
        }
      },
      maxHeight: {
        'lg': '512px',
        'md': '448',
        'sm': '384'
      },

      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const textShadowValue = theme('textShadow.custom');
      const newUtilities = {
        '.text-shadow': {
          textShadow: textShadowValue ? textShadowValue : 'none',
        },
      };
  
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
