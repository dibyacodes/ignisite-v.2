import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server : {
    allowedHosts : [
      "818c-2405-201-a805-e01c-b72b-b381-4adc-b75b.ngrok-free.app"
    ],

    proxy:{
      // this only works in the local machine
      '/call':'http://localhost:8080',
      '/admin':'http://localhost:8080',
      '/service' :'http://localhost:8080'
    }
  }
})
