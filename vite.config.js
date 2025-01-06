import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rick-and-morty-react/',
  // build: {
  //   outDir: 'build' // Cambia el nombre aquí a 'build' si lo prefieres
  // }
})
