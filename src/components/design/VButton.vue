<template>
  <button
    :class="computedClasses"
    class="v-button"
    v-on="$listeners"
  >
    <span class="v-button__text">
      <slot/>
    </span>
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
    square: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    loading: {
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
        { [`v-button--size-${this.size}`]: this.size },
        { 'is-loading': this.loading },
        { 'is-square': this.square }
      ]
    }
  }
}
</script>
