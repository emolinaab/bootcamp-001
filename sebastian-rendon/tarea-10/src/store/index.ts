import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './ToDoSlice';
import filterReducer from './FilterSlice';

export const store = configureStore({
    reducer: {
        toDo: toDoReducer,
        filter: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;