import { configureStore } from '@reduxjs/toolkit';
import userReducer, { authMiddleware } from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
});
