import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueCarousel from 'vue-carousel'
import VueSweetalert2 from 'vue-sweetalert2'
import './filters'
import './globalComponents'

Vue.use(VueCarousel)
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
