import { mapGetters, mapActions } from 'vuex'

export const CurrentProductAddToCartMixin = {
  computed: {
    ...mapGetters('product/productForm', ['canAddToCart'])
  },
  methods: {
    ...mapActions('product/productForm', ['addToCart']),
    async addToCartHandler () {
      await this.addToCart()
      this.$swal({
        type: 'success',
        text: 'Successfully added item to cart'
      })
    }
  }
}
