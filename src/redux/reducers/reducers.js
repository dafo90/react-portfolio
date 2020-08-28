import { combineReducers } from 'redux';

import githubReducer from './githubReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
    navigation: navigationReducer,
    github: githubReducer,
});

export default rootReducer;
