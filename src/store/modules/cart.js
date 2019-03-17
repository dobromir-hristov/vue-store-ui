import { basicSetter } from '@/store/StoreUtils'

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const SET_ITEMS = 'SET_ITEMS'
export const ADD_ITEM = 'ADD_ITEM'

const state = {
  items: [
    { name: 'Shoes', id: 'product-id', quantity: 2 }
  ]
}

const getters = {
  itemsInCart (state) {
    return state.items
  },
  itemsInCartCount (state, getters) {
    return getters.itemsInCart.length
  }
}

const mutations = {
  [REMOVE_ITEM] (state, productId) {
    const index = state.items.findIndex(i => i.id === productId)
    if (index !== -1) {
      state.items.splice(index, 1)
    }
  },
  [SET_ITEMS]: basicSetter('items'),
  /**
   * Adds a product to the items list
   * @param {Product} product
   */
  [ADD_ITEM] (state, product) {
    const index = state.items.findIndex(p => p.id === product.id)
    if (index !== -1) {
      state.items[index].quantity += product.quantity
    } else {
      state.items.push(product)
    }
  }
}

const actions = {
  removeItem ({ commit }, productId) {
    commit(REMOVE_ITEM, productId)
  },
  addItem ({ commit }, product) {
    commit(ADD_ITEM, product)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
