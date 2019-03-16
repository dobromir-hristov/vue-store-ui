import cart, { SET_ITEMS } from './cart'

let store

describe('vuex/cart', () => {
  beforeEach(() => {
    store = createModuleStore(cart)
  })
  it('returns all the items in the cart', () => {
    store.commit(SET_ITEMS, ['a', 'b'])
    expect(store.getters.itemsInCart).toEqual(['a', 'b'])
  })

  it('returns the number of items in the cart', () => {
    store.commit(SET_ITEMS, ['a', 'b', 'c'])
    expect(store.getters.itemsInCartCount).toBe(3)
  })

  it('adds a product quantity to the list if already exists', () => {
    store.commit(SET_ITEMS, [{ id: 1, quantity: 1 }])
    store.dispatch('addItem', { id: 1, quantity: 3 })
    expect(store.state.items[0].quantity).toBe(4)
  })

  it('removes an item from the cart', () => {
    store.commit(SET_ITEMS, [{ id: 'a' }, { id: 'b' }, { id: 'c' }])
    store.dispatch('removeItem', 'a')
    expect(store.getters.itemsInCartCount).toBe(2)
  })
})
