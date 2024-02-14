import { createSlice } from '@reduxjs/toolkit';
import { RequestGetAccountInfo } from '../../api/RequestGetAccountInfo'; 


export const initialState = {
    accountInfo: new Object(),
    tariffBeginner: false,
    tariffPro: false,
    tariffBusiness: false,
};

export const accountInfoSlice = createSlice({
    name: "accountInfo",
    initialState,
    reducers: {   

        tariffBeginnerReducer: (state) => {
            state.tariffBeginner = true;
            state.tariffPro = false;
            state.tariffBusiness = false;
        },

        tariffProReducer: (state) => {
            state.tariffBeginner = false;
            state.tariffPro = true;
            state.tariffBusiness = false;
        },

        tariffBusinessReducer: (state) => {
            state.tariffBeginner = false;
            state.tariffPro = false;
            state.tariffBusiness = true;
        },
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

export const { tariffBeginnerReducer, tariffProReducer, tariffBusinessReducer } = accountInfoSlice.actions;