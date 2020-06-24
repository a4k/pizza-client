import { Category, SEND_CATEGORY } from './types';

export function sendCategory(newCategory: Category) {
  return {
    type: SEND_CATEGORY,
    payload: newCategory,
  };
}
