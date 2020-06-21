import { ProductSort, SEND_PRODUCT_SORT, SELECT_PRODUCT_SORT } from './types';

export function sendProductSort(newProductSort: ProductSort) {
  return {
    type: SEND_PRODUCT_SORT,
    payload: newProductSort,
  };
}

export function selectProductSort(activeProductSort: ProductSort) {
  return {
    type: SELECT_PRODUCT_SORT,
    payload: activeProductSort,
  };
}
