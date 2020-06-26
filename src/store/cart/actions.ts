import { ADD_TO_CART, CHANGE_QUANTITY, EMPTY_CART, ORDER_CART } from './types';

export function addToCart(product: number, size: number) {
  return {
    type: ADD_TO_CART,
    payload: { product, size, quantity: 1 },
  };
}

export function emptyCart() {
  return {
    type: EMPTY_CART,
  };
}
export function orderCart() {
  return {
    type: ORDER_CART,
  };
}

export function changeQuantity(
  product: number,
  size: number,
  quantity: number
) {
  return {
    type: CHANGE_QUANTITY,
    payload: { product, size, quantity },
  };
}
