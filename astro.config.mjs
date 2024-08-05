import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import paraglide from "@inlang/paraglide-astro"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },

  integrations: [tailwind(), robotsTxt(),
  paraglide({
    project: "./project.inlang",
    outdir: "./src/paraglide",
  })
  ],
  site: 'https://tinchx1.tech/'
})
