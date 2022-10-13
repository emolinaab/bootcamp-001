import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    stateValueInput:""
  },
  reducers: {
    setValueInput: (state,action)=>{
      state.stateValueInput=action.payload.stateValueInput
    },
    unsetValueInput: (state)=>{
      state.stateValueInput=""
    }
  }
})

// Action creators are generated for each case reducer function
export const { setValueInput,unsetValueInput} = inputSlice.actions

export default inputSlice.reducer