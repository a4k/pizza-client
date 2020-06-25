import {
  ProductState,
  SEND_PRODUCT,
  ProductActionTypes,
  RECEIVE_PRODUCTS,
} from './types';

const initItems = [
  {
    id: 1,
    title: 'Chicken Club',
    description:
      'Grilled chicken, cherry tomatoes, ricotta, fresh parsley, mozzarella, bacon, red onions',
    size: [
      {
        id: 1,
        title: '10"',
        size: 10,
        price: 13,
        image:
          'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/Pizza/en-US/146946a5-b2b4-4054-a697-c07c02eb5740.jpg',
      },
      {
        id: 2,
        title: '12"',
        size: 12,
        price: 15,
        image:
          'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/Pizza/en-US/91c47562-2f54-4dfc-8248-2a9c64aeb34c.jpg',
      },
      {
        id: 3,
        title: '14"',
        size: 14,
        price: 17,
        image:
          'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/Pizza/en-US/bcb198e7-81e5-4e8d-85d4-6cd01684585f.jpg',
      },
    ],
  },
];
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
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        items: action.products,
      };
    default:
      return state;
  }
}
