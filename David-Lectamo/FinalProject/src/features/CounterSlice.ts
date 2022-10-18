import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value > 897) {
        state.value = 898;
        return;
      }
      state.value++;
    },

    decrement: (state) => {
      if (state.value < 2) {
        return state;
      }
      state.value--;
    },

    reset: (state) => {
      state.value = 449;
    },

    incrementBy100: (state) => {
      if (state.value > 797) {
        state.value = 898;
        return;
      }
      state.value+= 100;
    },

    decrementBy100: (state) => {
      if (state.value < 101) {
        state.value = 1;
        return;
      }
      state.value-= 100;
    }
  }
});

export const { increment, decrement, reset, incrementBy100, decrementBy100 } = counterSlice.actions;
export default counterSlice.reducer;