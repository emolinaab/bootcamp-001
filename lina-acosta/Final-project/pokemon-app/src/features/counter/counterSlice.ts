import {createSlice} from '@reduxjs/toolkit';
interface CounterState{
    value: number;
}

const initialState: CounterState = {
    value:1,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            if(state.value > 897){
                state.value = 898;
                return;
            }
            state.value++;
        },
        decrement: (state) => {
            if(state.value < 2){
                return state;
            }
            state.value--;
        },
        reset: (state) => {
            state.value = initialState.value;
        },
    }
});

export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;