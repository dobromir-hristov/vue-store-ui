<template>
  <component
    :is="tag"
    :class="`title--size-${size}`"
    class="title"
  >
    <slot/>
  </component>
</template>

<script>
/**
 * @module VTitle
 */
export default {
  name: 'VTitle',
  props: {
    size: {
      type: [Number, String],
      default: 3
    }
  },
  computed: {
    tag () {
      return `h${this.size}`
    }
  }
}
</script>
