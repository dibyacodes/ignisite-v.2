import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    allowedHosts:[
      "b6e7-2405-201-a805-e01c-335a-9e88-9fe2-a62c.ngrok-free.app"
    ]
  }
});
