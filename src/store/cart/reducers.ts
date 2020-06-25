import {
  CartState,
  ADD_TO_CART,
  CartActionTypes,
  CHANGE_QUANTITY,
  EMPTY_CART,
} from './types';

const initItems = [
  {
    product: 1,
    size: 1,
    quantity: 1,
  },
];
const initialState: CartState = {
  items: initItems,
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_TO_CART:
      if (
        state.items.find(
          item =>
            item.product === action.payload.product &&
            item.size === action.payload.size
        )
      ) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product === action.payload.product &&
            item.size === action.payload.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: state.items.concat([
          {
            product: action.payload.product,
            size: action.payload.size,
            quantity: 1,
          },
        ]),
      };
    case EMPTY_CART:
      return {
        ...state,
        items: [],
      };
    case CHANGE_QUANTITY:
      if (
        state.items.find(
          item =>
            item.product === action.payload.product &&
            item.size === action.payload.size
        ) &&
        action.payload.quantity > 0
      ) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product === action.payload.product &&
            item.size === action.payload.size
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      }
      if (
        state.items.find(
          item =>
            item.product === action.payload.product &&
            item.size === action.payload.size
        )
      ) {
        return {
          ...state,
          items: state.items.filter(
            item =>
              item !==
              state.items.find(
                itemFind =>
                  itemFind.product === action.payload.product &&
                  itemFind.size === action.payload.size
              )
          ),
        };
      }
      return state;
    default:
      return state;
  }
}
