const REMOVE_ITEM = 'REMOVE_ITEM'

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
    state.items.splice(index, 1)
  }
}

const actions = {
  removeItem ({ commit }, productId) {
    commit(REMOVE_ITEM, productId)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
