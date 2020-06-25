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
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

interface SendProductAction {
  type: typeof SEND_PRODUCT;
  payload: Product;
}
interface ReceiveProductsAction {
  type: typeof RECEIVE_PRODUCTS;
  products: Product[];
}

export type ProductActionTypes = SendProductAction | ReceiveProductsAction;
