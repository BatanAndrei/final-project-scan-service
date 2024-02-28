import { createSlice } from '@reduxjs/toolkit';
import { RequestPostAuth } from '../../api/RequestPostAuth';


export const initialState = {
    loginUser: {
        login: 'sf_student2',  //убрать sf_student2
        password: 'lV8xjCH'    //убрать  lV8xjCH
    },
    accessToken: '',
    expire: '',
    isActivated: false,
    loginField: '',
    passwordField: '',
    loginError: '',    //пробел
    passwordError: '',  //пробел
    validForm: false,
    isActivatedBurgerMenu: false,
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
            state.expire = '';
            state.loginField = '';
            state.passwordField = '';
            state.loginUser.login = '';
            state.loginUser.password = '';
        },
    
        loginReducer: (state, action) => {
            state.loginField = action.payload;
            state.loginUser.login = action.payload;
        },
    
        passwordReducer: (state, action) => {
            state.passwordField = action.payload;
            state.loginUser.password = action.payload;
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

        cleanErrorMessageReducer: (state, action) => {
            state.error = action.payload;
        },

        isActivatedBurgerMenuReducer: (state, action) => {
            state.isActivatedBurgerMenu = action.payload;
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
            state.expire = payload.expire;
            state.status = "idle";
    });

        builder
        .addCase(RequestPostAuth.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Неправильный логин или пароль" })
            state.status = "idle";
    })
    }
});

export const { loginReducer, passwordReducer, loginErrorReducer, passwordErrorReducer, validFormReducer, isActivatedReducer, logOutReducer, cleanErrorMessageReducer, isActivatedBurgerMenuReducer } = authSlice.actions;
