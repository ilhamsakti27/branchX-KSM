import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

createApp(App)
  .use(router)
  .use(Vueform, vueformConfig)
  .mount('#app')
