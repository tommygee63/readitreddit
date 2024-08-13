import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk('comments/fetchComments', async (subreddit, id) => {
    const response = await  fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`);
    const jsonResponse = await response.json();
    return jsonResponse.data.children
})

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isLoading: false,
        isRejected: false
    },
    reducers: {

    },
    exrtaReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
                state.isRejected = false;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isRejected = false;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state) => {
                state.isLoading = false;
                state.isRejected = true;
            })
    }
});

export const commentsSelector = (state) => {
    return state.comments.comments;
};

export default comments.reducer;