import { mapGetters } from 'vuex'

export default {
  name: 'CurrentProductPriceProvider',
  computed: {
    ...mapGetters('product/productForm', ['price']),
    ...mapGetters('product', ['currency'])
  },
  render () {
    return this.$scopedSlots.default({
      currency: this.currency,
      price: this.price
    })
  }
}
