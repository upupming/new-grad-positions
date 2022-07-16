import { defineConfig } from 'windicss/helpers'
import { themeable } from 'tailwindcss-themeable'

export default defineConfig({
  plugins: [
    themeable({
      themes: [],
    })
  ],
  theme: {
    extend: {
      animation: {
        love: 'love 1s linear infinite alternate-reverse',
      },
      keyframes: {
        love: {
          to: { transform: 'scale(1.2)', },
        },
      },
    },
  },
})
