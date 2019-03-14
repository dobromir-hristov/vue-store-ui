<template>
  <div class="KitchenSink">
    <section>
      <v-title size="3">Buttons</v-title>
      <div class="example-list">
        <v-button color="primary">Primary</v-button>
        <v-button color="secondary">Secondary</v-button>
        <v-button color="success">Success</v-button>
        <v-button color="error">Error</v-button>
      </div>
    </section>
    <section>
      <v-title size="3">Outlined Buttons</v-title>
      <div class="example-list">
        <v-button outlined color="primary">Primary</v-button>
        <v-button outlined color="secondary">Secondary</v-button>
        <v-button outlined color="success">Success</v-button>
        <v-button outlined color="error">Error</v-button>
      </div>
    </section>
  </div>
</template>

<script>
/**
 * @module KitchenSink
 */
export default {
  name: 'KitchenSink',
  data () {
    return {}
  }
}
</script>

<style rel='stylesheet/scss' lang='scss'>
.example-list {
  display: flex;

  & > * {
    margin-left: .5rem;
  }
}
</style>
