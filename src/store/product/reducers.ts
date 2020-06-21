import { ProductState, SEND_PRODUCT, ProductActionTypes } from './types';

const initItems = [{ id: 1, title: 'Чизбургер-пицца', image: 'test' }];
const initialState: ProductState = {
  items: initItems,
};

export function productReducer(
  state = initialState,
  action: ProductActionTypes
): ProductState {
  switch (action.type) {
    case SEND_PRODUCT:
      return {
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
