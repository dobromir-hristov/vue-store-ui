<template>
  <v-button
    class="VariationSizeTypeItem VariationType--size"
    :outlined="!isActive"
    size="small"
    :title="type.name"
    @click="$emit('choose-type', type.id)"
  >
    {{ type.name }}
  </v-button>
</template>

<script>
import { ProductVariationTypeItem } from '@/mixins/core/variations/ProductVariationTypeItemMixin'

/**
 * Renders a size picker
 * @module VariationSizeTypeItem
 */
export default {
  name: 'VariationSizeTypeItem',
  mixins: [ProductVariationTypeItem]
}
</script>
