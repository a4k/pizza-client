import { CategoriesState, SEND_CATEGORY, CategoriesActionTypes } from './types';

const initialState: CategoriesState = {
  items: [{ id: 0, title: 'All' }, { id: 1, title: 'Meat' }, { id: 2, title: 'Vegetarian' }],
};

export function categoryReducer(
  state = initialState,
  action: CategoriesActionTypes
): CategoriesState {
  switch (action.type) {
    case SEND_CATEGORY:
      return {
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
