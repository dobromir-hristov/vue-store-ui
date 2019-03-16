<template>
  <button
    :class="computedClasses"
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
      default: 'primary' // we could add a color validator here
    },
    outlined: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '' // we could probably add a size validator here
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClasses () {
      return [
        `v-button--${this.color}`,
        { 'is-active': this.active },
        { 'is-outlined': this.outlined },
        { [`v-button--size-${this.size}`]: this.size }
      ]
    }
  }
}
</script>
