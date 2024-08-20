import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchPosts} from '../api/reddit.js';

export const fetchPostsData = createAsyncThunk('popular/fetchPopularData', async(subreddit) => {

    fetchPosts(subreddit);
});

const postsSlice = createSlice({
    name: 'popular',
    initialState: {
        popularPosts: [],
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
                state.popularPosts = action.payload;
            })
            .addCase(fetchPostsData.rejected, (state) => {
                state.isPending = false;
                state.isRejected = true;
            })
    }
});

export const postsSelector = (state) => {
    return state.popular.popularPosts;
};

export default postsSlice.reducer;