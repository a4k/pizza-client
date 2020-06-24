export interface ProductSort {
  key: string;
  value: string;
}

export interface ProductSortState {
  items: ProductSort[];
}

export const SEND_PRODUCT_SORT = 'SEND_PRODUCT_SORT';

interface SendProductSortAction {
  type: typeof SEND_PRODUCT_SORT;
  payload: ProductSort;
}

export type ProductSortActionTypes = SendProductSortAction;
