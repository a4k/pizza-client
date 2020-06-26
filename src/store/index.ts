import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { all, fork } from 'redux-saga/effects';
import { History } from 'history';

import { systemReducer } from './system/reducers';
import { SystemState } from './system/types';
import { productSortReducer } from './product_sort/reducers';
import { ProductSortState } from './product_sort/types';
import productSaga from './product/sagas';
import { productReducer } from './product/reducers';
import { ProductState } from './product/types';
import categorySaga from './category/sagas';
import { categoryReducer } from './category/reducers';
import { CategoriesState } from './category/types';
import { cartReducer } from './cart/reducers';
import { CartState } from './cart/types';

export interface AppState {
  system: SystemState;
  category: CategoriesState;
  productSort: ProductSortState;
  product: ProductState;
  cart: CartState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    system: systemReducer,
    category: categoryReducer,
    productSort: productSortReducer,
    product: productReducer,
    cart: cartReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(productSaga), fork(categorySaga)]);
}
