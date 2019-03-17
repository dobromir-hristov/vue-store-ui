import { ProductVariation } from './ProductVariationMixin'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const chooseVariation = jest.fn(() => Promise.resolve())
const createWrapper = (overrides) => {
  const component = {
    render: h => h('div'),
    mixins: [ProductVariation]
  }
  const store = {
    'product/productForm': {
      getters: {
        variations: () => ({ color: 'color--green' })
      },
      actions: {
        chooseVariation
      }
    }
  }
  let config = _merge(createComponentMocks({ store }),
    {
      propsData: {
        variation: { id: 'color', type: 'color' }
      }
    },
    overrides
  )
  const wrapper = mount(component, config)
  return {
    config,
    wrapper
  }
}

describe('ProductVariationMixin', () => {
  it('returns the chosen variation type', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.vm.chosenVariation).toEqual('color--green')
  })

  it('chooses a variation', () => {
    const { wrapper } = createWrapper()
    wrapper.vm.chooseVariationType('color--green')

    expect(chooseVariation.mock.calls[0][1]).toEqual({ id: 'color', value: 'color--green' })
  })
})
