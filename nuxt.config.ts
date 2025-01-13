// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: '旅遊時代來臨！孤獨旅遊獨家免費試用，全面體驗最新產品，快來參加並分享心得吧！',
            link: [
                { rel: 'icon', type: 'image/png', href: "/images/hippo-solid.svg" }
            ]
        },
        router: {
            options: {
              scrollBehaviorType: 'smooth'
            }
        }
	},

	css: ['@/assets/styles/main.scss', 'swiper/swiper-bundle.css'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/base/_vars.scss" as *;'
				}
			}
		},
        // Ensure SVG images are included
        assetsInclude: ['**/*.svg'],

        // Disable inlining of assets
        build: {
            assetsInlineLimit: 0,
        },
	},

    modules: [// '@nuxtjs/axios'
    '@pinia/nuxt', "@nuxtjs/sitemap"],

    hooks: {
        'pages:extend' (pages) {
            // add a route
            pages.push({
                name: 'index',
                path: '/',
                file: '~/pages/[category]/index.vue'
            })
        }
    }
})