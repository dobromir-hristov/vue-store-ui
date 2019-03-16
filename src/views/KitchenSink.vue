<template>
  <div class="KitchenSink">
    <section>
      <v-title size="3">
        Buttons
      </v-title>
      <div class="example-list">
        <v-button
          color="primary"
          size="small"
        >
          Primary
        </v-button>
        <v-button
          color="secondary"
          size="medium"
        >
          Secondary
        </v-button>
        <v-button
          color="success"
          size="large"
        >
          Success
        </v-button>
        <v-button
          color="error"
          size="xlarge"
        >
          Error
        </v-button>
      </div>
    </section>
    <section>
      <v-title size="3">
        Outlined Buttons
      </v-title>
      <div class="example-list">
        <v-button
          outlined
          color="primary"
          size="small"
        >
          Primary
        </v-button>
        <v-button
          outlined
          color="secondary"
          size="medium"
        >
          Secondary
        </v-button>
        <v-button
          outlined
          color="success"
          size="large"
        >
          Success
        </v-button>
        <v-button
          outlined
          color="error"
          size="xlarge"
        >
          Error
        </v-button>
      </div>
    </section>
    <section>
      <v-title size="3">
        Active Buttons
      </v-title>
      <p class="text-muted">
        Active takes over outlined buttons
      </p>
      <div class="example-list">
        <v-button
          color="primary"
          active
          size="small"
        >
          Primary
        </v-button>
        <v-button
          color="secondary"
          active
          size="medium"
        >
          Secondary
        </v-button>
        <v-button
          outlined
          color="success"
          active
          size="large"
        >
          Success
        </v-button>
        <v-button
          outlined
          color="error"
          active
          size="xlarge"
        >
          Error
        </v-button>
      </div>
    </section>
    <section>
      <v-title size="3">
        Square Buttons
      </v-title>
      <div class="example-list">
        <v-button
          color="primary"
          square
          size="small"
        >
          <v-icon type="user"/>
        </v-button>
        <v-button
          color="secondary"
          square
          size="medium"
        >
          <v-icon type="user"/>
        </v-button>
        <v-button
          outlined
          color="success"
          square
          size="large"
        >
          <v-icon type="user"/>
        </v-button>
        <v-button
          outlined
          color="error"
          square
          size="xlarge"
        >
          <v-icon type="user"/>
        </v-button>
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
  align-items: center;

  & > * {
    margin-left: .5rem;
  }
}
</style>
