<!--
  * @Date: 2023-06-26 19:44:30
  * @LastEditors: yikoyu 2282373181@qq.com
  * @LastEditTime: 2023-06-30 21:30:38
  * @FilePath: \nuxt-template\app.vue
-->
<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
useDark()
</script>

<style lang="scss">
@import '@/styles/index';

:root {
  --color-text: #666;
  --color-high-text: #ff5777;
  --color-tint: #ff8198;
  --color-background: #fff;
  --font-size: 14px;
  --line-height: 1.5;
}

html,
body {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', 'Microsoft YaHei', '微软雅黑',
    Arial, sans-serif;
  background: var(--color-background);
  -webkit-tap-highlight-color: transparent;
}
</style>
