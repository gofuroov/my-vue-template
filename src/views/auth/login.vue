<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'

const router = useRouter()
const message = useMessage()

const rules = {
  username: {
    required: true,
    message: 'Username`ni kiritish shart.',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: 'Parol`ni kiritish shart.',
    trigger: 'blur'
  }
}

const model = ref({
  username: '',
  password: ''
})

const loading = ref(false)

const disabled = computed(() => model.value.username === '' || model.value.password === '')

const handleLogin = async (e) => {
  e.preventDefault()
  /*loading.value = true
  try {
    await token.authenticate(model.value.username, model.value.password)
    const route = router.currentRoute.value
    const redirect = route.query.redirect?.toString()
    await router.replace(redirect ?? route.redirectedFrom?.fullPath ?? '/')
  } catch (e) {
    message.error(e instanceof Error ? e.message : 'unknown error')
  }
  loading.value = false*/
}
</script>

<template>
  <n-h1 style="--font-size: 60px; --font-weight: 100">
    Utel
  </n-h1>
  <n-card size="large" style="--padding-bottom: 30px">
    <n-h2 style="--font-weight: 400">
      Kirish
    </n-h2>
    <n-form size="large" :rules="rules" :model="model">
      <n-form-item-row label="Username" path="username">
        <n-input v-model:value="model.username" placeholder="Username`ni kiriting" />
      </n-form-item-row>
      <n-form-item-row label="Parol" path="password">
        <n-input v-model:value="model.password" type="password" placeholder="Parol`ni kiriting" />
      </n-form-item-row>
    </n-form>
    <n-button type="primary" size="large" block :loading="loading" :disabled="disabled" @click="handleLogin">
      Kirish
    </n-button>
    <br>
  </n-card>
</template>

<style scoped>
.n-h1 {
  margin: 20vh auto 20px;
  text-align: center;
  letter-spacing: 5px;
  opacity: 0.8;
}

.n-card {
  margin: 0 auto;
  max-width: 380px;
  box-shadow: var(--box-shadow);
}
</style>
