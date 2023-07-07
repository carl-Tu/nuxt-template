<!--
  * @Date: 2023-06-26 19:53:17
  * @LastEditors: yikoyu 2282373181@qq.com
  * @LastEditTime: 2023-07-04 10:23:15
  * @FilePath: \nuxt-template\pages\index.vue
-->
<script lang="ts" setup>
import dayjs from 'dayjs'

import { useUser } from '@/stores'

const config = useRuntimeConfig()

const { x, y } = useMouse()
const isDark = useDark()
const toggleDark = useToggle(isDark)

console.log('config.public.apiHost :>> ', config.public.apiHost)

const user = useUser()

function setToken() {
  user.setToken(String(dayjs().unix()))
}
</script>

<template>
  <NuxtLayout>
    <div>这里是首页</div>

    <div>x: {{ x }}, y: {{ y }}</div>

    <div>{{ user.token }}</div>

    <ElButton @click="setToken">set token</ElButton>

    <ElButton @click="toggleDark()">Toggle Dark</ElButton>
  </NuxtLayout>
</template>
