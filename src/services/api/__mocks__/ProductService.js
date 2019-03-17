import { productFactory } from '@/factories/productFactory'

export const ProductService = {
  fetchProduct: jest.fn().mockResolvedValue(productFactory())
}
