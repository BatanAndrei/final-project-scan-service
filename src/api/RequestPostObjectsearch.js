import { createAsyncThunk } from '@reduxjs/toolkit';


export const RequestPostObjectsearch = createAsyncThunk(
    "objectsearch/postObjectsearch", 
    async ({ accessTokenHistograms, innField, tonalityDataInput, deliveryDocField, dateBegin, dateEnd, checkedBox0, checkedBox1, checkedBox2, checkedBox3, checkedBox4, checkedBox5, checkedBox6, }, thunkApi) => { 

        const response = await fetch(`https://gateway.scan-interfax.ru/api/v1/objectsearch`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessTokenHistograms}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "issueDateInterval": {
                    "startDate": `${dateBegin}T00:00:00+03:00`,
                    "endDate": `${dateEnd}T23:59:59+03:00`
                },
                "searchContext": {                     
                    "targetSearchEntitiesContext": { 
                    "targetSearchEntities": [       
                        {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": innField,            
                        "maxFullness": checkedBox0,         
                        "inBusinessNews": checkedBox1 
                        }
                    ],
                    "onlyMainRole": checkedBox2,    
                    "tonality": tonalityDataInput,             
                    "onlyWithRiskFactors": checkedBox3,  
                    },
                },
                "attributeFilters": {                     
                    "excludeTechNews": checkedBox4,         
                    "excludeAnnouncements": checkedBox5,   
                    "excludeDigests": checkedBox6       
                },
                "similarMode": "duplicates",
                "limit": deliveryDocField,           
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
        
        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Неправильный " 
            });
        }
    
        return data; // возврвщвет данные при успешном запросе
    }
);