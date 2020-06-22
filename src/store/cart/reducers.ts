import { CartState, SEND_CART_PRODUCT, CartActionTypes } from './types';

const initItems = [
  {
    quantity: 1,
    product: 1,
    size: 1,
    price: 395,
  },
];
const initialState: CartState = {
  items: initItems,
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  let isFound = false;
  switch (action.type) {
    case SEND_CART_PRODUCT:
      return {
        items: Object.assign(
          [],
          state.items.map(item => {
            if (item.product === action.product && item.size === action.size) {
              item.quantity += 1;
              isFound = true;
            }
            return item;
          }),
          isFound ? action : false
        ),
      };
    default:
      return state;
  }
}
