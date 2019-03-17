import { ucFirst } from '@/helpers'
import VariationSizeType from '@/components/design/variations/VariationSizeType'
import VariationColorType from '@/components/design/variations/VariationColorType'
import VariationDefaultType from '@/components/design/variations/VariationDefaultType'

/**
 * Renders a variation picker component.
 * If we have a dedicated one, we render it, otherwise render a generic one
 * @module ProductVariation
 */
export default {
  name: 'ProductVariation',
  components: {
    VariationSizeType,
    VariationColorType,
    VariationDefaultType
  },
  props: {
    variation: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasDedicatedComponent () {
      return ['color', 'size'].includes(this.variation.type)
    },
    variationComponentByType () {
      return this.hasDedicatedComponent ? `Variation${ucFirst(this.variation.type)}Type` : 'VariationDefaultType'
    }
  },
  render (h) {
    return h(this.variationComponentByType, {
      props: {
        variation: this.variation
      }
    })
  }
}
