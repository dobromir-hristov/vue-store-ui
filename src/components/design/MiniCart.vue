<template>
  <div class="MiniCart">
    <div v-if="items.length">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex justify-between items-center"
        data-testid="MiniCartItem"
      >
        <div>
          <a
            class="text-red"
            data-testid="removeItem"
            @click="$emit('remove', item.id)"
          >
            <v-icon
              type="times"
              size="xs"
            />
          </a>
          {{ item.name }}
        </div>
        <div>
          <v-icon type="times"/>
          {{ item.quantity }}
        </div>
      </div>
    </div>
    <div
      v-else
      data-testid="NoCartItems"
    >
      No items in cart yet
    </div>
  </div>
</template>

<script>
/**
 * @module MiniCart
 */
export default {
  name: 'MiniCart',
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
