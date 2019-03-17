import CurrentProductAddToCart from './CurrentProductAddToCart'
import modules from '@/store/modules'
import { productFactory } from '@/factories/productFactory'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = async (overrides) => {
  const store = modules
  let config = _merge(createComponentMocks({ store }), overrides)
  await config.store.dispatch('product/productForm/prepareForm', productFactory())
  const wrapper = mount(CurrentProductAddToCart, config)
  return {
    config,
    wrapper
  }
}

describe('CurrentProductAddToCart', () => {
  it('renders the CurrentProductAddToCart', async () => {
    const { wrapper } = await createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('does disables button if quantity is 0', async () => {
    const { wrapper, config } = await createWrapper()
    config.store.commit('product/productForm/SET_QUANTITY', 0)
    expect(wrapper.find('button').attributes('disabled')).toBeTruthy()
  })

  it('adds an item to the cart', async () => {
    const { wrapper, config } = await createWrapper()
    wrapper.find('button').trigger('click')
    expect(config.store.getters['cart/itemsInCartCount']).toBe(1)
  })
})
