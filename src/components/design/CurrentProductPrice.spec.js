import CurrentProductPrice from './CurrentProductPrice'
import product from '@/store/modules/product'

jest.mock('@/services/api/ProductService')
/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = async (overrides) => {
  const store = {
    product
  }
  let config = _merge(createComponentMocks({ store }), overrides)

  await config.store.dispatch('product/fetchProduct', 'some-random-id')
  const wrapper = mount(CurrentProductPrice, config)
  return {
    config,
    wrapper
  }
}

describe('CurrentProductPrice', () => {
  it('renders the CurrentProductPrice', async () => {
    const { wrapper } = await createWrapper()
    expect(wrapper.text()).toContain('$37.5')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
