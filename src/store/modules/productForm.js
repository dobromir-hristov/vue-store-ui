import { ProductForm } from '@/models/ProductForm'

const PREPARE_PRODUCT_FORM = 'PREPARE_PRODUCT_FORM'
const UPDATE_VARIATION = 'UPDATE_VARIATION'
const SET_QUANTITY = 'SET_QUANTITY'

const state = {
  /** @type ProductForm */
  productForm: null
}

const getters = {
  productForm: state => state.productForm,
  /**
   * Returns a list filtered list of the chosen types for each variation
   * @return {Array}
   */
  chosenVariationsDetailedList (state, getters, rootState, rootGetters) {
    return rootGetters['product/variations'].map((variation) => {
      const chosenVariationType = variation.types.find(type => type.id === state.productForm.variations[variation.id])
      return {
        ...variation,
        variationType: chosenVariationType
      }
    })
  },
  /**
   * Returns the SKU of a product based on the selected variations
   * @return {string}
   */
  sku (state, getters) {
    if (!getters.productForm) return ''
    return getters.productForm.sku + '-' + getters.chosenVariationsDetailedList.map(v => v.variationType.id).join('-')
  },
  /**
   * Returns the chosen variations
   * @return {Object}
   */
  variations (state) {
    if (!state.productForm) return {}
    return state.productForm.variations
  },
  /**
   * Returns the price based on the variations
   * @return {number}
   */
  price (state, getters) {
    if (!getters.productForm) return 0
    return getters.productForm.price +
      getters.chosenVariationsDetailedList
        .reduce((all, current) => all + current.price, 0)
  },
  quantity (state) {
    if (!state.productForm) return 0
    return state.productForm.quantity
  },
  canAddToCart (state, getters) {
    return getters.quantity > 0
  }
}

const mutations = {
  /**
   * Instantiates a new ProductForm model
   * @param state
   * @param {Object} product
   */
  [PREPARE_PRODUCT_FORM] (state, product) {
    state.productForm = new ProductForm(product)
  },
  [UPDATE_VARIATION] (state, variation) {
    state.productForm.variations[variation.id] = variation.value
  },
  [SET_QUANTITY] (state, quantity) {
    state.productForm.quantity = quantity
  }
}

const actions = {
  /**
   * Called from the product Vuex module when a product page is loaded
   * @param commit
   * @param {Object} product
   */
  prepareForm ({ commit }, product) {
    commit(PREPARE_PRODUCT_FORM, product)
  },
  /**
   * Sets a new variation type.
   * Called from withing variation pickers
   * @param {*} value
   */
  chooseVariation ({ commit }, value) {
    commit(UPDATE_VARIATION, value)
  },
  addToCart ({ getters, dispatch }) {
    const productReadyForCart = {
      ...getters.productForm,
      price: getters.price
    }
    dispatch('cart/addItem', productReadyForCart, { root: true })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
