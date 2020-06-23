/* Libraries */
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
/* Local Files */
import {reducers} from './ducks/index.js';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['expenses'],
  blacklist: [''],
};
const persistedReducer = persistReducer(config, reducers);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware()),
);
const persistor = persistStore(store);

export {store, persistor};
