import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchComments} from '../api/reddit.js';

export const fetchCommentsData = createAsyncThunk('comments/fetchComments', async (permalink) => {

    fetchComments(permalink);
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isLoading: false,
        isRejected: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsData.pending, (state) => {
                state.isLoading = true;
                state.isRejected = false;
            })
            .addCase(fetchCommentsData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isRejected = false;
                state.comments = action.payload;
            })
            .addCase(fetchCommentsData.rejected, (state) => {
                state.isLoading = false;
                state.isRejected = true;
            })
    }
});

export const commentsSelector = (state) => {
    return state.comments.comments;
};

export default commentsSlice.reducer;