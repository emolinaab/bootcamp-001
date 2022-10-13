import { configureStore } from '@reduxjs/toolkit';

import inputSlice from './reducers/inputSlice'
import  listSlice  from './reducers/listSlice';

export const store = configureStore({
  reducer: {
    input:inputSlice,
    list:listSlice
  },
});
