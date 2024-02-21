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
                    "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw=", "1:fmYoHEjQrRbQhz3RiUtm4oCh0JLRmtCLIyU10IzigqzRgGjQmCoR0JFg0YRhwrVzN9CxDUM50KcpdTbRiNCLwpjRkuKAphXRkVxh0JU50K5uWdC50L7RjX0C0KwQRsKp"
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