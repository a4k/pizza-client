export interface Category {
  id: number;
  title: string;
  children?: Category[];
  timestamp: number;
}
export interface CategorySort {
  id: number;
  title: string;
}

export interface CategoriesState {
  categories: Category[];
  categorySortItems: CategorySort[];
}

export const SEND_CATEGORY = 'SEND_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

interface SendCategoryAction {
  type: typeof SEND_CATEGORY;
  payload: Category;
}

interface DeleteCategoryAction {
  type: typeof DELETE_CATEGORY;
  meta: {
    timestamp: number;
  };
}

export type CategoriesActionTypes = SendCategoryAction | DeleteCategoryAction;