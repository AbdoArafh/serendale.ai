import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://abdoarafh.github.io/",
  base: "/serendale.ai",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
