import { CartState, ADD_PRODUCT_TO_CART, CartActionTypes } from './types';

const initItems = [
  {
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
    case ADD_PRODUCT_TO_CART:
      return {
        items: [
          ...state.items,
          {
            product: action.product,
            size: action.size,
            price: action.price,
          },
        ],
      };
    default:
      return state;
  }
}
