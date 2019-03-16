import VButton from './VButton'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  let config = _merge(createComponentMocks(),
    {
      slots: { default: 'BUTTON TEXT' }
    },
    overrides
  )
  const wrapper = mount(VButton, config)
  return {
    config,
    wrapper
  }
}

describe('VButton', () => {
  it('renders the VButton with default class', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.classes()).toContain('v-button--primary')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the button with all props', () => {
    const { wrapper } = createWrapper({
      propsData: {
        color: 'secondary',
        outlined: true,
        size: 'lg',
        square: true,
        active: true,
        loading: true
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
