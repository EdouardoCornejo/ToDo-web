import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { coreSlices, coreSlicesPersist } from '../slices';

const persistConfig = {
  key: `TODO_ROOT`,
  storage,
};

const reducer = combineReducers({
  ...coreSlicesPersist,
});

export const coreReducer = combineReducers({
  persistedReducer: persistReducer(persistConfig, reducer),
  ...coreSlices,
});
