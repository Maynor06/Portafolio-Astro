import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://maynor06.github.io',
  base: '/Portafolio-Astro',
  
  buildOptions: {
    images: {
      dir: 'imagenes', // Ajusta según tu estructura de carpetas
    },
  },
});