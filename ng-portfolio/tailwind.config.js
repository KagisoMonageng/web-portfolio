/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      main: {
        "primary": "#979292", //grey
        "secondary": "#F7A919", //orange
        "accent": "#EBEBEB",// lighter grey
        "neutral": "#232325", //black-like
        "base-100": "#ffffff", //white
        "info": "#5AABB0", //jade
        "success": "#18c961",//NOT SET
        "warning": "#ae7f0a",//NOT SET
        "error": "#f26391",//NOT SET
      }
    }],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },

}
