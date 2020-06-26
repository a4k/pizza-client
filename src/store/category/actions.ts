import {
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_FETCH_ERROR,
  Category,
} from './types';

export function fetchCategoryRequest() {
  return {
    type: CATEGORY_FETCH_REQUEST,
  };
}
export function fetchCategorySuccess(data: Category[]) {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    payload: data,
  };
}
export function fetchCategoryError(message: string) {
  return {
    type: CATEGORY_FETCH_ERROR,
    payload: message,
  };
}
