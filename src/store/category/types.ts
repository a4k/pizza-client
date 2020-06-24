export interface Category {
  id: number;
  title: string;
}

export interface CategoriesState {
  items: Category[];
}

export const SEND_CATEGORY = 'SEND_CATEGORY';

interface SendCategoryAction {
  type: typeof SEND_CATEGORY;
  payload: Category;
}

export type CategoriesActionTypes = SendCategoryAction;
