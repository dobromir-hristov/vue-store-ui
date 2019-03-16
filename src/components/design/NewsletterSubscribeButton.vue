<template>
  <newsletter-subscribe-provider
    v-slot="{ actions, loading, disabled, isSubscribed }"
    newsletter-id="main_newsletter"
  >
    <v-button
      :loading="loading"
      :disabled="disabled"
      size="large"
      type="alternative"
      outlined
      @click="actions.toggleSubscription"
    >
      <span v-if="isSubscribed">Unsubscribe</span>
      <span v-else>Subscribe</span>
    </v-button>
  </newsletter-subscribe-provider>
</template>

<script>
import NewsletterSubscribeProvider from '../functional/NewsletterSubscribeProvider'

/**
 * Displays a subscribe/unsub newsletter button
 * @see module:NewsletterSubscribeProvider
 * @module NewsletterSubscribeButton
 */
export default {
  name: 'NewsletterSubscribeButton',
  components: { NewsletterSubscribeProvider }
}
</script>
