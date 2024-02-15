import { createSlice } from '@reduxjs/toolkit';
import { RequestPostHistograms } from '../../api/RequestPostHistograms';
//import { RequestGetAccountInfo } from '../../api/RequestGetAccountInfo';


export const initialState = {
    
};

export const histogramsSlice = createSlice({
    name: "histograms",
    initialState,
    innField: '',
    innError: ' ',
    deliveryDocField: '',
    deliveryDocError: ' ',
    dateBegin: '',
    dateEnd: '',
    dateError: ' ',
    validFormSearch: false,
    reducers: {   
        innReducer: (state, action) => {
            state.innField = action.payload;
        },

        innErrorReducer: (state, action) => {
            state.innError = action.payload;
        },

        deliveryDocReducer: (state, action) => {
            state.deliveryDocField = action.payload;
        },

        deliveryDocErrorReducer: (state, action) => {
            state.deliveryDocError = action.payload;
        },

        deteBeginReducer: (state, action) => {
            state.dateBegin = action.payload;
        },

        deteEndReducer: (state, action) => {
            state.dateEnd = action.payload;
        },

        deteErrorReducer: (state, action) => {
            state.dateError = action.payload;
        },

        validFormSearchReducer: (state, action) => {
            state.validFormSearch = action.payload;
        },
    },

    /*extraReducers: (builder) => {
        builder
        .addCase(RequestPostHistograms.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(RequestPostHistograms.fulfilled, 
            (state, { payload }) => { 
            
            state.status = "idle";
    });

        builder
        .addCase(RequestPostHistograms.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Неправильный логин или пароль" })
            state.status = "idle";
    })
    }*/
});

export const { innReducer, innErrorReducer, deliveryDocReducer, deliveryDocErrorReducer, deteBeginReducer, deteEndReducer, deteErrorReducer, validFormSearchReducer } = histogramsSlice.actions;

