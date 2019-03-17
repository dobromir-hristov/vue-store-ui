<template>
  <div class="ProductBreadcrumbs flex mb-4">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="ProductBreadcrumb mr-2 flex text-grey"
    >
      <product-breadcrumbs-item
        :is-first="index === 0"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { ProductBreadcrumbs } from '@/components/functional/ProductBreadcrumbs'

/**
 * Minimalistic breadcrumbs navigation
 * @module ProductBreadcrumbs
 */
export default {
  name: 'ProductBreadcrumbs',
  mixins: [ProductBreadcrumbs]
}
</script>
