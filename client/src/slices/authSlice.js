import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import http from "../utils/http";

// Async thunk for updating user data
export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (userData, thunkAPI) => {
    try {
      const response = await http.put(`/users/${userData.userId}`, userData.data);
      return response.data;
    } catch (error) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    jwt: null,
    status: "idle",
    error: null,
    sellerInfo: null,
  },
  reducers: {
    // Other synchronous actions can go here
    setCredentials: (state, action) => {
      state.jwt = action.payload?.token;
      state.sellerInfo = action.payload.data[0];
    },
    setSellerInfo: (state, action) => {
      state.sellerInfo = action.payload;
    },
    logout: (state) => {
      state.jwt = null;
      state.sellerInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Log the actual response for debugging
        console.log('Received response in updateUserData.fulfilled:', action.payload);
  
        // Adjust the logic based on the actual structure of the response
        if (action.payload) {
          state.sellerInfo = action.payload || null;
        } else {
          console.error('Invalid response format for updateUserData.fulfilled');
        }
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

const persistedReducer = persistReducer(
  {
    key: "auth",
    storage: storage,
    whitelist: ["jwt", "sellerInfo"],
  },
  authSlice.reducer
);

export const { setCredentials, setSellerInfo, logout } = authSlice.actions;

export default persistedReducer;