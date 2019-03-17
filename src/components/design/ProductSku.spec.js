import ProductSku from './ProductSku'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  let store = {
    'product/productForm': {
      getters: {
        sku: () => 'what-ev-er'
      }
    }
  }
  let config = _merge(createComponentMocks({ store }), overrides)
  const wrapper = mount(ProductSku, config)
  return {
    config,
    wrapper
  }
}

describe('ProductSku', () => {
  it('renders the ProductSku', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.text()).toContain('what-ev-er')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
