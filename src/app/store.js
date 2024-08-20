import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './postsSlice.js';
import commentsSlice from './commentsSlice.js';
import subredditsSlice from './subredditsSlice.js'


export const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
    subreddits: subredditsSlice
  }
});
