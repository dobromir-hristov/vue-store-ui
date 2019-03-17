<template>
  <div class="CurrentProductVariations">
    <div
      v-for="variation in variations"
      :key="variation.id"
      class="mb-8"
    >
      <product-variation :variation="variation"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductVariation from '@/components/functional/ProductVariation'

/**
 * @module CurrentProductVariations
 */
export default {
  name: 'CurrentProductVariations',
  components: { ProductVariation },
  computed: {
    ...mapGetters('product', ['variations'])
  }
}
</script>
