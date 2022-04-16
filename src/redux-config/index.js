import history from './history'
import storage from 'redux-persist/lib/storage'
import ReduxThunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'

import rootReducer from './rootReducer'

const persisteConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persisteConfig, rootReducer);

const middlewares = [routerMiddleware(history), ReduxThunk];

const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(persistedReducer),
  composeEnhancers(...enhancers)
);

const persistor = persistStore(store);

export { store, persistor, history};

