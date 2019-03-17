import { ProductGallery } from './ProductGallery'
import { galleryFactory } from '@/factories/galleryFactory'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  const DummyComponent = {
    render: h => h('div', 'Here'),
    mixins: [ProductGallery]
  }
  let config = _merge(createComponentMocks(),
    {
      propsData: {
        gallery: galleryFactory()
      }
    },
    overrides
  )
  const wrapper = mount(DummyComponent, config)
  return {
    config,
    wrapper
  }
}

describe('ProductGallery', () => {
  it('allows changing the current gallery item from an even bus event', () => {
    const { wrapper } = createWrapper()
    wrapper.vm.$root.$emit('VariationPicker:change', 'color__purple')
    expect(wrapper.vm.syncSlideWithVariations).toBe(2)
  })

  it('does nothing if the emitted variation_id is not found', () => {
    const { wrapper } = createWrapper()
    wrapper.vm.$root.$emit('VariationPicker:change', 'some_random_id')
    expect(wrapper.vm.syncSlideWithVariations).toBe(0)
  })
})
