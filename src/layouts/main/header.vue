<script setup>
import {computed, h, onMounted, ref} from 'vue'
import {useMessage} from 'naive-ui'
import {RouterLink, useRouter} from 'vue-router'
import icon from '@/components/icon.vue'

const router = useRouter()
const message = useMessage()

const options = computed(() => [
  {key: 'me', label: `Hey, Olimjon!`},
  {key: 'divider', type: 'divider'},
  {key: 'profile', label: () => h(RouterLink, {to: '/profile'}, 'Your Profiles')},
  {key: 'settings', label: () => h(RouterLink, {to: '/profile/settings'}, 'Settings')},
  {key: 'divider', type: 'divider'},
  {key: 'logout', label: 'Sign out'}
])

const handleOptionsSelect = async (key) => {
  if (key === 'logout') {
    await router.push({name: 'login'})
  } else if (key === 'me') {
    message.success(`Welcome back, Olimjon!`)
  }
}

</script>

<template>
  <n-layout-header bordered>
    <n-tooltip>
      <template #trigger>
        <n-button text @click="router.go(0)">
          <icon type="RefreshOutline" size="20" :depth="2"/>
        </n-button>
      </template>
      Sahifani yangilash
    </n-tooltip>
    <n-breadcrumb>
      <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
      <n-breadcrumb-item>Home</n-breadcrumb-item>
    </n-breadcrumb>
    <n-space :size="20" align="center" style="line-height: 1">
      <n-tooltip>
        <template #trigger>
          <router-link to="/page2">
            <icon type="HelpCircleOutline" size="22" :depth="2"/>
          </router-link>
        </template>
        Yordam
      </n-tooltip>
      <n-popover trigger="click" placement="bottom-end" :width="300">
        <template #trigger>
          <n-badge dot processing>
            <icon type="NotificationsOutline" size="22" :depth="2"/>
          </n-badge>
        </template>
        <n-tabs type="line" justify-content="space-evenly" style="--pane-padding: 0">
          <n-tab-pane name="notifications" tab="Notifications (5)">
            <n-list style="margin: 0">
              <n-list-item v-for="i in 5" :key="i"> Notification {{ i }}</n-list-item>
            </n-list>
          </n-tab-pane>
          <n-tab-pane name="messages" tab="Messages (6)">
            <n-list style="margin: 0">
              <n-list-item v-for="i in 6" :key="i"> Message {{ i }}</n-list-item>
            </n-list>
          </n-tab-pane>
        </n-tabs>
      </n-popover>
      <n-dropdown placement="bottom-end" show-arrow :options="options" @select="handleOptionsSelect">
        <n-avatar size="small" round :src="me?.avatar"/>
      </n-dropdown>
    </n-space>
  </n-layout-header>
</template>

<style scoped>
.n-layout-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 9px 18px;
}

.n-button {
  margin-right: 15px;
}

.n-space {
  margin-left: auto;
}
</style>
