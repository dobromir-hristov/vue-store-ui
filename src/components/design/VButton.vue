<template>
  <button
    :class="[`v-button--${color}`, { 'is-outlined': outlined }]"
    class="v-button"
  >
    <slot/>
  </button>
</template>

<script>
/**
 * @module Button
 */
export default {
  name: 'VButton',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    outlined: {
      type: Boolean,
      default: false
    }
  }
}
</script>
