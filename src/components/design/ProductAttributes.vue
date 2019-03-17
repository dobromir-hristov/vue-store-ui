<template>
  <div class="ProductAttributes">
    <div
      v-for="attribute in attributes"
      :key="attribute.value"
      class="ProductAttribute mb-1"
    >
      <span class="font-bold">{{ attribute.type }}:</span> {{ attribute.values | commaList }}
    </div>
  </div>
</template>

<script>
/**
 * @module ProductAttributes
 */
export default {
  name: 'ProductAttributes',
  props: {
    attributes: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
