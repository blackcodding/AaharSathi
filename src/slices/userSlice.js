import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userDetails: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearUser: state => {
      state.userDetails = null;
      state.loading = false;
      state.error = null;
    },
  },
});
