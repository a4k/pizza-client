import { SystemState, UPDATE_CURRENCY, UPDATE_SESSION } from './types';

export function updateSession(newSession: SystemState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession,
  };
}
export function updateCurrency(newCurrency: string) {
  return {
    type: UPDATE_CURRENCY,
    payload: newCurrency,
  };
}
