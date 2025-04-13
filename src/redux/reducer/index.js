import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../slices/todoSlice';

const appStore = configureStore({
  reducer:{
   todos:todoSlice.reducer,
  }
})

export default appStore;