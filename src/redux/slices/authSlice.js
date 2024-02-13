import { createSlice } from '@reduxjs/toolkit';
import { RequestPostAuth } from '../../api/RequestPostAuth';


export const initialState = {
    loginData: {
        loginData: '',
        passwordData: ''
    },
    accessToken: '',
    isActivated: false,
    loginField: '',
    passwordField: '',
    loginError: ' ',
    passwordError: ' ',
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
    
        loginReducer: (state, action) => {
            state.loginField = action.payload;
            state.loginData.loginData = action.payload;
        },
    
        passwordReducer: (state, action) => {
            state.passwordField = action.payload;
            state.loginData.passwordData = action.payload;
        },

        loginErrorReducer: (state, action) => {
            state.loginError = action.payload;
        },
    
        passwordErrorReducer: (state, action) => {
            state.passwordError = action.payload;
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

export const { loginReducer, passwordReducer, loginErrorReducer, passwordErrorReducer, validFormReducer, isActivatedReducer, logOutReducer } = authSlice.actions;
