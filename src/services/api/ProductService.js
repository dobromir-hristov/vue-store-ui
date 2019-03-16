import { ApiService } from './ApiService'

const GET_PRODUCT_ENDPOINT = '/products'

export const ProductService = {
  fetchProduct (productId) {
    return ApiService.get(`${GET_PRODUCT_ENDPOINT}/${productId}`)
  }
}
