import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { PriorityMap, ToDoItem } from "../types/PropTypes";

interface ToDoState {
    items: ToDoItem[];
    newItem: ToDoItem;
    priorities: PriorityMap;
}

const initialState: ToDoState = {
    items: [],
    newItem: {
        id: 0,
        title: '',
        description: '',
        priority: 2,
        completed: false,
        dateCreated: new Date().toISOString().slice(0, 10),
        dateDue: new Date().toISOString().slice(0, 10),
    },
    priorities: {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }
}

export const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setNewItem: (state, action: PayloadAction<ToDoItem>) => {
            state.newItem = action.payload;
        },
        addItem: (state, action: PayloadAction<ToDoItem>) => {
            state.items = [{ ...action.payload, id: state.items.length + 1 }, ...state.items]
            state.newItem = initialState.newItem;
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items
                .slice(0, action.payload)
                .concat(state.items.slice(action.payload + 1));
        },
        completeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items
                .map((item, i) =>
                    i === action.payload ? { ...item, completed: !item.completed } : item
                )
        },
    }
});

export const { setNewItem, addItem, removeItem, completeItem } = toDoSlice.actions;
export const newToDoItem = (state: RootState) => state.toDo.newItem;
export const toDoItems = (state: RootState) => state.toDo.items;
export const toDoPriorities = (state: RootState) => state.toDo.priorities;
export const currentToDoItem = (itemId: number) =>
    (state: RootState) => state.toDo.items.find((item) => item.id === itemId)
export default toDoSlice.reducer;