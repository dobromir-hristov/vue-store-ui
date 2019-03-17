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

        <h3 class="text-4xl font-bold font-serif my-6">
          {{ product.name }}
        </h3>

        <product-sku/>
        <current-product-price
          class="my-6"
          :product="product"
        />
        <current-product-variations/>
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
import ProductSku from '@/components/design/ProductSku'
import ProductGallery from '@/components/design/ProductGallery'
import ProductBreadcrumbs from '@/components/design/ProductBreadcrumbs'
import CurrentProductPrice from '@/components/design/CurrentProductPrice'
import CurrentProductVariations from '@/components/design/CurrentProductVariations'
import ProductQuantityPicker from '@/components/design/ProductQuantityPicker'

/**
 * @module page/Product
 */
export default {
  name: 'Product',
  components: { ProductQuantityPicker, CurrentProductVariations, CurrentProductPrice, ProductSku, ProductBreadcrumbs, ProductGallery },
  mixins: [ProductMixin]
}
</script>
