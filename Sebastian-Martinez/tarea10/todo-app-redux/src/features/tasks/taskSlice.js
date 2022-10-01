import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  
  
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    setTaskDone: (state, action) => {
      const taskDone = state.find((task) => task.id === action.payload);
      if(taskDone) {
        state.indexOf(taskDone) = { 
            ...action.payload,
            isCompleted: true
        }    
    }
    },
  },
});

export const { addTask } = taskSlice.actions;
export const { deleteTask } = taskSlice.actions;
export const { setTaskDone } = taskSlice.actions;

export default taskSlice.reducer;
