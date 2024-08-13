import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk('comments/fetchComments', async (permalink) => {

    try{
        const response = await  fetch(`https://www.reddit.com` + permalink + '.json');

        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse[1].data.children);
            return jsonResponse[1].data.children
        }
    } catch(error) {
        console.log(error)
    }
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

export default commentsSlice.reducer;