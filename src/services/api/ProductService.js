import { ApiService } from './ApiService'
import { productFactory } from '@/factories/productFactory'

const GET_PRODUCT_ENDPOINT = '/products'

export const ProductService = {
  async fetchProduct (productId) {
    await ApiService.get(`${GET_PRODUCT_ENDPOINT}/${productId}`)
    return productFactory()
  }
}
