import { ApiService } from './ApiService'
import { galleryFactory } from '@/factories/galleryFactory'

const GET_PRODUCT_ENDPOINT = '/products'

export const ProductService = {
  async fetchProduct (productId) {
    await ApiService.get(`${GET_PRODUCT_ENDPOINT}/${productId}`)
    return {
      id: 'some-random-id',
      name: 'Radiant Tee',
      sku: 'radiant-tee',
      price: 22.50,
      currency: 'USD',
      description: `<p>So light and comfy, you'll love the Radiant Tee's organic fabric, feel, performance and style. You may never want to stop moving in this shirt.</p>
<p>• Salmon soft scoop neck tee.<br>• Athletic, semi-form fit.<br>• Flat seams prevent chafing.<br>• 67% Organic Cotton / 28% Hemp / 5% Spandex.</p>`,
      attributes: [
        { type: 'material', values: ['Hemp', 'Organic Cotton', 'Spandex'] },
        { type: 'style', values: ['Tee'] },
        { type: 'climate', values: ['Indoor', 'Warm'] },
        { type: 'pattern', values: ['Solid'] }
      ],
      variations: [{
        id: 'color',
        type: 'color',
        name: 'Color',
        variations: [
          { id: 'blue', name: 'Blue', value: 'blue' },
          { id: 'purple', name: 'Purple', value: 'purple' },
          { id: 'orange', name: 'Orange', value: 'orange' }
        ]
      }, {
        id: 'size',
        type: 'size',
        name: 'Size',
        variations: [
          { id: 'm', name: 'Medium', value: 'm' },
          { id: 'l', name: 'Large', value: 'l' },
          { id: 'xl', name: 'XLarge', value: 'xl' }
        ]
      }
      ],
      categories: [
        { id: '2', name: 'Default Category' },
        { id: '3', name: 'Women' },
        { id: '4', name: 'Tops' },
        { id: '5', name: 'Tees' }
      ],
      gallery: galleryFactory()
    }
  }
}
