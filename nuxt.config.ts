// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  runtimeConfig: {
    secret: {
      stripe: process.env.STRIPE_SK_KEY
    },
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  supabase: {
    redirect: false // Answer => (https://www.reddit.com/r/Nuxt/comments/17a3p7r/nuxt_app_keeps_redirecting_to_login/)
  },
  app: {
    head: {
      script: [
        {
          src: 'https://js.stripe.com/v3/', defer: true
        }
      ]
    }
  }
})
