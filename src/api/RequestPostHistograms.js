import { createAsyncThunk } from '@reduxjs/toolkit';


export const RequestPostHistograms = createAsyncThunk(
    "auth/postAuth", 
    async (accessToken, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

        const response = await fetch(`https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "issueDateInterval": {
                    "startDate": "2024-02-01T00:00:00+03:00", //поле начало даты
                    "endDate": "2024-02-15T23:59:59+03:00"   //поле конец даты
                },
                "searchContext": {                     
                    "targetSearchEntitiesContext": { 
                    "targetSearchEntities": [       
                        {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": 7710137066,               //поле ИНН
                        "maxFullness": true,             //чек признак максимальной полноты !!!
                        "inBusinessNews": null           //чек упоминание в бизнесс-контексте !!!
                        }
                    ],
                    "onlyMainRole": true,                 //чек главная роль в публикации !!!
                    "tonality": "any",                     //поле тоналити
                    "onlyWithRiskFactors": false,         //чек публикация только с риск факторами !!!
                    },
                },
                "attributeFilters": {                     
                    "excludeTechNews": true,         //чек включать технические новости рынков !!!
                    "excludeAnnouncements": true,    //чек включать анонсы и календари !!!
                    "excludeDigests": true           //чек включать сводки новостей !!!
                },
                "similarMode": "duplicates",
                "limit": 1000,                        //поле Количество документов в выдаче 
                "sortType": "sourceInfluence",
                "sortDirectionType": "desc",
                "intervalType": "month",
                "histogramTypes": [
                    "totalDocuments",
                    "riskFactors"
                ]
                })
        });

        const data = await response.json();
        console.log(data)
        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Неправильный " 
            });
        }
    
        return data; // возврвщвет данные при успешном запросе
    }
);