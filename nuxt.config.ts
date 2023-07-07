/*
 * @Date: 2023-06-26 19:44:30
 * @LastEditors: yikoyu 2282373181@qq.com
 * @LastEditTime: 2023-07-04 10:18:26
 * @FilePath: \nuxt-template\nuxt.config.ts
 */

import { checker } from 'vite-plugin-checker'
import svgLoader from 'vite-svg-loader'
import IconsResolver from 'unplugin-icons/resolver'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

import { scripts } from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'nuxt-template'
    }
  },
  plugins: ['~/plugins/arco-design.ts'],
  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  pinia: {
    autoImports: [
      'defineStore' // import { defineStore } from 'pinia'
    ]
  },
  runtimeConfig: {
    public: {
      apiHost: ''
    }
  },
  css: ['@arco-design/web-vue/dist/arco.css'],
  vite: {
    plugins: [
      Components({
        dts: true, // enabled by default if `typescript` is installed
        resolvers: [
          IconsResolver({
            // to avoid naming conflicts
            // a prefix can be specified for icons
            prefix: 'i'
          }),
          ArcoResolver({
            importStyle: 'less',
            resolveIcons: true
          })
        ]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/index.scss";',
          javascriptEnabled: true
        }
      }
    }
  }
})
