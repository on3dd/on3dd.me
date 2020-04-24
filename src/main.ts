import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy);

Vue.config.productionTip = false;

export function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app, router }
}