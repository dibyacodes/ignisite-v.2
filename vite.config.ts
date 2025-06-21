import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    allowedHosts:[
      "b7f1-2405-201-a805-e01c-11cb-b2f5-65f-2067.ngrok-free.app"
    ]
  }
});
