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

// Create an async thunk for fetching data from the API
export const fetchAutocompleteData = createAsyncThunk(
  'launch/fetchAutocompleteData',
  async (query) => {
    const response = await axios.get(
      `https://m-server-two.vercel.app/search/${query}`
    );
    return response.data; // Return the data to be stored in Redux
  }
);

// Create an async thunk for fetching Details from the API
export const fetchDetails = createAsyncThunk(
  'launch/fetchDetails',
  async ({ type, id }) => {
    const response = await axios.get(
      `https://m-server-two.vercel.app/details/${id}/${type}`
    );
    return response.data; // Return the data to be stored in Redux
  }
);

// Create an async thunk for fetching Other Details from the API
export const fetchOtherDetails = createAsyncThunk(
  'launch/fetchOtherDetails',
  async ({ title, source, data }) => {
    console.log(`https://m-server-two.vercel.app/otherDetails/${title}/${source}/${data}`)

    const response = await axios.get(
      `https://m-server-two.vercel.app/otherDetails/${title}/${source}/${data}`
    );
    return response.data; // Return the data to be stored in Redux
  }
);

export const fetchSingleAlbumDetails = createAsyncThunk(
  'launch/fetchSingleAlbumDetails',
  async ({ id }) => {
    console.log(`https://m-server-two.vercel.app/album/${id}`)

    const response = await axios.get(
      `https://m-server-two.vercel.app/album/${id}`
    );
    return response.data; // Return the data to be stored in Redux
  }
);

// Create a slice
const apiSlice = createSlice({
  name: 'launch',
  initialState: {
    launchData: null,      // Initialize data as null
    autocompleteData: null,
    Details: null,
    SingleAlbumDetails: null,
    loading: false,  // Loading state
    error: null,     // Error state
  },
  reducers: {
    // Add a reducer for clearing autocomplete data
    clearAutocompleteData: (state) => {
      state.autocompleteData = null; // Reset autocomplete data to null
    },
    clearDetailsData: (state) => {
      state.Details = null; // Reset autocomplete data to null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunchData.pending, (state) => {
        state.loading = true;  // Set loading state to true when fetching
        state.error = null;    // Reset error state
      })
      .addCase(fetchLaunchData.fulfilled, (state, action) => {
        state.loading = false;       // Set loading state to false when fetched
        state.launchData = action.payload; // Store the fetched data
      })
      .addCase(fetchLaunchData.rejected, (state, action) => {
        state.loading = false;       // Set loading state to false if fetching fails
        state.error = action.error.message; // Store error message
      });

    builder
      .addCase(fetchAutocompleteData.pending, (state) => {
        state.loading = true;  // Set loading state to true when fetching
        state.error = null;    // Reset error state
      })
      .addCase(fetchAutocompleteData.fulfilled, (state, action) => {
        state.loading = false;       // Set loading state to false when fetched
        state.autocompleteData = action.payload; // Store the fetched data
      })
      .addCase(fetchAutocompleteData.rejected, (state, action) => {
        state.loading = false;       // Set loading state to false if fetching fails
        state.error = action.error.message; // Store error message
      });

    builder
      .addCase(fetchDetails.pending, (state) => {
        state.loading = true;  // Set loading state to true when fetching
        state.error = null;    // Reset error state
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.loading = false;       // Set loading state to false when fetched
        state.Details = action.payload; // Store the fetched data
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.loading = false;       // Set loading state to false if fetching fails
        state.error = action.error.message; // Store error message
      });

    builder
      .addCase(fetchOtherDetails.pending, (state) => {
        state.loading = true;  // Set loading state to true when fetching
        state.error = null;    // Reset error state
      })
      .addCase(fetchOtherDetails.fulfilled, (state, action) => {
        state.loading = false; // Set loading state to false when fetched
        // Check if Details is an object and merge the fetched data
        if (state.Details && typeof state.Details === 'object') {
          state.Details = { ...state.Details, ...action.payload }; // Merge the fetched data
        } else {
          state.Details = action.payload; // Set new state if Details is not an object
        }
      })
      .addCase(fetchOtherDetails.rejected, (state, action) => {
        state.loading = false; // Set loading state to false if fetching fails
        state.error = action.error.message; // Store error message
      });

    builder
      .addCase(fetchSingleAlbumDetails.pending, (state) => {
        state.loading = true;  // Set loading state to true when fetching
        state.error = null;    // Reset error state
      })
      .addCase(fetchSingleAlbumDetails.fulfilled, (state, action) => {
        state.loading = false;       // Set loading state to false when fetched
        state.SingleAlbumDetails = action.payload; // Store the fetched data
      })
      .addCase(fetchSingleAlbumDetails.rejected, (state, action) => {
        state.loading = false;       // Set loading state to false if fetching fails
        state.error = action.error.message; // Store error message
      });
  },
});
export const { clearAutocompleteData, clearDetailsData } = apiSlice.actions;

// Export the reducer to add it to the store
export default apiSlice.reducer;
