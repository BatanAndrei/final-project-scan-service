import { createAsyncThunk } from '@reduxjs/toolkit';


export const RequestGetAccountInfo = createAsyncThunk(
    "accountInfo/getAccountInfo", 
    async (accessToken, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

        const response = await fetch(`https://gateway.scan-interfax.ru/api/v1/account/info`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        const data = await response.json();
        
        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Faild request" 
            });
        }
    
        return data; // возврвщвет данные при успешном запросе
    }
);