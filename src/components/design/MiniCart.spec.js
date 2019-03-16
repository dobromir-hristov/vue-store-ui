import MiniCart from './MiniCart'

const itemsFactory = () => ([
  { id: 1, name: 'Whatever', quantity: 1 },
  { id: 2, name: 'Whatever 2', quantity: 1 }
])

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  let config = _merge(createComponentMocks(),
    {},
    overrides
  )
  const wrapper = mount(MiniCart, config)
  return {
    config,
    wrapper
  }
}

describe('MiniCart', () => {
  it('renders the MiniCart without any items', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.find(testid('NoCartItems')).exists()).toBeTruthy()
  })

  it('renders the items', () => {
    const { wrapper } = createWrapper({
      propsData: { items: itemsFactory() }
    })
    expect(wrapper.findAll(testid('MiniCartItem'))).toHaveLength(2)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emits an event with the element id', () => {
    const { wrapper } = createWrapper({
      propsData: { items: itemsFactory() }
    })
    wrapper.find(testid('removeItem')).trigger('click')
    expect(wrapper.emitted('remove')).toEqual([[1]])
  })
})
