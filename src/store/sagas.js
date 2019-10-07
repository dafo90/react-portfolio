import { put, takeEvery } from 'redux-saga/effects';
import history from '../utils/history';
import { SET_LAYOUT, closeMobileDrawer } from '../actions/actions';

function* setLayout(action) {
    const { urls } = action.layout;
    history.push(urls[0]);
    yield put(closeMobileDrawer());
}

export default function* sagasRoot() {
    yield takeEvery(SET_LAYOUT, setLayout);
}
