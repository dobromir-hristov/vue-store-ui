<template>
  <div class="TheHeaderNavigation">
    <div class="TheHeaderNavigation__item">
      <a>
        <v-icon
          type="search"
          size="lg"
        />
      </a>
    </div>
    <div class="TheHeaderNavigation__item">
      <v-icon
        type="heart"
        icon-type="regular"
        size="lg"
      />
    </div>
    <div class="TheHeaderNavigation__item">
      <cart-trigger/>
    </div>
    <!--<div class="TheHeaderNavigation__item">-->
      <!--<profile-trigger/>-->
    <!--</div>-->
  </div>
</template>

<script>
import CartTrigger from './CartTrigger'

/**
 * @module TheHeaderNavigation
 */
export default {
  name: 'TheHeaderNavigation',
  components: { CartTrigger }
}
</script>

<style lang="scss">
@import '@/assets/styles/theme/variables.scss';

.TheHeaderNavigation {
  display: flex;
  height: 100%;
  align-items: stretch;
}

.TheHeaderNavigation__item {
  display: flex;
  align-items: center;
  padding: $spacing-small $spacing-small/2;

  &:hover {
    background: $grey-color;
  }
}
</style>
