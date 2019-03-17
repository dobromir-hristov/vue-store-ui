<template>
  <v-button
    :disabled="!canAddToCart"
    type="primary"
    @click="addToCartHandler"
  >
    Add to Cart
  </v-button>
</template>

<script>/**
 * @module CurrentProductAddToCart
 */
import { CurrentProductAddToCartMixin } from '@/mixins/core/CurrentProductAddToCartMixin'

export default {
  name: 'CurrentProductAddToCart',
  mixins: [CurrentProductAddToCartMixin]
}
</script>
