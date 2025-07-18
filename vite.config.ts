import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server : {
    proxy:{
      // this only works in the local machine
      '/schedule':'http://localhost:8000',
      '/admin':'http://localhost:8000',
      '/service' :'http://localhost:8000'
    }
  }
})
