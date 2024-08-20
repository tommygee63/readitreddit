import { configureStore } from '@reduxjs/toolkit';
import popularSlice from './postsSlice.js';
import commentsSlice from './commentsSlice.js';


export const store = configureStore({
  reducer: {
    popular: popularSlice,
    comments: commentsSlice
  }
});
