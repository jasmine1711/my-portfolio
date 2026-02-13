import { defineConfig } from 'vite'

export default defineConfig({
  // This must match your GitHub repository name exactly
  base: '/my-portfolio/', 
  build: {
    // This ensures assets are placed in the right folder for the deploy script
    outDir: 'dist',
  }
})