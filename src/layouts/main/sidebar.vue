<script setup>
import {computed, h, ref, watchEffect} from 'vue'
import {useLayoutStore} from '@/store/layout.js'
import {RouterLink, useRoute} from 'vue-router'
import icon from '@/components/icon.vue'
import menus from '@/variables/menus.js'

const layout = useLayoutStore()
const collapsed = computed(() => layout.sidebarCollapsed)
const toggle = () => layout.toggleSidebarCollapse()

const mapping = (items) => items.map(item => ({
  ...item,
  key: item.id,
  label: item.name != null ? () => h(RouterLink, {to: item}, {default: () => item.label}) : item.label,
  icon: item.icon != null ? () => h(icon, {type: item.icon}) : undefined,
  children: item.children && mapping(item.children)
}))

const options = computed(() => (menus ? mapping(menus) : []))

const route = useRoute()
const currentKey = ref('')
const expandedKeys = ref([])

const routeMatched = (menu) => {
  return route.name === menu.name && (menu.params == null || JSON.stringify(route.params) === JSON.stringify(menu.params))
}

const matchExpanded = (items) => {
  let matched = false
  for (const item of items) {
    if (item.children != null) {
      matchExpanded(item.children) && expandedKeys.value.push(item.id)
    }
    console.log(routeMatched(item))
    if (routeMatched(item)) {
      currentKey.value = item.id
      matched = true
    }
  }
  console.log('Matched: ' + matched)
  return matched
}

watchEffect(() => menus && matchExpanded(menus))
</script>

<template>
  <n-layout-sider
      :width="220" :native-scrollbar="false" :collapsed="collapsed" collapse-mode="width" show-trigger="bar" bordered
      @update:collapsed="toggle"
  >
    <router-link to="/" #="{ navigate, href }" custom>
      <n-a class="logo" :href="href" @click="navigate">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3v9z"></path>
            <path d="M12 12c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5h-9z"></path>
            <path d="M12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21v-9z"></path>
            <path d="M12 12c0-2.76-2.01-5-4.5-5S3 9.24 3 12h9z"></path>
          </g>
        </svg>
        <span>Admin</span>
      </n-a>
    </router-link>
    <n-menu :value="currentKey" :default-expanded-keys="expandedKeys" :options="options" :root-indent="18"
            @update:value="k => { currentKey = k }"/>
  </n-layout-sider>
</template>

<style scoped>
.logo {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  /* border-bottom: 1px solid var(--border-color); */
  background: var(--color);
  font-size: 1.8em;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition: padding 0.3s var(--bezier), font-size 0.3s var(--bezier);
}

.n-layout-sider--collapsed .logo {
  padding: 8px;
  font-size: 0;
}

.logo svg {
  flex: 0 0 32px;
  height: 32px;
  margin-right: 12px;
  transition: margin 0.3s var(--bezier);
}

.n-layout-sider--collapsed .logo svg {
  margin-right: 0;
}
</style>
