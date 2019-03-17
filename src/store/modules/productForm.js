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
   * @return {string}
   */
  sku (state, getters) {
    if (!getters.productForm) return ''
    return getters.productForm.sku + '-' + getters.productForm.variations.map(v => v.id).join('-')
  },
  variationsMap (state, getters) {
    if (!getters.productForm) return {}
    return getters.productForm.variations
      .reduce((all, current) => {
        all[current.id] = current.value
        return all
      }, {})
  },
  price (state, getters) {
    if (!getters.productForm) return 0
    return getters.productForm.price +
      getters.productForm.variations
        .reduce((all, current) => all + current.price, 0)
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
