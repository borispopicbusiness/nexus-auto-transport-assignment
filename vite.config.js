import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicPath: process.env.NODE_ENV === 'production' ? '/nexus-auto-transport-assignment/' : '/',
  outputDir: 'dist',  // Make sure this is correctly set
})
