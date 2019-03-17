<template functional>
  <div class="ProductBreadcrumbsItem">
    <router-link
      :to="{ name: 'category', params: { id: props.item.id } }"
      :class="{ 'ml-0': props.isFirst }"
      class="mr-2 text-grey-dark"
    >
      {{ props.item.name }}
    </router-link>
    /
  </div>
</template>

<script>
/**
 * @module ProductBreadcrumbsItem
 */
export default {
  name: 'ProductBreadcrumbsItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    isFirst: {
      type: Boolean,
      default: false
    }
  }
}
</script>
