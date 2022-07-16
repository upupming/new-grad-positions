import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    WindiCSS(),
    Icons({
      // expiremental
      autoInstall: true,
      compiler: 'jsx',
      jsx: 'react',
    })
  ],
  base: './',
})
