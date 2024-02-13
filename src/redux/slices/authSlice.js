import { createSlice } from '@reduxjs/toolkit';
import { RequestPostAuth } from '../../api/RequestPostAuth';


export const initialState = {
    loginData: {
        telInput: '',
        passInput: ''
    },
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
            if(state.accessToken) {
                state.isActivated = action.payload;
            }  
        },

        logOutReducer: (state, action) => {
            state.isActivated = action.payload;
            state.accessToken = '';
        },
    
        telReducer: (state, action) => {
            state.tel = action.payload;
            state.loginData.telInput = action.payload;
        },
    
        passReducer: (state, action) => {
            state.password = action.payload;
            state.loginData.passInput = action.payload;
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
    
            state.accessToken = payload.accessToken;
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

export const { telReducer, passReducer, telErrorReducer, passErrorReducer, validFormReducer, isActivatedReducer, logOutReducer } = authSlice.actions;
