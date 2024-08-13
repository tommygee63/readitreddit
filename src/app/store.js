import { configureStore } from '@reduxjs/toolkit';
import popularSlice from '../features/popular/popularSlice.js';


export const store = configureStore({
  reducer: {
    popular: popularSlice
  },
});
