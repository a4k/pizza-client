export interface ProductSize {
  id: number;
  title: string;
  size: number;
  price: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  size: ProductSize[];
}

export interface ProductState {
  items: Product[];
}

export const SEND_PRODUCT = 'SEND_PRODUCT';

interface SendProductAction {
  type: typeof SEND_PRODUCT;
  payload: Product;
}

export type ProductActionTypes = SendProductAction;
