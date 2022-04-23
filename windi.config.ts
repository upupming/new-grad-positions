import { defineConfig } from 'windicss/helpers'
import { themeable } from 'tailwindcss-themeable'

export default defineConfig({
  plugins: [
    themeable({
      themes: []
    })
  ]
})
