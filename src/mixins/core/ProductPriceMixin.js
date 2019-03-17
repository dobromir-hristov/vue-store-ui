export const ProductPriceMixin = {
  props: {
    price: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      required: true
    }
  }
}
