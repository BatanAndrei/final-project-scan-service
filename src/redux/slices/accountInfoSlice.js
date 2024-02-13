import { createSlice } from '@reduxjs/toolkit';
import { RequestGetAccountInfo } from '../../api/RequestGetAccountInfo'; 



export const initialState = {
    accountInfo: new Object(),
};

export const accountInfoSlice = createSlice({
    name: "accountInfo",
    initialState,
    reducers: {   
    
    },

    extraReducers: (builder) => {
        builder
        .addCase(RequestGetAccountInfo.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(RequestGetAccountInfo.fulfilled, 
            (state, { payload }) => { 
            state.accountInfo = payload;
            state.status = "idle";
    });

        builder
        .addCase(RequestGetAccountInfo.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Неправильный логин или пароль" })
            state.status = "idle";
    })
    }
});

export const { } = accountInfoSlice.actions;