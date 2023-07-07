import '@arco-design/web-vue/dist/arco.css'

import ArcoVue from '@arco-design/web-vue'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ArcoVue)
})
