import {
  CategoriesState,
  SEND_CATEGORY,
  SELECT_CATEGORY,
  CategoriesActionTypes,
} from './types';

const initialState: CategoriesState = {
  items: [],
  activeCategory: { id: 0, title: '', timestamp: 0 },
};

export function categoryReducer(
  state = initialState,
  action: CategoriesActionTypes
): CategoriesState {
  switch (action.type) {
    case SEND_CATEGORY:
      return {
        items: [...state.items, action.payload],
        activeCategory: state.activeCategory,
      };
    case SELECT_CATEGORY:
      return {
        items: state.items,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
}
