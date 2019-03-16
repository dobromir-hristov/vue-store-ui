<template>
  <div class="TheHeader absolute pin-t pin-l pin-r border-b border-grey-light border-solid">
    <div class="container px-4 flex justify-between mx-auto items-center">
      <div class="TheHeader__left">
        <v-button
          square
          data-testid="GoBackButton"
          @click="$router.go(-1)"
        >
          <v-icon type="arrow-left"/>
        </v-button>
      </div>
      <div class="TheHeader__center">
        <router-link
          to="/"
          data-testid="LogoHomeButton"
        >
          <v-button square>
            <v-icon type="cash-register"/>
          </v-button>
        </router-link>
      </div>
      <div class="TheHeader__right">
        <!-- These will be just dummy for now, except for the cart -->
        <the-header-navigation/>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderNavigation from './TheHeaderNavigation'

/**
 * A very naive navigation implementation
 * @module TheHeader
 */
export default {
  name: 'TheHeader',
  components: { TheHeaderNavigation },
  data () {
    return {}
  }
}
</script>

<style lang='scss'>

</style>
