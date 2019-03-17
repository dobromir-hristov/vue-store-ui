import Vue from 'vue'
import { moneyFilter } from '@/filters/moneyFilter'

Vue.filter('money', moneyFilter)
Vue.filter('commaList', (value = [], delimiter = ', ') => {
  return value.join(delimiter)
})
