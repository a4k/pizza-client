import { SEND_CART_PRODUCT } from './types';

export function sendCartProduct(
  product: number,
  size: number,
  price: number
) {
  return {
    type: SEND_CART_PRODUCT,
    product,
    size,
    price,
  };
}
