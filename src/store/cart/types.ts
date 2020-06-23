export interface CartProduct {
  product: number;
  size: number;
  price: number;
}

export interface CartState {
  items: CartProduct[];
}

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

interface AddProductToCartAction {
  type: typeof ADD_PRODUCT_TO_CART;
  product: number;
  size: number;
  price: number;
}

export type CartActionTypes = AddProductToCartAction;
