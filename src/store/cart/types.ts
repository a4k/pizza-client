import { Product } from '../product/types';

export interface CartProduct {
  product: number;
  size: number;
  quantity: number;
}

export interface CartItemModel {
  cart: CartProduct;
  product: Product;
}

export interface CartState {
  items: CartProduct[];
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const ORDER_CART = 'ORDER_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

interface AddProductToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartProduct;
}
interface ChangeQuantityProductCartAction {
  type: typeof CHANGE_QUANTITY;
  payload: CartProduct;
}
interface EmptyCartAction {
  type: typeof EMPTY_CART;
}
interface OrderCartAction {
  type: typeof ORDER_CART;
}

export type CartActionTypes =
  | AddProductToCartAction
  | ChangeQuantityProductCartAction
  | EmptyCartAction
  | OrderCartAction;
