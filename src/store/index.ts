import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { systemReducer } from './system/reducers';
import { categoryReducer } from './category/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  category: categoryReducer,
});

// eslint-disable-next-line no-undef
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
}
