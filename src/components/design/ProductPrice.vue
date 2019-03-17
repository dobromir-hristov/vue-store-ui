<template>
  <div class="ProductPrice font-serif text-3xl">
    {{ price | money(currency) }}
  </div>
</template>

<script>

import { ProductPriceMixin } from '@/mixins/core/ProductPriceMixin'

/**
 * Shows the price for the current viewed product
 * @module ProductPrice
 */
export default {
  name: 'ProductPrice',
  mixins: [ProductPriceMixin]
}
</script>
