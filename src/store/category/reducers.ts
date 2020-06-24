import { CategoriesState, SEND_CATEGORY, CategoriesActionTypes } from './types';

const initialState: CategoriesState = {
  items: [],
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
