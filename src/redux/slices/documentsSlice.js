import { createSlice } from '@reduxjs/toolkit';
import { RequestPostDocuments } from '../../api/RequestPostDocuments';


export const initialState = {
    dataDocuments: [],
    paramsPostDocuments: {
        accessTokenDocuments: '',
        listEncodedId: [],
    }
};

export const documentsSlice = createSlice({
    name: "documents",
    initialState,
    reducers: {   
        getAccessTokenDocumentsReducer: (state, action) => {
            state.paramsPostDocuments.accessTokenDocuments = action.payload;
        },

        getEncodedIdReducer: (state, action) => {
            state.paramsPostDocuments.listEncodedId = action.payload;
        },

        resetDataDocumentsReducer: (state) => {
            state.dataDocuments = [];
            state.paramsPostDocuments.listEncodedId = [];
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(RequestPostDocuments.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(RequestPostDocuments.fulfilled, 
            (state, { payload }) => { 

            state.dataDocuments = [...payload];
            state.status = "idle";
    });

        builder
        .addCase(RequestPostDocuments.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Неправильный логин или пароль" })
            state.status = "idle";
    })
    }
});

export const { getAccessTokenDocumentsReducer, getEncodedIdReducer, resetDataDocumentsReducer } = documentsSlice.actions;

