import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    https: false,
    host: "localhost",
    port: 5173
  },
  plugins: [mkcert()]
});