import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import config from './slices/config';
import github from './slices/github';
import navigation from './slices/navigation';

const reducer = combineReducers({
    navigation,
    github,
    config,
});

const store = configureStore({
    reducer,
});

export default store;
