<template>
  <current-product-price-provider v-slot="{ price, currency }">
    <product-price
      :price="price"
      :currency="currency"
    />
  </current-product-price-provider>
</template>

<script>
import ProductPrice from '@/components/design/ProductPrice'
import CurrentProductPriceProvider from '@/components/functional/CurrentProductPriceProvider'

/**
 * @module CurrentProductPrice
 */
export default {
  name: 'CurrentProductPrice',
  components: { ProductPrice, CurrentProductPriceProvider }
}
</script>
