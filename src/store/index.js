import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import github from './slices/github';
import navigation from './slices/navigation';

const reducer = combineReducers({
    navigation,
    github,
});

const store = configureStore({
    reducer,
});

export default store;
