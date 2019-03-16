import { ApiService } from './ApiService'

const SUBSCRIBE_ENDPOINT = '/newsletter/subscribe'
const UNSUBSCRIBE_ENDPOINT = '/newsletter/unsubscribe'

export const NewsletterService = {
  subscribe (userId, newsletterId) {
    return ApiService.post(SUBSCRIBE_ENDPOINT, { user_id: userId, newsletter_id: newsletterId })
  },
  unsubscribe (userId, newsletterId) {
    return ApiService.post(UNSUBSCRIBE_ENDPOINT, { user_id: userId, newsletter_id: newsletterId })
  }
}
