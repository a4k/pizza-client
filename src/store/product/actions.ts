import { Product, SEND_PRODUCT } from './types';

export function sendProduct(newProduct: Product) {
  return {
    type: SEND_PRODUCT,
    payload: newProduct,
  };
}
