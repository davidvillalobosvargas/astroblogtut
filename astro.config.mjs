import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://stargazers.club',
  integrations: [icon(), tailwind(), sitemap(), react()]
});