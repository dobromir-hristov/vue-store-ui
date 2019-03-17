import { mapGetters } from 'vuex'

export const ProductVariationTypeItem = {
  props: {
    variation: {
      type: Object,
      required: true
    },
    type: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('product/productForm', ['variations']),
    isActive () {
      return this.variations[this.variation.id] === this.type.id
    }
  }
}
