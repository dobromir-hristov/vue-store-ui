<template>
  <div class="VariationDefaultType">
    <variation-title
      :name="variation.name"
      :value="chosenVariation"
    />
    <ul class="VariationDefaultTypeList">
      <li
        v-for="type in variation.types"
        :key="type.id"
        class="mb-2"
      >
        <variation-default-type-item
          :type="type"
          :variation="variation"
          @choose-type="chooseVariationType"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { ProductVariation } from '@/mixins/core/variations/ProductVariationMixin'
import VariationDefaultTypeItem from '@/components/design/variations/VariationDefaultTypeItem'

/**
 * @module VariationDefaultType
 */
export default {
  name: 'VariationDefaultType',
  components: { VariationDefaultTypeItem },
  mixins: [ProductVariation]
}
</script>
