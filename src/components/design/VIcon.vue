<template>
  <i :class="computedClasses"/>
</template>

<script>
/**
 * @module VIcon
 */
export default {
  name: 'VIcon',
  props: {
    iconType: {
      type: String,
      default: 'solid'
    },
    type: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ''
    },
    even: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    computedClasses () {
      // super naive hehe
      const style = `fa${this.iconType[0]}`
      const size = { [`fa-${this.size}`]: this.size }
      const even = { 'fa-fw': this.even }
      return [`fa-${this.type}`, style, size, even]
    }
  }
}
</script>
