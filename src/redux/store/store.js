import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { authSlice } from '../slices/authSlice';
import { accountInfoSlice } from '../slices/accountInfoSlice';
import { histogramsSlice } from '../slices/histogramsSlice';
import { objectsearchSlice } from '../slices/objectsearchSlice';
import { documentsSlice } from '../slices/documentsSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authExtraReducer', 'histogramsExtraReducers', 'documentsExtraReducers']
}

const reducer = combineReducers({
    authExtraReducer: authSlice.reducer,
    isActivatedReducer: authSlice.reducer,
    loginReducer: authSlice.reducer,
    logOutReducer: authSlice.reducer,
    passwordReducer: authSlice.reducer,
    loginErrorReducer: authSlice.reducer,
    passwordErrorReducer: authSlice.reducer,
    validFormReducer: authSlice.reducer,
    cleanErrorMessageReducer: authSlice.reducer,

    accountInfoExtraReducer: accountInfoSlice.reducer,
    tariffBeginnerReducer: accountInfoSlice.reducer,
    tariffProReducer: accountInfoSlice.reducer,
    tariffBusinessReducer: accountInfoSlice.reducer,

    histogramsExtraReducers: histogramsSlice.reducer,
    isActivateResultPageReducer: histogramsSlice.reducer,
    innReducer: histogramsSlice.reducer,
    innErrorReducer: histogramsSlice.reducer,
    tonalityReducer: histogramsSlice.reducer,
    deliveryDocReducer: histogramsSlice.reducer, 
    deliveryDocErrorReducer: histogramsSlice.reducer,
    deteBeginReducer: histogramsSlice.reducer, 
    deteEndReducer: histogramsSlice.reducer, 
    deteErrorReducer: histogramsSlice.reducer,
    validFormSearchReducer: histogramsSlice.reducer,
    checkedBoxReducer0: histogramsSlice.reducer,
    checkedBoxReducer1: histogramsSlice.reducer,
    checkedBoxReducer2: histogramsSlice.reducer,
    checkedBoxReducer3: histogramsSlice.reducer,
    checkedBoxReducer4: histogramsSlice.reducer,
    checkedBoxReducer5: histogramsSlice.reducer,
    checkedBoxReducer6: histogramsSlice.reducer,
    getAccessTokenHistogramsReducer: histogramsSlice.reducer,

    objectsearchExtraReducers: objectsearchSlice.reducer,

    documentsExtraReducers: documentsSlice.reducer,
    getAccessTokenDocumentsReducer: documentsSlice.reducer,
    getEncodedIdReducer: documentsSlice.reducer, 
    resetDataDocumentsReducer: documentsSlice.reducer,
    mekeDocumentsPartsReducer: documentsSlice.reducer,
    resetDocumentsPartsReducer: documentsSlice.reducer,
    isActivatedBurgerMenuReducer: documentsSlice.reducer,
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





