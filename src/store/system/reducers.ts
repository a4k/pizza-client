import {
  UPDATE_SESSION,
  SystemState,
  SystemActionTypes,
  UPDATE_CURRENCY,
} from './types';

const initialState: SystemState = {
  loggedIn: false,
  session: '',
  userName: '',
  defaultCurrency: 'dollar',
  currency: [{ name: 'dollar', value: '$' }, { name: 'euro', value: '€' }],
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case UPDATE_CURRENCY: {
      return {
        ...state,
        defaultCurrency: action.payload,
      };
    }
    default:
      return state;
  }
}
