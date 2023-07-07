/*
 * @Date: 2023-06-26 19:44:30
 * @LastEditors: yikoyu 2282373181@qq.com
 * @LastEditTime: 2023-07-04 10:18:26
 * @FilePath: \nuxt-template\nuxt.config.ts
 */

import { checker } from 'vite-plugin-checker'
import svgLoader from 'vite-svg-loader'

import { scripts } from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'nuxt-template'
    }
  },
  modules: ['@element-plus/nuxt', '@vueuse/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
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
  vite: {
    plugins: [
      svgLoader(),
      checker({
        vueTsc: true,
        eslint: {
          lintCommand: scripts['lint:js']
        },
        stylelint: {
          lintCommand: scripts['lint:css']
        }
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
