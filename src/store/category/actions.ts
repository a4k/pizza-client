import { Category, SEND_CATEGORY, DELETE_CATEGORY } from './types';

export function sendCategory(newCategory: Category) {
  return {
    type: SEND_CATEGORY,
    payload: newCategory,
  };
}

export function deleteCategory(timestamp: number) {
  return {
    type: DELETE_CATEGORY,
    meta: {
      timestamp,
    },
  };
}
