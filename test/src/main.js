import { createApp } from 'vue'
import App from './App.vue'
import logging from './../../index.js'

const app = createApp(App)
app.use(logging)
app.mount('#app')
