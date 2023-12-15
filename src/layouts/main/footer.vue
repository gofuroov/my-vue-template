<template>
  <n-layout-footer>
    <n-p>
      <n-a href="https://github.com/gofuroov/my-vue-template">&lt;/&gt;</n-a> with <n-text type="error">♥</n-text>
    </n-p>
    <n-p>&copy; Gofuroov {{ new Date().getFullYear() }}</n-p>
  </n-layout-footer>
</template>

<style scoped>
.n-layout-footer {
  opacity: 0.6;
  padding: 30px;
  text-align: center;
}
.n-a {
  text-decoration: none;
}
</style>
