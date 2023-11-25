import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, getAllUsers, getOneUser } from "../api";
import { pendingReducer, rejectReducer, decorateAsyncThunk } from "./helpers";

const USER_SLICE_NAME = "users";

export const getUsers = decorateAsyncThunk({
  type: `${USER_SLICE_NAME}/getUsers`,
  thunk: getAllUsers,
});

export const addUser = decorateAsyncThunk({
  type: `${USER_SLICE_NAME}/addUser`,
  thunk: createUser,
});

export const getUser = decorateAsyncThunk({
  type: `${USER_SLICE_NAME}/getUser`,
  thunk: getOneUser,
});

export const delUser = decorateAsyncThunk({
  type: `${USER_SLICE_NAME}/deleteUser`,
  thunk: deleteUser,
});

const usersSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState: {
    users: [],
    error: null,
    isFetching: false,
    userAuth: null,
    currentUser: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, pendingReducer);
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, rejectReducer);

    builder.addCase(addUser.pending, pendingReducer);
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.userAuth = action.payload;
    });
    builder.addCase(addUser.rejected, rejectReducer);

    builder.addCase(getUser.pending, pendingReducer);
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.currentUser = action.payload;
    });
    builder.addCase(getUser.rejected, rejectReducer);

    builder.addCase(delUser.pending, pendingReducer);
    builder.addCase(delUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(delUser.rejected, rejectReducer);
  },
});
export default usersSlice.reducer;
