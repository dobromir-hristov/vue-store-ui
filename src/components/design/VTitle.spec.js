import VTitle from './VTitle'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  let config = _merge(createComponentMocks(),
    {
      slots: {
        default: 'Some random text'
      }
    },
    overrides
  )
  const wrapper = mount(VTitle, config)
  return {
    config,
    wrapper
  }
}

describe('VTitle', () => {
  it('renders the VTitle with size 3 by default', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.element.tagName).toBe('H3')
  })

  it('renders with proper size class and tag', () => {
    const { wrapper } = createWrapper({
      propsData: {
        size: 2
      }
    })
    expect(wrapper.element.tagName).toBe('H2')
    expect(wrapper.classes()).toContain('title--size-2')
    expect(wrapper.text()).toContain('Some random text')
  })
})
