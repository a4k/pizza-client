import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_ERROR,
  Product,
} from './types';

export function fetchProductRequest() {
  return {
    type: PRODUCT_FETCH_REQUEST,
  };
}
export function fetchProductSuccess(data: Product[]) {
  return {
    type: PRODUCT_FETCH_SUCCESS,
    payload: data,
  };
}
export function fetchProductError(message: string) {
  return {
    type: PRODUCT_FETCH_ERROR,
    payload: message,
  };
}
