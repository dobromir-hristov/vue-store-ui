<template>
  <a
    class="VariationColorTypeItem VariationType--color"
    :class="{ active: isActive }"
    :style="{ background: type.value, borderColor: type.value }"
    :title="type.name"
    @click="$emit('choose-type', type.id)"
  />
</template>

<script>/**
 * @module VariationColorTypeItem
 */
import { ProductVariationTypeItem } from '@/mixins/core/variations/ProductVariationTypeItemMixin'

export default {
  name: 'VariationColorTypeItem',
  mixins: [ProductVariationTypeItem]
}
</script>
