<template>
  <div class="VariationTitle mb-4">
    {{ name }}: <span class="font-bold">{{ value }}</span>
  </div>
</template>

<script>
/**
 * @module VariationTitle
 */
export default {
  name: 'VariationTitle',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
