import { createAsyncThunk } from '@reduxjs/toolkit';


export const RequestPostDocuments = createAsyncThunk(
    "documents/postDocuments", 
    async ({accessTokenDocuments}, thunkApi) => { 

        const response = await fetch(`https://gateway.scan-interfax.ru/api/v1/documents`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessTokenDocuments}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "ids": [
                    "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw="
                ]
            })
        });

        const data = await response.json();
        //console.log(data)
        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Ошибка загрузки" 
            });
        }
    
        return data; // возврвщвет данные при успешном запросе
    }
);