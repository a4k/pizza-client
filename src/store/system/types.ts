export interface CurrencyModel {
  name: string;
  value: string;
}

// Describing the shape of the system's slice of state
export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
  defaultCurrency: string;
  currency: CurrencyModel[];
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}
interface UpdateCurrencyAction {
  type: typeof UPDATE_CURRENCY;
  payload: string;
}

export type SystemActionTypes = UpdateSessionAction | UpdateCurrencyAction;
