<template>
  <div class="TheFooter bg-grey-light py-4 text-gray">
    <div class="container px-4 mx-auto">
      <div class="flex items-center text-xl">
        <div>Subscribe to our Newsletter</div>
        <newsletter-subscribe-button class="ml-auto"/>
      </div>
    </div>
    <div class="separator border-b border-solid border-gray my-2"/>
    <div class="container px-4 mx-auto">
      Some links
    </div>
  </div>
</template>

<script>
import NewsletterSubscribeButton from '../design/NewsletterSubscribeButton'

/**
 * @module TheFooter
 */
export default {
  name: 'TheFooter',
  components: { NewsletterSubscribeButton },
  data () {
    return {}
  }
}
</script>
