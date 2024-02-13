import { createAsyncThunk } from '@reduxjs/toolkit';

    /* let registr = {
        login: "sf_student1", //     sf_student1
        password: "4i2385j"  //     4i2385j
        }; */

export const RequestPostAuth = createAsyncThunk(
    "auth/postAuth", 
    async ({login, password}, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

        const response = await fetch(`https://gateway.scan-interfax.ru/api/v1/account/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
                })
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
