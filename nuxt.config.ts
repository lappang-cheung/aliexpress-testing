export default defineNuxtConfig({
  pages: true,
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "nuxt-lazy-load",
    "@nuxtjs/html-validator",
  ],
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    // Product page generated on-demand, revalidates in background
    "/products/**": { swr: true },
    // Blog post generated on-demand once until next deploy

    // Admin dashboard renders only on client-side

    // Add cors headers on API routes
    "/api/**": { cors: true },
    // Redirects legacy urls
  },

  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
  },
  nitro: {
    compressPublicAssets: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Learning the code",
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
