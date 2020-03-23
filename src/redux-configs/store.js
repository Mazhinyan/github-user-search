import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storageSession from 'redux-persist/es/storage/session';
import rootReducer from './combinReducer';
// my manual middleware
import Middleware from './middleware';

const logger = createLogger();

const persistConfig = {
	key: 'root',
	storage: storageSession
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	compose(
		applyMiddleware(Middleware, logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose
	)
);
export const persistor = persistStore(store);
