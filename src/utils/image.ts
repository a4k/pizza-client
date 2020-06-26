import { API_URL } from '../config';

export function getImageUrl(url: string): string {
  return API_URL + url;
}
