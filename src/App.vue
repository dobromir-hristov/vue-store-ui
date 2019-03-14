<template>
  <div id="app">
    <!-- We could later add layout switcher on a per page basis -->
    <general-layout>
      <router-view/>
    </general-layout>
  </div>
</template>

<script>
import GeneralLayout from './views/layouts/GeneralLayout'

export default {
  components: { GeneralLayout }
}
</script>
<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
