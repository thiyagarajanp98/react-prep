import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk for fetching data from the API
export const fetchLaunchData = createAsyncThunk(
  'launch/fetchLaunchData',
  async () => {
    const response = await axios.get(
      'https://m-server-two.vercel.app/'
    );
    return response.data; // Return the data to be stored in Redux
  }
);

// Create a slice
const apiSlice = createSlice({
  name: 'launch',
  initialState: {
    data: null,      // Initialize data as null
    loading: false,  // Loading state
    error: null,     // Error state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunchData.pending, (state) => {
        state.loading = true;  // Set loading state to true when fetching
        state.error = null;    // Reset error state
      })
      .addCase(fetchLaunchData.fulfilled, (state, action) => {
        state.loading = false;       // Set loading state to false when fetched
        state.data = action.payload; // Store the fetched data
      })
      .addCase(fetchLaunchData.rejected, (state, action) => {
        state.loading = false;       // Set loading state to false if fetching fails
        state.error = action.error.message; // Store error message
      });
  },
});

// Export the reducer to add it to the store
export default apiSlice.reducer;
