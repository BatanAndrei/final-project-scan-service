import { createAsyncThunk } from '@reduxjs/toolkit';


export const getUserInfo = createAsyncThunk(
    "general/getUserInfo", 
    async (_, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

        const data = await response.json();

        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Failed to fetch request." 
            });
        }
    
        return data; // возврвщвет данные при успешном запросе
    }
);
