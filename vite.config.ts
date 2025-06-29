import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server : {
    allowedHosts : [
      "3e4f-2405-201-a805-e01c-3ebb-f14c-9b86-8690.ngrok-free.app"
    ]
  }
})
