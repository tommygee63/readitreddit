import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchComments} from '../api/reddit.js';

export const fetchCommentsData = createAsyncThunk('comments/fetchComments', async (permalink) => {

    return fetchComments(permalink);
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {},
        isLoading: false,
        isRejected: false
    },
    reducers: {
        toggleIsShowing(state) {
            state.isShowing = !state.isShowing;
        }
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
                state.comments[action.payload[0].data.parent_id] = action.payload;
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
export const isShowingSelector = (state) => {
    return state.comments.isShowing;
}

export default commentsSlice.reducer;