import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    newTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const search = state.find((el) => el.id === action.payload);
      if (search) {
        state.splice(state.indexOf(search), 1);
      }
    },
  },
});

export const { newTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
