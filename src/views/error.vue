<template>
  <n-result
      status="404"
      title="404 Not Found"
      description="Sahifa topilmadi."
      size="huge"
  >
    <template #footer>
      <n-button @click="router.replace('/')">Bosh sahifaga qaytish →</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
.n-result {
  margin: 20vh auto 0;
}
</style>
