import { ProductVariationTypeItem } from './ProductVariationTypeItemMixin'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  const component = {
    render: h => h('div'),
    mixins: [ProductVariationTypeItem]
  }
  const store = {
    'product/productForm': {
      getters: {
        variations: () => ({ color: 'color--green' })
      }
    }
  }
  let config = _merge(createComponentMocks({ store }),
    {
      propsData: {
        variation: { id: 'color' },
        type: { id: 'color--blue' }
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

describe('ProductVariationTypeItemMixin', () => {
  it('Returns whether an item is active or not', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.vm.isActive).toBe(false)
    wrapper.setProps({
      type: { id: 'color--green' }
    })
    expect(wrapper.vm.isActive).toBe(true)
  })
})
