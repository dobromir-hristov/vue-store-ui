import ProductBreadcrumbs from './ProductBreadcrumbs'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides) => {
  let config = _merge(createComponentMocks({ router: true }),
    {
      propsData: {
        items: [
          { id: '2', name: 'Default Category' },
          { id: '3', name: 'Women' }
        ]
      }
    },
    overrides
  )
  const wrapper = mount(ProductBreadcrumbs, config)
  return {
    config,
    wrapper
  }
}

describe('ProductBreadcrumbs', () => {
  it('renders the ProductBreadcrumbs', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
