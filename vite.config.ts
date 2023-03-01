import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config: UserConfig = {
  plugins: [sveltekit()],
  server: {
    host: true,
    port: 3000,
  }
};

export default config;