<template>
  <a
    class="VariationDefaultTypeItem VariationType--default flex items-center"
    :class="{ 'text-teal': isActive }"
    :title="type.name"
    @click="$emit('choose-type', type.id)"
  >
    <v-icon type="circle" size="xs" class="mr-2"/>
    {{ type.name }}
  </a>
</template>

<script>
import { ProductVariationTypeItem } from '@/mixins/core/variations/ProductVariationTypeItemMixin'

/**
 * @module VariationDefaultTypeItem
 */
export default {
  name: 'VariationDefaultTypeItem',
  mixins: [ProductVariationTypeItem]
}
</script>
