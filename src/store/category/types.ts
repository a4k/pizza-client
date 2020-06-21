export interface Category {
  id: number;
  title: string;
  timestamp: number;
}

export interface CategoriesState {
  items: Category[];
  activeCategory: Category;
}

export const SEND_CATEGORY = 'SEND_CATEGORY';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

interface SendCategoryAction {
  type: typeof SEND_CATEGORY;
  payload: Category;
}
interface SelectCategoryAction {
  type: typeof SELECT_CATEGORY;
  payload: Category;
}

export type CategoriesActionTypes = SendCategoryAction | SelectCategoryAction;
