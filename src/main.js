import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'

import './assets/css/main.css'

const app = createApp(App)
const head = createHead()

app.use(router)

app.use(head)

app.mount('#app')
