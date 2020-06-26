import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { PRODUCT_FETCH_REQUEST } from './types';
import { fetchProductError, fetchProductSuccess } from './actions';
import { callApi } from '../../utils/api';
import { API_URL } from '../../config';

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', API_URL, '/products');

    if (res.error) {
      yield put(fetchProductError(res.error));
    } else {
      yield put(fetchProductSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchProductError(err.stack));
    } else {
      yield put(fetchProductError('An unknown error occured.'));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(PRODUCT_FETCH_REQUEST, handleFetch);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* productSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default productSaga;
