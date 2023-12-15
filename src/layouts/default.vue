<script setup>
import Sidebar from './main/sidebar.vue'
import Header from './main/header.vue'
import Content from './main/content.vue'
import Footer from './main/footer.vue'

import { computed } from 'vue'
import { useOsTheme, darkTheme } from 'naive-ui'

const osTheme = useOsTheme()
const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))

</script>

<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <n-layout>
            <router-view/>
          </n-layout>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
