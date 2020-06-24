import { ProductSize } from '../product/types';

export interface CartProduct {
  product: number;
  size: number;
  price: number;
}

export interface CartProductItem {
  id: number;
  title: string;
  description: string;
  image: string;
  size: ProductSize;
  quantity: number;
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
