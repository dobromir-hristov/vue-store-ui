<template>
  <div class="flex flex-col flex-1">
    <the-header/>
    <div class="GeneralLayout container px-4 mx-auto flex-1 mt-16">
      <slot/>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheFooter from '@/components/app_specific/TheFooter'
import TheHeader from '@/components/app_specific/TheHeader'

/**
 * Generic layout with nav and footer
 * @module GeneralLayout
 */
export default {
  name: 'GeneralLayout',
  components: { TheHeader, TheFooter }
}
</script>
