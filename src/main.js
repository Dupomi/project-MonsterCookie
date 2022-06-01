import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap"
import animated from 'animate.css';

createApp(App).use(router).mount('#app').use(animated)
