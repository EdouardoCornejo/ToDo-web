import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import { thunk } from 'redux-thunk';
import { coreApi } from './core/api';
import { coreReducer } from './core/reducer/core.reducer';


export const store = configureStore({
  reducer: {
    core: coreReducer,
    [coreApi.reducerPath]: coreApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(thunk)
      .concat(coreApi.middleware)
      // .concat(RefreshTokenMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
