<template>
  <div class="ProductGallery">
    <carousel
      :per-page="1"
      :navigate-to="syncSlideWithVariations"
    >
      <slide
        v-for="galleryItem in gallery"
        :key="galleryItem.src"
      >
        <img :src="galleryItem.src">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { ProductGallery } from '@/components/functional/ProductGallery'

/**
 * Naive product gallery
 * @module ProductGallery
 */
export default {
  name: 'ProductGallery',
  mixins: [ProductGallery]
}
</script>
