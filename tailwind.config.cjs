/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'west-side': {
          '50': '#fff7ed',
          '100': '#ffeed4',
          '200': '#ffd9a8',
          '300': '#ffbd71',
          '400': '#ff8e2a',
          '500': '#fe7711',
          '600': '#ef5b07',
          '700': '#c64308',
          '800': '#9d360f',
          '900': '#7e2e10',
          '950': '#441406',
      }  
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
