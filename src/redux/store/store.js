import { configureStore } from '@reduxjs/toolkit';
import { generalSlice } from '../slices/slice';


export const store = configureStore({
    reducer: {
        userExtraReducer: generalSlice.reducer,
    },
});


