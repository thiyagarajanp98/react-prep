import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice'; // Import the reducer

const store = configureStore({
  reducer: {
    launch: apiReducer, // Add the API slice reducer to the store
  },
});

export default store;
