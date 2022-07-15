import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setupUser = createAsyncThunk(
  "auth/setupUser",
  async ({ dataUser, endPoint }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/auth/${endPoint}`, dataUser);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const showCurrentUser = createAsyncThunk(
  "auth/showCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/v1/users/showMe");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const getSingleUser = createAsyncThunk(
  "auth/getSingleUser",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await axios.post("/api/v1/auth/logout");
});

const initialState = {
  userInfo: null,
  userId: "",
  userLoading: false,
  userError: false,
  errorInfo: "",
  alertType: "",
  alertText: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErrorInfo: (state) => {
      state.errorInfo = "";
      state.userError = false;
    },
  },
  extraReducers: {
    // login / register user
    [setupUser.pending]: (state) => {
      state.userLoading = true;
    },
    [setupUser.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.userInfo = action.payload.user;
      state.userId = action.payload.user.userId
    },
    [setupUser.rejected]: (state, action) => {
      state.userLoading = false;
      state.userError = true;
      state.errorInfo = action.payload;
    },
    // logout user
    [logoutUser.pending]: (state) => {
      state.userLoading = true;
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.userInfo = null;
      state.userId = "";
    },
    [logoutUser.rejected]: (state, action) => {
      state.userLoading = false;
      state.userError = true;
    },
    // show current user
    [showCurrentUser.pending]: (state) => {
      state.userLoading = true;
    },
    [showCurrentUser.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.userId = action.payload.user.userId;
    },
    [showCurrentUser.rejected]: (state, action) => {
      state.userLoading = false;
      state.userError = true;
      state.errorInfo = action.payload;
    },
    // get single user
    [getSingleUser.pending]: (state) => {
      state.userLoading = true;
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.userInfo = action.payload.user;
    },
    [getSingleUser.rejected]: (state, action) => {
      state.userLoading = false;
      state.userError = true;
      state.errorInfo = action.payload;
    },
  },
});

export const { clearErrorInfo } = authSlice.actions;

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
