export interface ProductSort {
  key: string;
  value: string;
}

export interface ProductSortState {
  items: ProductSort[];
  activeItem: ProductSort;
}

export const SEND_PRODUCT_SORT = 'SEND_PRODUCT_SORT';
export const SELECT_PRODUCT_SORT = 'SELECT_PRODUCT_SORT';

interface SendProductSortAction {
  type: typeof SEND_PRODUCT_SORT;
  payload: ProductSort;
}
interface SelectProductSortAction {
  type: typeof SELECT_PRODUCT_SORT;
  payload: ProductSort;
}

export type ProductSortActionTypes = SendProductSortAction | SelectProductSortAction;
