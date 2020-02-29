import { put, takeEvery } from 'redux-saga/effects';

import history from '../../routings/history';
import { closeMobileDrawer, SET_SELECTED_LAYOUT } from '../actions/navigationAction';

function* setSelectedLayout({ selectedLayout }) {
    history.push(selectedLayout.urls[0]);
    yield put(closeMobileDrawer());
}

export default function* sagasRoot() {
    yield takeEvery(SET_SELECTED_LAYOUT, setSelectedLayout);
}
