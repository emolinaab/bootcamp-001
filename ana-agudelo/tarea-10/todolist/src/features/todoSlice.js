import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const todoDelete = state.find(todo=>todo.id === action.payload);
            if(todoDelete){
                state.splice(state.indexOf(todoDelete),1);
            }else{}
        }
    },
});

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;