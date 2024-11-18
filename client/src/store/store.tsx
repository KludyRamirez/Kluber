import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../features/slice/authSlice';
import { authApi } from '../features/api/authApi';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'], // Persist only the auth slice
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
