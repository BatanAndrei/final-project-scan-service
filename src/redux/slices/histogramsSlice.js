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
    checkedBox0: false,
    checkedBox1: false,
    checkedBox2: false,
    checkedBox3: false,
    checkedBox4: false,
    checkedBox5: false,
    checkedBox6: false,
    dataHistograms: new Object,
    accessTokenHistograms: '',
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

        checkedBoxReducer0: (state, action) => {
            state.checkedBox0 = action.payload;
        },

        checkedBoxReducer1: (state, action) => {
            state.checkedBox1 = action.payload;
        },

        checkedBoxReducer2: (state, action) => {
            state.checkedBox2 = action.payload;
        },

        checkedBoxReducer3: (state, action) => {
            state.checkedBox3 = action.payload;
        },

        checkedBoxReducer4: (state, action) => {
            state.checkedBox4 = action.payload;
        },

        checkedBoxReducer5: (state, action) => {
            state.checkedBox5 = action.payload;
        },

        checkedBoxReducer6: (state, action) => {
            state.checkedBox6 = action.payload;
        },

        getAccessTokenHistogramsReducer: (state, action) => {
            state.accessTokenHistograms = action.payload;
        }

    },

    extraReducers: (builder) => {
        builder
        .addCase(RequestPostHistograms.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(RequestPostHistograms.fulfilled, 
            (state, { payload }) => { 
            state.dataHistograms = payload;
            state.status = "idle";
    });

        builder
        .addCase(RequestPostHistograms.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Неправильный логин или пароль" })
            state.status = "idle";
    })
    }
});

export const { innReducer, innErrorReducer, deliveryDocReducer, deliveryDocErrorReducer, deteBeginReducer, deteEndReducer, deteErrorReducer, validFormSearchReducer, checkedBoxReducer0, checkedBoxReducer1, checkedBoxReducer2, checkedBoxReducer3, checkedBoxReducer4, checkedBoxReducer5, checkedBoxReducer6, getAccessTokenHistogramsReducer } = histogramsSlice.actions;

