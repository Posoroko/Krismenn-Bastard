// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'nuxt-ts-tailwind',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        },
    },
    css: [
        '@/assets/css/main.css'
    ],
    modules: [
        // '@vueuse/nuxt'
    ],
    ssr: false
})
