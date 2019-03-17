import ProductPrice from './ProductPrice'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  let config = _merge(createComponentMocks(),
    {
      propsData: {
        price: 55,
        currency: 'EUR'
      }
    },
    overrides
  )
  const wrapper = mount(ProductPrice, config)
  return {
    config,
    wrapper
  }
}

describe('ProductPrice', () => {
  it('renders the ProductPrice', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
