import { mapGetters, mapActions } from 'vuex'

export const ProductMixin = {
  computed: {
    ...mapGetters('product', ['product', 'productLoaded'])
  },
  mounted () {
    this.fetchProduct()
  },
  methods: {
    ...mapActions('product', ['fetchProduct'])
  }
}
