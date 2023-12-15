import {createApp} from 'vue'
import App from './App.vue'
import {registerPlugins} from './utils/util'
import naive from './naive.js'
import router from './router'
import { createPinia } from 'pinia'
// General Font
import 'vfonts/Lato.css'
// Monospace Font
import 'vfonts/FiraCode.css'

const pinia = createPinia()
const plugins = [naive, router, pinia]
const app = createApp(App)

app.use(registerPlugins(plugins))
app.mount('#app')
