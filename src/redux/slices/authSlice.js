import { createSlice } from '@reduxjs/toolkit';
import { RequestPostAuth } from '../../api/RequestPostAuth';


export const initialState = {
    accessToken: '',
    isActivated: false,
    tel: '',
    password: '',
    telError: ' ',
    passError: ' ',
    validForm: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {   
    
        isActivatedReducer: (state, action) => {
            state.isActivated = action.payload;
        },
    
        telReducer: (state, action) => {
            state.tel = action.payload;
        },
    
        passReducer: (state, action) => {
            state.password = action.payload;
        },

        telErrorReducer: (state, action) => {
            state.telError = action.payload;
        },
    
        passErrorReducer: (state, action) => {
            state.passError = action.payload;
        },
    
        validFormReducer: (state, action) => {
            state.validForm = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(RequestPostAuth.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(RequestPostAuth.fulfilled, 
            (state, { payload }) => { 

            state.accessToken = payload;
            state.status = "idle";
    });

        builder
        .addCase(RequestPostAuth.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Failed to fetch books." })
            state.status = "idle";
    })
    }
})

export const { loginReducer, telReducer, passReducer, telErrorReducer, passErrorReducer, validFormReducer, isActivatedReducer } = authSlice.actions;
