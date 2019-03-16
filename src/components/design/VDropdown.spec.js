import VDropdown from './VDropdown'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  let config = _merge(createComponentMocks(),
    {
      scopedSlots: {
        trigger: '<a @click="props.toggleVisibility" data-testid="trigger">CLICK</a>'
      },
      slots: {
        content: 'DROPDOWN_CONTENT'
      }
    },
    overrides
  )
  const wrapper = mount(VDropdown, config)
  return {
    config,
    wrapper
  }
}

describe('VDropdown', () => {
  it('renders the VDropdown with a trigger', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.find(testid('trigger')).exists()).toBeTruthy()
  })

  it('allows toggling the dropdown on/off', () => {
    const { wrapper } = createWrapper()
    wrapper.find(testid('trigger')).trigger('click')
    expect(wrapper.text()).toContain('DROPDOWN_CONTENT')
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.vm.close()
    expect(wrapper.text()).not.toContain('DROPDOWN_CONTENT')
  })
})
