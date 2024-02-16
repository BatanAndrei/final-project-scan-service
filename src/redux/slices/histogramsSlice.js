import { createSlice } from '@reduxjs/toolkit';
import { RequestPostHistograms } from '../../api/RequestPostHistograms';


export const initialState = {
    innError: ' ',
    deliveryDocError: ' ',
    dateError: ' ',
    validFormSearch: false,
    dataHistograms: new Object,
    paramsPostHistograms: {
        accessTokenHistograms: '',
        innField: '',
        tonalityDataInput: 'positive',
        deliveryDocField: '',
        dateBegin: '',
        dateEnd: '',
        checkedBox0: false,
        checkedBox1: false,
        checkedBox2: false,
        checkedBox3: false,
        checkedBox4: false,
        checkedBox5: false,
        checkedBox6: false,
    },
};

export const histogramsSlice = createSlice({
    name: "histograms",
    initialState,
    reducers: {   
        innReducer: (state, action) => {
            state.paramsPostHistograms.innField = action.payload;
        },

        innErrorReducer: (state, action) => {
            state.innError = action.payload;
        },

        tonalityReducer: (state, action) => {
            state.paramsPostHistograms.tonalityDataInput = action.payload;
        },

        deliveryDocReducer: (state, action) => {
            state.paramsPostHistograms.deliveryDocField = action.payload;
        },

        deliveryDocErrorReducer: (state, action) => {
            state.deliveryDocError = action.payload;
        },

        deteBeginReducer: (state, action) => {
            state.paramsPostHistograms.dateBegin = action.payload;
        },

        deteEndReducer: (state, action) => {
            state.paramsPostHistograms.dateEnd = action.payload;
        },

        deteErrorReducer: (state, action) => {
            state.dateError = action.payload;
        },

        validFormSearchReducer: (state, action) => {
            state.validFormSearch = action.payload;
        },

        checkedBoxReducer0: (state, action) => {
            state.paramsPostHistograms.checkedBox0 = action.payload;
        },

        checkedBoxReducer1: (state, action) => {
            state.paramsPostHistograms.checkedBox1 = action.payload;
        },

        checkedBoxReducer2: (state, action) => {
            state.paramsPostHistograms.checkedBox2 = action.payload;
        },

        checkedBoxReducer3: (state, action) => {
            state.paramsPostHistograms.checkedBox3 = action.payload;
        },

        checkedBoxReducer4: (state, action) => {
            state.paramsPostHistograms.checkedBox4 = action.payload;
        },

        checkedBoxReducer5: (state, action) => {
            state.paramsPostHistograms.checkedBox5 = action.payload;
        },

        checkedBoxReducer6: (state, action) => {
            state.paramsPostHistograms.checkedBox6 = action.payload;
        },

        getAccessTokenHistogramsReducer: (state, action) => {
            state.paramsPostHistograms.accessTokenHistograms = action.payload;
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

export const { innReducer, innErrorReducer, tonalityReducer, deliveryDocReducer, deliveryDocErrorReducer, deteBeginReducer, deteEndReducer, deteErrorReducer, validFormSearchReducer, checkedBoxReducer0, checkedBoxReducer1, checkedBoxReducer2, checkedBoxReducer3, checkedBoxReducer4, checkedBoxReducer5, checkedBoxReducer6, getAccessTokenHistogramsReducer } = histogramsSlice.actions;

