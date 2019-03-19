// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import { takeLatest, call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as types from './constants';
import { getUserInfoSuccessAction, getUserInfoFailureAction } from './actions';

function* getUserInfoSaga(action) {
  const { userId } = action;
  const apiUrl = `/api/user/${userId}`;

  try {
    const results = yield call(fetch, apiUrl);
    const resolvedResults = yield results.json();

    if (resolvedResults) {
      yield put(getUserInfoSuccessAction(resolvedResults));
    }
  } catch (err) {
    yield put(getUserInfoFailureAction(err));
  }
}
export default function* manageCartContainerSaga() {
  // See example in containers/HomePage/saga.js

  yield takeLatest(types.GET_USERINFO, getUserInfoSaga);
}
