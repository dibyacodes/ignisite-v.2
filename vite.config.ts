import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    allowedHosts:[
      "a5e7-2405-201-a805-e01c-b093-96c5-3fad-467d.ngrok-free.app"
    ]
  }
});
