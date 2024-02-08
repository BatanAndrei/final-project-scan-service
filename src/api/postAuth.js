import { createAsyncThunk } from '@reduxjs/toolkit';

let registr = {
    login: "sf_student1",
    password: "4i2385j"
    };

export const postAuth = createAsyncThunk(
    "auth/postAuth", 
    async (_, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

        const response = await fetch(`https://gateway.scan-interfax.ru/api/v1/account/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify(registr)
        });

        const data = await response.json();
        
        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Failed to fetch request." 
            });
        }
    
        return data; // возврвщвет данные при успешном запросе
    }
);
