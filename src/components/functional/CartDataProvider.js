import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CartDataProvider',
  computed: {
    ...mapGetters('cart', ['itemsInCartCount', 'itemsInCart'])
  },
  methods: {
    ...mapActions('cart', ['removeItem'])
  },
  render () {
    return this.$scopedSlots.default({
      itemsInCartCount: this.itemsInCartCount,
      itemsInCart: this.itemsInCart,
      removeItem: this.removeItem
    })
  }
}
