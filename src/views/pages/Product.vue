<template>
  <div class="Product">
    <div
      v-if="!productLoaded"
      class="text-center"
    >
      Loading...
    </div>
    <div
      v-else
      class="columns"
    >
      <div class="column">
        <product-gallery :gallery="product.gallery"/>
      </div>
      <div class="column">
        <product-breadcrumbs :items="product.categories"/>
        <h3 class="text-3xl font-serif">{{ product.name }}</h3>
        <product-sku/>
        <product-price :product="product"/>
        <product-variations/>
        <product-quantity-picker/>
        <add-to-cart-button/>
        <div class="columns">
          <div class="column">
            <add-to-favorute :product="product"/>
          </div>
          <div class="column">
            <add-to-compare :product="product"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductMixin } from '@/mixins/core/ProductMixin'
import ProductGallery from '@/components/design/ProductGallery'

/**
 * @module page/Product
 */
export default {
  name: 'Product',
  components: { ProductGallery },
  mixins: [ProductMixin]
}
</script>

<style lang='scss'>

</style>
