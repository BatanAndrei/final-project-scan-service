import { createSlice } from '@reduxjs/toolkit';
import { postAuth } from '../../api/postAuth';


export const initialState = {
    token: '',
    login: false,
    tel: '',
    password: '',
    telDirty: false,
    passDirty: false,
    telError: 'Поле не может быть пустым',
    passError: 'Поле не может быть пустым',
    validForm: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {   
    
        loginReducer: (state) => {
            state.login = true;
        },
    
        telDirtyReducer: (state, action) => {
            state.telDirty = action.payload;
        },
    
        passDirtyReducer: (state, action) => {
            state.passDirty = action.payload;
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
        .addCase(postAuth.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(postAuth.fulfilled, 
            (state, { payload }) => { 

            state.token = payload.accessToken;
            state.status = "idle";
    });

        builder
        .addCase(postAuth.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Failed to fetch books." })
            state.status = "idle";
    })
    }
})

export const { loginReducer, telDirtyReducer, passDirtyReducer, telReducer, passReducer, telErrorReducer, passErrorReducer, validFormReducer } = authSlice.actions;