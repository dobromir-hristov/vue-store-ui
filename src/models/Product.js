/**
 * @typedef {{ id: string, name: string, type: ['size','color','generic'], variations: ProductVariation }} ProductVariationCategory
 */

/**
 * @typedef {{ id: string, name: string, value: * }} ProductVariation
 */

/**
 * A simple made up Product model.
 * Using JSDoc to annotate, but it would probably be better to use TS.
 * @class Product
 */
export class Product {
  constructor (product) {
    /** @type {string} */
    this.id = product.id
    /** @type {string} */
    this.name = product.name
    /** @type {string} */
    this.sku = product.sku
    /** @type {number} */
    this.price = product.price
    /** @type {string} */
    this.currency = product.currency
    /** @type {ProductVariationCategory[]} */
    this.variations = product.variations
    /** @type {{ id:string, name:string, parent_id: string }[]} */
    this.categories = product.categories
    /** @type {string[]} */
    this.gallery = product.gallery
    /** @type {string} */
    this.description = product.description
    /** @type {{ type:string, values: string[] }[]} */
    this.attributes = product.attributes
  }
}
