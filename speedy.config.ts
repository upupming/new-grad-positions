import { defineConfig } from '@speedy-js/speedy-core'
import windiPlugin from 'rollup-plugin-windicss'
import { unplugin, UnPluginOptions } from '@speedy-js/unplugin'

export default defineConfig({
  input: {
    index: './src/frontend/index.tsx',
  },
  output: {
    publicPath: '/new-grad-positions/',
  },
  html: {
    template: './index.speedy.html',
  },
  plugins: [...windiPlugin().map(x => unplugin(x as UnPluginOptions))],
})
