import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { CATEGORY_FETCH_REQUEST } from './types';
import { fetchCategoryError, fetchCategorySuccess } from './actions';
import { callApi } from '../../utils/api';
import { API_URL } from '../../config';

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', API_URL, '/categories');

    if (res.error) {
      yield put(fetchCategoryError(res.error));
    } else {
      yield put(fetchCategorySuccess(res));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchCategoryError(err.stack));
    } else {
      yield put(fetchCategoryError('An unknown error occured.'));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(CATEGORY_FETCH_REQUEST, handleFetch);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* categorySaga() {
  yield all([fork(watchFetchRequest)]);
}

export default categorySaga;
