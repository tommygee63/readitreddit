import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularData = createAsyncThunk('popular/fetchPopularData', async() => {
    
    try{
        const response = await fetch('https://www.reddit.com/r/popular.json');
        if(response.ok) {
            const jsonResponse = await response.json();  
            return jsonResponse.data.children;
        }
    }catch(error) {
        console.log(error);
    }
});

const popularSlice = createSlice({
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
            .addCase(fetchPopularData.pending, (state) => {
                state.isPending = true;
                state.isRejected = false;
            })
            .addCase(fetchPopularData.fulfilled, (state, action) => {
                state.isPending = false;
                state.isRejected = false;
                state.popularPosts = action.payload;
            })
            .addCase(fetchPopularData.rejected, (state) => {
                state.isPending = false;
                state.isRejected = true;
            })
    }
});

export const popularSelector = (state) => {
    return state.popular.popularPosts;
};

export default popularSlice.reducer;