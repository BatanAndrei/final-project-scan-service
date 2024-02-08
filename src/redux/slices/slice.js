import { createSlice } from '@reduxjs/toolkit';
import { postAuth } from '../../api/postAuth';


export const initialState = {
    token: '',
};

export const authlSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {   

    },

    extraReducers: (builder) => {
        builder
        .addCase(postAuth.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(postAuth.fulfilled, 
            (state, { payload }) => { 

            state.token = payload;
            state.status = "idle";
    });

        builder
        .addCase(postAuth.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Failed to fetch books." })
            state.status = "idle";
    })
    }
})


