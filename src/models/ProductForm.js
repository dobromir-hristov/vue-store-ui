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

  transformVariations (product) {
    return product.variations.map(variationCategory => {
      return {
        id: variationCategory.id,
        value: variationCategory.variations[0].id,
        price: variationCategory.price
      }
    })
  }
}
