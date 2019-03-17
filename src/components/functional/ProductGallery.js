export const ProductGallery = {
  props: {
    gallery: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      syncSlideWithVariations: 0
    }
  },
  mounted () {
    this.$root.$on('VariationPicker:change', this.changeSlideTo)
  },
  beforeDestroy () {
    this.$root.$off('VariationPicker:change')
  },
  methods: {
    /**
     * Changes the current image slide to one matching the passed variationId.
     * Gets called from a {@see VariationPicker}
     * @param {string} variationId
     */
    changeSlideTo (variationId) {
      const index = this.gallery
        .findIndex(item => item.variation_id === variationId)
      if (index !== -1) {
        this.syncSlideWithVariations = index
      }
    }
  }
}
