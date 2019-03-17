import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/pages/Home.vue'

Vue.use(Router)

function asyncLoad (path) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/pages/${path}.vue`)
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
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: asyncLoad('Product')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: asyncLoad('Category')
    }
  ]
})
