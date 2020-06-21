import {
  ProductSortState,
  SEND_PRODUCT_SORT,
  SELECT_PRODUCT_SORT,
  ProductSortActionTypes,
} from './types';

const initItems = [
  { key: 'popular', value: 'популярности' },
  { key: 'price', value: 'цене' },
  { key: 'name', value: 'алфавиту' },
];
const initialState: ProductSortState = {
  items: initItems,
  activeItem: initItems[0],
};

export function productSortReducer(
  state = initialState,
  action: ProductSortActionTypes
): ProductSortState {
  switch (action.type) {
    case SEND_PRODUCT_SORT:
      return {
        items: [...state.items, action.payload],
        activeItem: state.activeItem,
      };
    case SELECT_PRODUCT_SORT:
      return {
        items: state.items,
        activeItem: action.payload,
      };
    default:
      return state;
  }
}
