import { createSlice } from "@reduxjs/toolkit";
import { pendingReducer, rejectReducer, decorateAsyncThunk } from "./helpers";
import { getAllUsersTasks, updateUserTask } from "../api";

const TASKS_SLICE_NAME = "tasks";

export const getUserTasks = decorateAsyncThunk({
  type: `${TASKS_SLICE_NAME}/getUserTasks`,
  thunk: getAllUsersTasks,
});

export const updtUserTask = decorateAsyncThunk({
  type: `${TASKS_SLICE_NAME}/updtUserTask`,
  thunk: updateUserTask,
});

const tasksSlice = createSlice({
  name: TASKS_SLICE_NAME,
  initialState: {
    tasks: [],
    error: null,
    isFetching: false,
    currentTask: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserTasks.pending, pendingReducer);
    builder.addCase(getUserTasks.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.tasks = action.payload;
    });
    builder.addCase(getUserTasks.rejected, rejectReducer);
    builder.addCase(updtUserTask.pending, pendingReducer);
    builder.addCase(updtUserTask.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.currentTask = action.payload;
    });
    builder.addCase(updtUserTask.rejected, rejectReducer);
  },
});

export default tasksSlice.reducer;
