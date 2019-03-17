import { Product } from '@/models/Product'
import { ProductService } from '@/services/api/ProductService'
import productForm from './productForm'

const SET_PRODUCT = 'SET_PRODUCT'

const state = () => ({
  /** @type Product */
  product: null
})

const getters = {
  productLoaded: state => !!state.product,
  product: state => state.product,
  currency: state => state.product.currency
}

const mutations = {
  [SET_PRODUCT] (state, product) {
    state.product = new Product(product)
  }
}

const actions = {
  async fetchProduct ({ commit, dispatch }, productId) {
    const product = await ProductService.fetchProduct(productId)
    commit(SET_PRODUCT, product)
    dispatch('productForm/prepareForm', product)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  modules: { productForm },
  namespaced: true
}
