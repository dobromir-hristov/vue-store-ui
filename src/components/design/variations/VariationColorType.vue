<template>
  <div class="VariationColorType">
    <variation-title
      :name="variation.name"
      :value="chosenVariation"
    />
    <div class="flex">
      <div
        v-for="type in variation.types"
        :key="type.id"
        class="mr-2"
      >
        <variation-color-type-item
          :type="type"
          :variation="variation"
          @choose-type="chooseVariationType"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ProductVariation } from '@/mixins/core/variations/ProductVariationMixin'
import VariationColorTypeItem from '@/components/design/variations/VariationColorTypeItem'

/**
 * @module VariationColorType
 */
export default {
  name: 'VariationColorType',
  components: { VariationColorTypeItem },
  mixins: [ProductVariation]
}
</script>
