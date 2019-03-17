import ProductBreadcrumbsItem from '@/components/design/ProductBreadcrumbsItem'

export const ProductBreadcrumbs = {
  components: { ProductBreadcrumbsItem },
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
