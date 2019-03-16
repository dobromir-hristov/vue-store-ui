import VButton from './VButton'
import flushPromises from 'flush-promises'
import NewsletterSubscribeButton from './NewsletterSubscribeButton'
import { NewsletterService } from '@/services/api/NewsletterService'

jest.mock('@/services/api/NewsletterService')

/**
 * @param overrides
 * @param storeOverrides
 * @returns {{config, wrapper: Wrapper<V> | Wrapper<Vue> | *}}
 */
const createWrapper = (overrides, storeOverrides) => {
  const store = {
    user: {
      getters: {
        userId: () => 1,
        isLoggedIn: () => true
      }
    }
  }

  let config = _merge(createComponentMocks({
    store: _merge(store, storeOverrides)
  }), overrides)
  const wrapper = mount(NewsletterSubscribeButton, config)
  return {
    config,
    wrapper
  }
}

describe('NewsletterSubscribeButton', () => {
  it('renders the NewsletterSubscribeButton', () => {
    const { wrapper } = createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('disables if logged out', () => {
    const { wrapper } = createWrapper({}, {
      user: {
        getters: {
          isLoggedIn: () => false
        }
      }
    })
    expect(wrapper.find('button').attributes('disabled')).toBeTruthy()
  })

  it('toggles the user subscription', async () => {
    const { wrapper } = createWrapper()
    expect(wrapper.text()).toContain('Subscribe')
    wrapper.find(VButton).trigger('click')
    expect(wrapper.find(VButton).props('loading')).toBe(true)
    await flushPromises()

    expect(NewsletterService.subscribe).toHaveBeenCalledTimes(1)
    expect(wrapper.text()).toContain('Unsubscribe')
    wrapper.find(VButton).trigger('click')
    await flushPromises()
    expect(NewsletterService.unsubscribe).toHaveBeenCalledTimes(1)
    expect(wrapper.text()).toContain('Subscribe')
  })
})
