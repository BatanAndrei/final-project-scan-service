import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { authSlice } from '../slices/authSlice';
import { accountInfoSlice } from '../slices/accountInfoSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    authExtraReducer: authSlice.reducer,
    isActivatedReducer: authSlice.reducer,
    logOutReducer: authSlice.reducer,
    LoginReducer: authSlice.reducer,
    passwordReducer: authSlice.reducer,
    loginErrorReducer: authSlice.reducer,
    passwordErrorReducer: authSlice.reducer,
    validFormReducer: authSlice.reducer,
    cleanErrorMessageReducer: authSlice.reducer,

    accountInfoExtraReducer: accountInfoSlice.reducer,
    tariffBeginnerReducer: accountInfoSlice.reducer,
    tariffProReducer: accountInfoSlice.reducer,
    tariffBusinessReducer: accountInfoSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);





