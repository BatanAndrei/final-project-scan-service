import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from '../../api/requestUserInfo';


export const initialState = {
    dataUser: [],
};

export const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {   

    },

    extraReducers: (builder) => {
        builder
        .addCase(getUserInfo.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(getUserInfo.fulfilled, 
            (state, { payload }) => { 

            state.dataUser.push(...payload);
            state.status = "idle";
    });

        builder
        .addCase(getUserInfo.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Failed to fetch books." })
            state.status = "idle";
    })
    }
})


