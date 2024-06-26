import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(router).mount('#app')
