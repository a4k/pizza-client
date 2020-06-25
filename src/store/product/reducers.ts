import {
  ProductState,
  SEND_PRODUCT,
  ProductActionTypes,
  RECEIVE_PRODUCTS,
} from './types';

const initItems = [
  {
    id: 1,
    title: 'Чизбургер-пицца',
    image: 'test',
    description:
      'Бекон, сыры чеддер и пармезан, моцарелла, томаты черри, лук, чеснок, сливочный соус, итальянские травы',
    size: [
      { id: 1, title: '26 см.', size: 26, price: 395 },
      { id: 2, title: '30 см.', size: 30, price: 450 },
      { id: 3, title: '40 см.', size: 40, price: 555 },
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
