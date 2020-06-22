// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { systemReducer } from './system/reducers';
import { categoryReducer } from './category/reducers';
import { productSortReducer } from './product_sort/reducers';
import { productReducer } from './product/reducers';
import { cartReducer } from './cart/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  category: categoryReducer,
  productSort: productSortReducer,
  product: productReducer,
  cart: cartReducer,
});

// eslint-disable-next-line no-undef
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
}
