export const ProductQuantityMixin = {
  computed: {
    quantity: {
      get () {
        return this.$store.getters['product/productForm/quantity']
      },
      set (value) {
        this.$store.commit('product/productForm/SET_QUANTITY', value)
      }
    }
  }
}
