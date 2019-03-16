import VIcon from './VIcon'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  let config = _merge(createComponentMocks(),
    {
      propsData: {
        type: 'user'
      }
    },
    overrides
  )
  const wrapper = mount(VIcon, config)
  return {
    config,
    wrapper
  }
}

describe('VIcon', () => {
  it('renders the VIcon', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.classes()).toContain('fa-user')
  })

  it('applies a proper style based on first letter', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.classes()).toContain('fas')

    wrapper.setProps({
      iconType: 'brand'
    })

    expect(wrapper.classes()).toContain('fab')
  })
  it('applies size', () => {
    const { wrapper } = createWrapper({
      propsData: {
        size: 'lg'
      }
    })
    expect(wrapper.classes()).toContain('fa-lg')
  })
})
