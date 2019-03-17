<template>
  <div class="ProductQuantityPicker">
    <label class="mb-2 block">Quantity</label>
    <div>
      <input
        v-model.number="quantity"
        type="number"
        class="w-16 border-b border-gray pb-2"
      >
    </div>
  </div>
</template>

<script>
import { ProductQuantityMixin } from '@/mixins/core/ProductQuantityMixin'

/**
 * Renders a quantity picker for the current product
 * @module ProductQuantityPicker
 */
export default {
  name: 'ProductQuantityPicker',
  mixins: [ProductQuantityMixin]
}
</script>
