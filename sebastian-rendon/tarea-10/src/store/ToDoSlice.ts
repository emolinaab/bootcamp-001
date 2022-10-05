import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { ToDoItem } from "../types/PropTypes";

interface ToDoState {
    items: ToDoItem[];
}

const initialState: ToDoState = {
    items: [],
}

export const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ToDoItem>) => {
            state.items = [action.payload, ...state.items]
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items
                .slice(0, action.payload)
                .concat(state.items.slice(action.payload + 1));
        },
    }
});

export const { add, remove } = toDoSlice.actions;
export const toDoItems = (state: RootState) => state.toDo.items;
export default toDoSlice.reducer;