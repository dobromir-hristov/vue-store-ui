export class ProductForm {
  /**
   * @param product
   */
  constructor (product) {
    this.id = product.id
    this.sku = product.sku
    this.name = product.name
    this.price = product.price
    this.variations = this.transformVariations(product)
    // this.variations = {
    //   color: 'blue',
    //   size: 'xl'
    // }
  }

  /**
   * Returns a map of the variation id and the id of it's first type
   * @param product
   * @return {Object.<string, string>}
   */
  transformVariations (product) {
    return product.variations.reduce((all, current) => {
      all[current.id] = current.types[0].id
      return all
    }, {})
  }
}
