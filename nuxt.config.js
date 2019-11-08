
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],
  manifest: {
    "name": 'Hao PWA',
    "short_name": 'Hao PWA',
    "display": 'standalone',
    "icons": [
      {
        "src": "@/assets/PWAIcon.png",
        "type": "image/png",
        "sizes": "128x128"
      }
    ],
    "start_url": "/maps/?source=pwa",
    "background_color": "#3367D6",
  },
  // workbox: {
  //   runtimeCaching: [
  //     {
  //       urlPattern: 'https://fonts.googleapis.com/.*',
  //       handler: 'cacheFirst',
  //       method: 'GET',
  //       strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  //     },
  //     {
  //       urlPattern: 'https://fonts.gstatic.com/.*',
  //       handler: 'cacheFirst',
  //       method: 'GET',
  //       strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  //     },
  //     {
  //       urlPattern: 'https://cdn.snipcart.com/.*',
  //       method: 'GET',
  //       strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  //     },
  //     {
  //       urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
  //       handler: 'cacheFirst',
  //       method: 'GET',
  //       strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  //     }
  //   ]
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
