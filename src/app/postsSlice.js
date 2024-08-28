import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchPosts} from '../api/reddit.js';

export const fetchPostsData = createAsyncThunk('posts/fetchPostsData', async(subreddit) => {

    return await fetchPosts(subreddit);
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isPending: false,
        isRejected: false
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsData.pending, (state) => {
                state.isPending = true;
                state.isRejected = false;
            })
            .addCase(fetchPostsData.fulfilled, (state, action) => {
                state.isPending = false;
                state.isRejected = false;
                state.posts = action.payload;
            })
            .addCase(fetchPostsData.rejected, (state) => {
                state.isPending = false;
                state.isRejected = true;
            })
    }
});

export const postsSelector = (state) => {
    return state.posts;
};

export default postsSlice.reducer;