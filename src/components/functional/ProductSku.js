import { mapGetters } from 'vuex'

export const ProductSku = {
  computed: {
    ...mapGetters('product/productForm', ['sku'])
  }
}
