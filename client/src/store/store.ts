import { configureStore } from '@reduxjs/toolkit';

import { api } from '../services/api';
import * as reducers from './slices';

const store = configureStore({
  reducer: { ...reducers, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
