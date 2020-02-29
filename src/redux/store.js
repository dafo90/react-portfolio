import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import indexReducer from './reducers/reducers';
import watcherSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(indexReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcherSaga);

export default store;
