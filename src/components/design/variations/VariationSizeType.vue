<template>
  <div class="VariationSizeType">
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
        <variation-size-type-item
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
import VariationSizeTypeItem from '@/components/design/variations/VariationSizeTypeItem'

/**
 * @module VariationSizeType
 */
export default {
  name: 'VariationSizeType',
  components: { VariationSizeTypeItem },
  mixins: [ProductVariation]
}
</script>

<style lang='scss'>
</style>
