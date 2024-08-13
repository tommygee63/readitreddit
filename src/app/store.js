import { configureStore } from '@reduxjs/toolkit';
import popularSlice from '../features/popular/popularSlice.js';
import commentsSlice from '../features/comments/commentsSlice.js';


export const store = configureStore({
  reducer: {
    popular: popularSlice,
    comments: commentsSlice
  }
});
