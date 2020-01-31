import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTyper from 'vue-typer'
import axios from 'axios'

Vue.use(router)
Vue.use(VueTyper)

Vue.prototype.$http = axios

Vue.config.productionTip = false

require('./assets/css/style.css')
require('vue2-animate/dist/vue2-animate.min.css')

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
