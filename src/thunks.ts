import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { sendCategory } from './store/category/actions';
import { AppState } from './store';

function exampleAPI() {
  return Promise.resolve(2);
}

export const thunkSendCategory = (
  category: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const asyncResp = await exampleAPI();
  dispatch(
    sendCategory({
      id: asyncResp,
      title: category,
    })
  );
};
