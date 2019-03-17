import ProductVariation from './ProductVariation'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  let config = _merge(createComponentMocks(),
    {
      propsData: {
        variation: {
          id: 'color',
          type: 'color'
        }
      },
      stubs: [
        'VariationDefaultType',
        'VariationColorType',
        'VariationSizeType'
      ]
    },
    overrides
  )
  const wrapper = mount(ProductVariation, config)
  return {
    config,
    wrapper
  }
}

describe('ProductVariation', () => {
  it('renders the a color variation picker', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.is('VariationColorType'))
  })

  it('passes the variation prop', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.props().variation).toEqual({ 'id': 'color', 'type': 'color' })
  })

  it('renders a default picker if the type is not supported', () => {
    const { wrapper } = createWrapper({
      propsData: {
        variation: {
          type: 'material'
        }
      }
    })
    expect(wrapper.is('VariationDefaultType'))
  })
})
