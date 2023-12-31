import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
// https://vitejs.dev/config/
export default defineConfig({
  base: "/Capstone-Shoes-Shop",
  plugins: [react()],
  server: {
    port: 7000
  },
  resolve: {
    alias: {
      font: "src/assets/fonts",
      src: "/src"
    }
  }
})
