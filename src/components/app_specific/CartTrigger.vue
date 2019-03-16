<template>
  <cart-data-provider v-slot="{ itemsInCartCount, itemsInCart, removeItem }">
    <div>
      <v-dropdown>
        <template v-slot:trigger="{ toggleVisibility }">
          <a @click.prevent="toggleVisibility">
            <v-icon
              type="shopping-cart"
              size="lg"
            />
            {{ itemsInCartCount }}
          </a>
        </template>
        <template v-slot:content>
          <mini-cart
            :items="itemsInCart"
            @remove="removeItem"
          />
        </template>
      </v-dropdown>
    </div>
  </cart-data-provider>
</template>

<script>
import CartDataProvider from '@/components/functional/CartDataProvider'
import MiniCart from '../design/MiniCart'

/**
 * Shows the number of items in the cart and opens the cart dropdown
 * @module CartTrigger
 */
export default {
  name: 'CartTrigger',
  components: { MiniCart, CartDataProvider }
}
</script>
