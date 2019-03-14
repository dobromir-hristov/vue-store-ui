import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

function asyncLoad (path) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${path}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kitchen-sink',
      name: 'kitchen-sink',
      component: asyncLoad('KitchenSink')
    }
  ]
})
