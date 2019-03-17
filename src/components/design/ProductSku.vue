<template>
  <div class="ProductSku text-grey text-sm">
    SKU: <span class="uppercase">{{ sku }}</span>
  </div>
</template>

<script>
import { ProductSku } from '@/components/functional/ProductSku'

/**
 * @module ProductSku
 */
export default {
  name: 'ProductSku',
  mixins: [ProductSku]
}
</script>
