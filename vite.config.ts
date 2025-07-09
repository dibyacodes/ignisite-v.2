import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server : {
    allowedHosts : [
      "dbb0a2a1cf57.ngrok-free.app"
    ],

    proxy:{
      // this only works in the local machine
      '/call':'http://localhost:8080',
      '/admin':'http://localhost:8080',
      '/service' :'http://localhost:8080'
    }
  }
})
