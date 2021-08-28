module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#FFFF00',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
    backgroundImage: (theme) => ({
      headerhome: "url('~/static/header-home.svg')",
    }),
    extends: {
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },

  variants: {},
  plugins: [require('@tailwindcss/forms'),],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
}
