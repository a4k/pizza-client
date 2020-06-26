import {
  CATEGORY_FETCH_ERROR,
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCESS,
  CategoriesState,
  CategoryActionTypes,
} from './types';

const initialState: CategoriesState = {
  data: [],
  loading: false,
  errors: undefined,
};

export function categoryReducer(
  state = initialState,
  action: CategoryActionTypes
): CategoriesState {
  switch (action.type) {
    case CATEGORY_FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case CATEGORY_FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case CATEGORY_FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default:
      return state;
  }
}
