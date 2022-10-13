import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    stateList:[],
    totalCountItem: 0

  },
  reducers: {
    addItemToList: (state,action)=>{
      const {value}=action.payload
      const itemList ={id: state.totalCountItem, value:value, check:false}
      state.stateList.push(itemList)
      state.totalCountItem +=1
    },
    completeItemToList:(state,action)=>{
      state.stateList = state.stateList.map((item) => {
        if (item.id == action.payload) {
          return {
            ...item,
            check: true,
          };
        }
        return item;
      });
    },
    deleteItemToList:(state,action)=>{
      state.totalCountItem -= 1;
      state.stateList = state.stateList.filter(item => item.id != action.payload);
    },
  }
})

// Action creators are generated for each case reducer function
export const { addItemToList,completeItemToList,deleteItemToList} = listSlice.actions
export default listSlice.reducer
