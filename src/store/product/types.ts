export interface ProductFilter {
  title: string;
  level: number;
  price: number;
  children: ProductFilter[];
}

export interface Product {
  id: number;
  title: string;
  image: string;
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
