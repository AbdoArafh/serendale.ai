import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://abdoarafh.github.io/",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
