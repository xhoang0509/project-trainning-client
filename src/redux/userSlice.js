import { createSlice } from '@reduxjs/toolkit';
import STORAGE from '../constant';

const initialState = {
  name: '',
  username: '',
};

export const authMiddleware = (store) => (next) => (action) => {
  if (login.match(action)) {
    localStorage.setItem(STORAGE.USER, JSON.stringify(action.payload));
  } else if (logout.match(action)) {
    localStorage.setItem(STORAGE.USER, JSON.stringify(initialState));
  }
  return next(action);
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.name = '';
      state.username = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
