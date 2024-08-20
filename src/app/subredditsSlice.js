import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubreddits } from '../api/reddit.js';

export const fetchSubredditsData = createAsyncThunk('subreddits/fetchSubredditData', async() => {
    fetchSubreddits();
})

const subreddits = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
        isRejected: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubredditsData.pending, (state) => {
                state.isLoading = true;
                state.isRejected = false;
            })
            .addCase(fetchSubredditsData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isRejected = false;
                state.subreddits = action.payload;
            })
            .addCase(fetchSubredditsData.rejected, (state) => {
                state.isLoading = false;
                state.isRejected = true;
            })
    }
});

export const redditsSelector = (state) => {
    return state.reddits.reddits;
}

export default subreddits.reducer;