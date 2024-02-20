import { createSlice } from '@reduxjs/toolkit';
import { RequestPostObjectsearch } from '../../api/RequestPostObjectsearch';


export const initialState = {
    dataObjectsearch: new Object,
};

export const objectsearchSlice = createSlice({
    name: "objectsearch",
    initialState,
    reducers: {   
        
    },

    extraReducers: (builder) => {
        builder
        .addCase(RequestPostObjectsearch.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(RequestPostObjectsearch.fulfilled, 
            (state, { payload }) => { 

            state.dataObjectsearch = {...payload};
            state.status = "idle";
    });

        builder
        .addCase(RequestPostObjectsearch.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Неправильный логин или пароль" })
            state.status = "idle";
    })
    }
});

export const {  } = objectsearchSlice.actions;

