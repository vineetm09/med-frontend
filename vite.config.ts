import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // or any port above 1024
    // host: 'localhost', // Uncomment this line if you want to bind to localhost
  },
});
