import { mapGetters, mapActions } from 'vuex'
import VariationTitle from '@/components/design/variations/VariationTitle'

export const ProductVariation = {
  props: {
    variation: {
      type: Object,
      required: true
    }
  },
  components: { VariationTitle },
  computed: {
    ...mapGetters('product/productForm', ['variations']),
    chosenVariation () {
      return this.variations[this.variation.id] || ''
    }
  },
  methods: {
    ...mapActions('product/productForm', ['chooseVariation']),
    chooseVariationType (variationTypeId) {
      this.chooseVariation({ id: this.variation.id, value: variationTypeId })
    }
  }
}
