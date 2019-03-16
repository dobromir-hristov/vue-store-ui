import { mapGetters } from 'vuex'
import { NewsletterService } from '@/services/api/NewsletterService'

/**
 * An example of a renderless provider component
 * Provides all functionality for subscribing to a newsletter
 * @module NewsletterSubscribeProvider
 */
export default {
  name: 'NewsletterSubscribeProvider',
  props: {
    newsletterId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      isSubscribed: false
    }
  },
  computed: {
    ...mapGetters('user', ['userId', 'isLoggedIn'])
  },
  methods: {
    async subscribe () {
      if (!this.isLoggedIn) return
      this.loading = true
      try {
        await NewsletterService.subscribe(this.userId, this.newsletterId)
        this.isSubscribed = true
      } catch (err) {
        this.$handleErrors(err)
      } finally {
        this.loading = false
      }
    },
    async unsubscribe () {
      if (!this.isLoggedIn) return
      this.loading = true
      try {
        await NewsletterService.unsubscribe(this.userId, this.newsletterId)
        this.isSubscribed = false
      } catch (err) {
        this.$handleErrors(err)
      } finally {
        this.loading = false
      }
    },
    async toggleSubscription () {
      if (this.isSubscribed) {
        return this.unsubscribe()
      }
      return this.subscribe()
    }
  },
  render () {
    return this.$scopedSlots.default({
      subscribe: this.subscribe,
      unsubscribe: this.unsubscribe,
      toggleSubscription: this.toggleSubscription,
      loading: this.loading,
      disabled: !this.isLoggedIn,
      isSubscribed: this.isSubscribed
    })
  }
}
