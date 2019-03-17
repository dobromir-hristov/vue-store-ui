import { ProductForm } from '@/models/ProductForm'

const PREPARE_PRODUCT_FORM = 'PREPARE_PRODUCT_FORM'

const state = {
  /** @type ProductForm */
  productForm: null
}

const getters = {
  productForm: state => state.productForm,
  /**
   * Returns the SKU of a product based on the selected variations
   * @param state
   * @return {string}
   */
  formSKU (state) {
    if (!state.productForm) return ''
    return state.productForm.sku + '-' + Object.values(state.productForm.variations).join('-')
  }
}

const mutations = {
  [PREPARE_PRODUCT_FORM] (state, product) {
    state.productForm = new ProductForm(product)
  }
}

const actions = {
  prepareForm ({ commit }, product) {
    commit(PREPARE_PRODUCT_FORM, product)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
