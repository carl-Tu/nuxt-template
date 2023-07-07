// / <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'assjs'
declare module '*.png'
declare module '*.jpg'
declare module '*.svg'
declare module '*.svg?url'
declare module '*.svg?raw'
declare module '*.svg?component'

declare module 'nuxt/schema' {
  // interface RuntimeConfig {}
  interface PublicRuntimeConfig {
    /**
     * @description 接口地址
     * @type {string}
     * @memberof RuntimeConfig
     */
    apiHost: string
  }
}

export {}
