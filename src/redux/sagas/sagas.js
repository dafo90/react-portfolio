import { all, fork } from 'redux-saga/effects';

import sagasGithub from './sagasGithub';
import sagasNavigation from './sagasNavigation';

export default function* sagasRoot() {
    yield all([fork(sagasNavigation), fork(sagasGithub)]);
}
