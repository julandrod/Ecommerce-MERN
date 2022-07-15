import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setupUser = createAsyncThunk(
  "user/setupUser",
  async ({ dataUser, endPoint }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/auth/${endPoint}`, dataUser);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const response = await axios.get("/api/v1/users");
  return response.data;
});

export const getSingleUser = createAsyncThunk(
  "user/getSingleUser",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async ({ id, userInfo }) => {
    const response = await axios.patch(`/api/v1/users/${id}`, userInfo);
    return response.data;
  }
);

export const deleteUserInfo = createAsyncThunk(
  "user/deleteUserInfo",
  async ({ id, token }) => {
    const response = await axios.delete(`/api/v1/users/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
    if (response.status === 200) return id;
  }
);

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || null,
  users: [],
  singleUser: "",
  userLoading: false,
  userError: false,
  userErrorInfo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      localStorage.setItem("user", JSON.stringify(state.userInfo));
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
      state.userId = action.payload.user.userId;
    },
    [setupUser.rejected]: (state, action) => {
      state.userLoading = false;
      state.userError = true;
      state.errorInfo = action.payload;
    },
    // Get all users
    [getAllUsers.pending]: (state) => {
      state.userLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.users = action.payload.users;
    },
    [getAllUsers.rejected]: (state) => {
      state.userLoading = false;
      state.userError = true;
    },
    // Get single user
    [getSingleUser.pending]: (state) => {
      state.userLoading = true;
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.singleUser = action.payload.user;
    },
    [getSingleUser.rejected]: (state, action) => {
      state.userLoading = false;
      state.userError = true;
      state.userErrorInfo = action.payload;
    },
    // Update single user
    [updateUserInfo.pending]: (state) => {
      state.userLoading = true;
      console.log("update pending");
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.singleUser = action.payload.user;
    },
    [updateUserInfo.rejected]: (state) => {
      state.userLoading = false;
      state.userError = true;
      console.log("update rejected");
    },
    // Delete user by id
    [deleteUserInfo.pending]: (state) => {
      state.userLoading = true;
    },
    [deleteUserInfo.pending]: (state, action) => {
      state.userLoading = false;
      state.users = state.users.filter((item) => item._id !== action.payload);
    },
    [deleteUserInfo.rejected]: (state) => {
      state.userLoading = false;
      state.userError = true;
    },
  },
});

export const { logout } = userSlice.actions;

export const selectUserState = (state) => state.user;

export default userSlice.reducer;
