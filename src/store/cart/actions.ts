import { ADD_PRODUCT_TO_CART } from './types';

export function addProductToCart(product: number, size: number, price: number) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
    size,
    price,
  };
}
