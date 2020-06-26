export interface ProductSize {
  id: number;
  title: string;
  size: number;
  price: number;
  image?: string;
}

export interface ProductCategory {
  id: number;
  title: string;
  code: string;
}

export interface Product {
  id: number;
  category: ProductCategory;
  title: string;
  description: string;
  size: ProductSize[];
}

export interface ProductState {
  data: Product[];
  loading: boolean;
  errors?: string;
}

export const PRODUCT_FETCH_REQUEST = 'PRODUCT_FETCH_REQUEST';
export const PRODUCT_FETCH_SUCCESS = 'PRODUCT_FETCH_SUCCESS';
export const PRODUCT_FETCH_ERROR = 'PRODUCT_FETCH_ERROR';

interface ProductFetchRequestAction {
  type: typeof PRODUCT_FETCH_REQUEST;
}
interface ProductFetchSuccessAction {
  type: typeof PRODUCT_FETCH_SUCCESS;
  payload: Product[];
}
interface ProductFetchErrorAction {
  type: typeof PRODUCT_FETCH_ERROR;
  payload: string;
}

export type ProductActionTypes =
  | ProductFetchRequestAction
  | ProductFetchSuccessAction
  | ProductFetchErrorAction;
