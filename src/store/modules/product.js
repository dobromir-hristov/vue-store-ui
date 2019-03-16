import { Product } from '@/models/Product'
import { ProductService } from '@/services/api/ProductService'

const SET_PRODUCT = 'SET_PRODUCT'

const state = {
  /** @type Product */
  product: null
}

const getters = {
  product: state => state.product
}

const mutations = {
  [SET_PRODUCT] (state, product) {
    state.product = new Product(product)
  }
}

const actions = {
  async fetchProduct ({ commit }, productId) {
    const product = await ProductService.fetchProduct(productId)
    commit(SET_PRODUCT, product)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
