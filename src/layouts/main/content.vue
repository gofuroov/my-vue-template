<script setup>
import { useLoadingBar } from 'naive-ui'
import router from '@/router'

// todo: route transtion

const loadingBar = useLoadingBar()

router.beforeEach(() => loadingBar?.start())

router.afterEach(() => loadingBar?.finish())
</script>

<template>
  <n-layout-content content-style="padding: 24px; min-height: 85vh">
    <router-view />
  </n-layout-content>
</template>
