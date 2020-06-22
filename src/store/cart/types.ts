import { Product, ProductSize } from '../product/types';

export interface CartProduct {
  product: number;
  quantity: number;
  size: number;
  price: number;
}

export interface CartState {
  items: CartProduct[];
}

export const SEND_CART_PRODUCT = 'SEND_CART_PRODUCT';

interface SendCartProductAction {
  type: typeof SEND_CART_PRODUCT;
  product: number;
  size: number;
  price: number;
}

export type CartActionTypes = SendCartProductAction;
