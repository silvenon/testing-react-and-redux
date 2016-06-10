import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    sagaMiddleware,
  ].concat(DEV ? createLogger() : []);
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
