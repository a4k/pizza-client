import {
  CategoriesState,
  SEND_CATEGORY,
  DELETE_CATEGORY,
  CategoriesActionTypes,
} from './types';

const initialState: CategoriesState = {
  categories: [],
  categorySortItems: [],
};

export function categoryReducer(
  state = initialState,
  action: CategoriesActionTypes
): CategoriesState {
  switch (action.type) {
    case SEND_CATEGORY:
      return {
        categories: [...state.categories, action.payload],
        categorySortItems: state.categorySortItems,
      };
    case DELETE_CATEGORY:
      return {
        categories: state.categories.filter(
          category => category.timestamp !== action.meta.timestamp
        ),
        categorySortItems: state.categorySortItems,
      };
    default:
      return state;
  }
}
