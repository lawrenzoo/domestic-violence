import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/domestic-violence/',
   // 👈 this is important
  plugins: [react()],
});

