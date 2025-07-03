import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server : {
    // allowedHosts : [
    //   "dfa3-2405-201-a805-e01c-b1f4-3d1b-fc88-fe3d.ngrok-free.app"
    // ],

    proxy:{
      // this only works in the local machine
      '/call':'http://localhost:8080',
      '/admin':'http://localhost:8080'
    }
  }
})
