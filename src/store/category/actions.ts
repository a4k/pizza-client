import { Category, SEND_CATEGORY, SELECT_CATEGORY } from './types';

export function sendCategory(newCategory: Category) {
  return {
    type: SEND_CATEGORY,
    payload: newCategory,
  };
}
export function selectCategory(newCategory: Category) {
  return {
    type: SELECT_CATEGORY,
    payload: newCategory,
  };
}
