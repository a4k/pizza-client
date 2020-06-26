export interface Category {
  id: number;
  title: string;
  code: string;
}

export interface CategoriesState {
  data: Category[];
  loading: boolean;
  errors?: string;
}

export const CATEGORY_FETCH_REQUEST = 'CATEGORY_FETCH_REQUEST';
export const CATEGORY_FETCH_SUCCESS = 'CATEGORY_FETCH_SUCCESS';
export const CATEGORY_FETCH_ERROR = 'CATEGORY_FETCH_ERROR';

interface CategoryFetchRequestAction {
  type: typeof CATEGORY_FETCH_REQUEST;
}
interface CategoryFetchSuccessAction {
  type: typeof CATEGORY_FETCH_SUCCESS;
  payload: Category[];
}
interface CategoryFetchErrorAction {
  type: typeof CATEGORY_FETCH_ERROR;
  payload: string;
}

export type CategoryActionTypes =
  | CategoryFetchRequestAction
  | CategoryFetchSuccessAction
  | CategoryFetchErrorAction;
