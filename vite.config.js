import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const BASE_PATH = '/Cuestionario/'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
})
