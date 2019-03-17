import ProductQuantityPicker from './ProductQuantityPicker'
import productForm from '@/store/modules/productForm'
import { productFactory } from '@/factories/productFactory'

/**
 * @param overrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = async (overrides) => {
  const store = {
    'product/productForm': productForm
  }

  let config = _merge(createComponentMocks({ store }), overrides)
  await config.store.dispatch('product/productForm/prepareForm', productFactory())
  const wrapper = mount(ProductQuantityPicker, config)
  return {
    config,
    wrapper
  }
}

describe('ProductQuantityPicker', () => {
  it('renders the ProductQuantityPicker', async () => {
    const { wrapper } = await createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('increases the quantity in the store from the picker', async () => {
    const { wrapper } = await createWrapper()
    wrapper.find('input').setValue(5)
    expect(wrapper.vm.$store.getters['product/productForm/quantity']).toBe(5)
  })
})
