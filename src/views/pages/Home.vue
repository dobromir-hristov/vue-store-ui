<template>
  <div class="home flex flex-col">
    <router-link
      :to="{ name:'kitchen-sink' }"
      class="no-underline text-grey-dark mb-4"
    >
      Kitchen Sink
    </router-link>
    <router-link
      :to="{ name:'product', params: { productId: 'some_id' } }"
      class="no-underline text-grey-dark mb-4"
    >
      Product
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
