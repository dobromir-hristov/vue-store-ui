/**
 * @class Product
 */
export class Product {
  constructor (product) {
    this.id = product.id
    this.name = product.name
    this.quantity = product.quantity || 1
  }
}
