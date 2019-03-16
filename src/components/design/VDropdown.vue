<template>
  <div
    v-clickaway="close"
    class="VDropdown"
  >
    <slot
      name="trigger"
      :toggleVisibility="toggleVisibility"
    />
    <div
      v-if="isVisible"
      class="VDropdown__dropdown"
    >
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-clickaway'

/**
 * Super basic dropdown. Would use popper.js or something more serious...
 * @module VDropdown
 */
export default {
  name: 'VDropdown',
  directives: { Clickaway: directive },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleVisibility () {
      this.isVisible = !this.isVisible
    },
    close () {
      this.isVisible = false
    }
  }
}
</script>
