import React, { useEffect } from 'react';
import styles from './searchPageComponent.module.css';
import documentPng from '../../Images/documentPng.png';
import foldersPng from '../../Images/foldersPng.png';
import manRocketPng from '../../Images/manRocketPng.png';
import Checkbox from '../../components/checkbox/Checkbox';
import { listCheckbox } from '../../dataVariables/variables';
import MainButton from '../../components/mainButton/mainButton';
import { nameButtonSearch } from '../../dataVariables/variables';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsActivated, selectParamsPostHistograms } from '../../redux/selectors/selectors';
import { innReducer, innErrorReducer, deliveryDocReducer, deliveryDocErrorReducer, deteBeginReducer, deteEndReducer, deteErrorReducer, validFormSearchReducer, checkedBoxReducer0, checkedBoxReducer1, checkedBoxReducer2, checkedBoxReducer3, checkedBoxReducer4, checkedBoxReducer5, checkedBoxReducer6, tonalityReducer, isActivateResultPageReducer } from '../../redux/slices/histogramsSlice';
import { selectInnError, selectInnField, selectDeliveryDocField, selectDeliveryDocError, selectDateBegin, selectDateEnd, selectDateError, selectValidFormSearch, selectCheckedBox0, selectCheckedBox1, selectCheckedBox2, selectCheckedBox3, selectCheckedBox4, selectCheckedBox5, selectCheckedBox6, selectIsActivatedResultPage } from '../../redux/selectors/selectors';
import { RequestPostHistograms } from '../../api/RequestPostHistograms';
import { RequestPostObjectsearch } from '../../api/RequestPostObjectsearch';
import DisplyedResultSearch from '../../components/displyedResultSearch/DisplyedResultSearch';


const SearchPageComponent = () => {

    const dispatch = useDispatch();

    const paramsPostHistograms = useSelector(selectParamsPostHistograms);

    const isActivatedAccount = useSelector(selectIsActivated);
    const isActivatedResultPage = useSelector(selectIsActivatedResultPage);
    const innField = useSelector(selectInnField);
    const innError = useSelector(selectInnError);
    
    const deliveryDocField = useSelector(selectDeliveryDocField);
    const deliveryDocError = useSelector(selectDeliveryDocError);

    const dateBegin = useSelector(selectDateBegin);
    const dateEnd = useSelector(selectDateEnd);
    const dateError = useSelector(selectDateError);
    const validFormSearch = useSelector(selectValidFormSearch);

    const checkedBox0 = useSelector(selectCheckedBox0); 
    const checkedBox1 = useSelector(selectCheckedBox1);
    const checkedBox2 = useSelector(selectCheckedBox2); 
    const checkedBox3 = useSelector(selectCheckedBox3);
    const checkedBox4 = useSelector(selectCheckedBox4); 
    const checkedBox5 = useSelector(selectCheckedBox5);
    const checkedBox6 = useSelector(selectCheckedBox6);
    
    
    const CheckInn = (e) => {
        dispatch(innReducer(e.target.value));
        let result = false;
        if(!e.target.value) {
            dispatch(innErrorReducer('Обязательное поле'));
        }else if (/[^0-9]/.test(e.target.value)) {
            dispatch(innErrorReducer('Введите корректные данные'));
        }else if (e.target.value.length > 10) {
            dispatch(innErrorReducer('Введите корректные данные'));
        }else { 
            dispatch(innErrorReducer(''));
            
            const CheckDigit = (inn, coeff) => {
                let n = 0;
                for (let i in coeff) {
                    n += coeff[i] * inn[i];
                }
                return parseInt(n % 11 % 10);
            };
            switch (e.target.value.length) {
                case 10:
				let n10 = CheckDigit(e.target.value, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
				if (n10 === parseInt(e.target.value[9])) {
					result = true;
				}
				break;
            }
            if (!result) {
                dispatch(innErrorReducer('Неправильное контрольное число'));
            }
        };  
        return result;                                                    
    };


    const CheckDeliveryDoc = (e) => {
        dispatch(deliveryDocReducer(e.target.value));

        if(!e.target.value) {
            dispatch(deliveryDocErrorReducer('Обязательное поле'));
        }else if (/[^0-9]/.test(e.target.value)) {
            dispatch(deliveryDocErrorReducer('Введите корректные данные'));
        }else if (e.target.value <= 0 || e.target.value > 1000 ) {
            dispatch(deliveryDocErrorReducer('Введите корректные данные'));
        }else { 
            dispatch(deliveryDocErrorReducer(''));                        
        };                                                                 
    };


    const getDateFieldHiddenBegin = (e) => {
        dispatch(deteBeginReducer(e.target.value));
            let nowDate = new Date();
            let setDateBegin = new Date(e.target.value+ 'T00:00:00');

                if(nowDate >= setDateBegin && setDateBegin <= new Date(dateEnd+ 'T00:00:00')) {
                    dispatch(deteErrorReducer(''));
                }else {
                    dispatch(deteErrorReducer('Введите корректные данные'));
                }
    };


    const getDateFieldHiddenEnd = (e) => {
        dispatch(deteEndReducer(e.target.value));
            let nowDate = new Date();
            let setDateEnd = new Date(e.target.value+ 'T00:00:00');
            
                if(nowDate >= setDateEnd && setDateEnd >= new Date(dateBegin+ 'T00:00:00')) {
                    dispatch(deteErrorReducer(''));
                }else {
                    dispatch(deteErrorReducer('Введите корректные данные'));
                }
    };


    useEffect(() => {
        if(innError || deliveryDocError || dateError) {
            dispatch(validFormSearchReducer(false))
        }else {
            dispatch(validFormSearchReducer(true))
        }
    }, [innError, deliveryDocError, dateError]);
    

    const HeandleCheckBox = (e) => {
        switch (e.target.dataset.index) {
            case '0':
                if(e.target.checked === false) {
                    dispatch(checkedBoxReducer0(true));
                }else {
                    dispatch(checkedBoxReducer0(false));
                }
                break;

            case '1':
                if(e.target.checked === false) {
                    dispatch(checkedBoxReducer1(true));
                }else {
                    dispatch(checkedBoxReducer1(false));
                }
                break;

            case '2':
                if(e.target.checked === false) {
                    dispatch(checkedBoxReducer2(true));
                }else {
                    dispatch(checkedBoxReducer2(false));
                }
                break;

            case '3':
                if(e.target.checked === false) {
                    dispatch(checkedBoxReducer3(true));
                }else {
                    dispatch(checkedBoxReducer3(false));
                }
                break;

            case '4':
                if(e.target.checked === false) {
                    dispatch(checkedBoxReducer4(true));
                }else {
                    dispatch(checkedBoxReducer4(false));
                }
                break;

            case '5':
                if(e.target.checked === false) {
                    dispatch(checkedBoxReducer5(true));
                }else {
                    dispatch(checkedBoxReducer5(false));
                }
                break;

            case '6':
                if(e.target.checked === false) {
                    dispatch(checkedBoxReducer6(true));
                }else {
                    dispatch(checkedBoxReducer6(false));
                }
                break;
        }
    };


    const PostRequestSearch = (e) => {
        e.preventDefault();
        dispatch(RequestPostHistograms(paramsPostHistograms));
        dispatch(RequestPostObjectsearch(paramsPostHistograms));
        dispatch(isActivateResultPageReducer(true));
    };


    const HeandleSelect = (e) => {
        dispatch(tonalityReducer(e.target.value));
    }
    
    return (
        <>
        {(isActivatedAccount && isActivatedResultPage) && <DisplyedResultSearch /> || (isActivatedAccount && !isActivatedResultPage) && <div className={styles.containerPage}>
            <div className={styles.blockSearch}>
                <div className={styles.titleBlockSearch}>
                    <h1 className={styles.textTitle}>Найдите необходимые<br/> данные в пару кликов.</h1>
                    <h2 className={styles.textSubTitle}>Задайте параметры поиска.<br/> Чем больше заполните, тем точнее поиск</h2>
                </div>
                <form className={styles.formFillData}>
                    <div className={styles.inputSelectFilds}>

                        <h2 className={styles.lableTextInn}>ИНН компании <span className={!innError ? styles.starRequired : styles.starRequiredRed}>*</span></h2>
                        <input className={(innError !== 'Обязательное поле' && innError !== 'Введите корректные данные') ? styles.input : styles.inputError} value={innField} onChange={(e) => CheckInn(e)} type='text' placeholder='10 цифр'/>
                        <div className={styles.textErrorMessage}><h3 className={styles.error}>{innError}</h3></div>

                        <h2 className={styles.lableText}>Тональность</h2>
                        <select onClick={(e) => HeandleSelect(e)} name='tonality' className={styles.select}>
                            <option value='positive'>Позитианая</option>
                            <option value='negative'>Негативная</option>
                            <option value='any'>Любая</option> 
                        </select>
                        <div className={styles.textErrorMessage}></div>

                        <h2 className={styles.lableText}>Количество документов в выдаче <span className={!deliveryDocError ? styles.starRequired : styles.starRequiredRed}>*</span></h2>
                        <input className={(deliveryDocError !== 'Обязательное поле' && deliveryDocError !== 'Введите корректные данные') ? styles.input : styles.inputError} value={deliveryDocField} onChange={(e) => CheckDeliveryDoc(e)} type='text' placeholder='От 1 до 1000'/>
                        <div className={styles.textErrorMessage}><h3 className={styles.error}>{deliveryDocError}</h3></div>

                        <h2 className={styles.lableText}>Диапазон поиска <span className={!dateError ? styles.starRequired : styles.starRequiredRed}>*</span></h2>
                        <div className={styles.dateFields}>
                            <input type='text' value={dateBegin} disabled className={dateError !== 'Введите корректные данные' ? styles.inputDateFake : styles.inputDateError} placeholder='Дата начала'></input>
                            <input className={styles.inputDateHidden} onChange={(e) => getDateFieldHiddenBegin(e)} type="date"/>
                            <input type='text' value={dateEnd} disabled className={dateError !== 'Введите корректные данные' ? styles.inputDateFake : styles.inputDateError} placeholder='Дата конца'></input>
                            <input className={styles.inputDateHidden} onChange={(e) => getDateFieldHiddenEnd(e)} type="date"/>
                        </div>
                        <div className={styles.textErrorMessageDate}><h3 className={styles.error}>{dateError}</h3></div>

                    </div>
                    <div className={styles.checkboxButtonSearch}>
                        <label className={!checkedBox0 ? styles.label : styles.lableChecked}>
                            <Checkbox click={HeandleCheckBox} id={listCheckbox[0].id}/>
                            <span className={!checkedBox0 ? styles.fake : styles.fakeChecked}></span>
                            <span className={styles.color}>{listCheckbox[0].lable}</span>
                        </label>
                        <label className={!checkedBox1 ? styles.label : styles.lableChecked}>
                            <Checkbox click={HeandleCheckBox} id={listCheckbox[1].id}/>
                            <span className={!checkedBox1 ? styles.fake : styles.fakeChecked}></span>
                            <span className={styles.color}>{listCheckbox[1].lable}</span>
                        </label>
                        <label className={!checkedBox2 ? styles.label : styles.lableChecked}>
                            <Checkbox click={HeandleCheckBox} id={listCheckbox[2].id}/>
                            <span className={!checkedBox2 ? styles.fake : styles.fakeChecked}></span>
                            <span className={styles.color}>{listCheckbox[2].lable}</span>
                        </label>
                        <label className={!checkedBox3 ? styles.label : styles.lableChecked}>
                            <Checkbox click={HeandleCheckBox} id={listCheckbox[3].id}/>
                            <span className={!checkedBox3 ? styles.fake : styles.fakeChecked}></span>
                            <span className={styles.color}>{listCheckbox[3].lable}</span>
                        </label>
                        <label className={!checkedBox4 ? styles.label : styles.lableChecked}>
                            <Checkbox click={HeandleCheckBox} id={listCheckbox[4].id}/>
                            <span className={!checkedBox4 ? styles.fake : styles.fakeChecked}></span>
                            <span className={styles.color}>{listCheckbox[4].lable}</span>
                        </label>
                        <label className={!checkedBox5 ? styles.label : styles.lableChecked}>
                            <Checkbox click={HeandleCheckBox} id={listCheckbox[5].id}/>
                            <span className={!checkedBox5 ? styles.fake : styles.fakeChecked}></span>
                            <span className={styles.color}>{listCheckbox[5].lable}</span>
                        </label>
                        <label className={!checkedBox6 ? styles.label : styles.lableChecked}>
                            <Checkbox click={HeandleCheckBox} id={listCheckbox[6].id}/>
                            <span className={!checkedBox6 ? styles.fake : styles.fakeChecked}></span>
                            <span className={styles.color}>{listCheckbox[6].lable}</span>
                        </label>     
                        <div className={validFormSearch ? styles.buttonModifyReqData : styles.buttonModifyReqDataDisable}>
                            <MainButton disabled={!validFormSearch} click={PostRequestSearch} name={nameButtonSearch} />
                        </div>
                        <h3 className={styles.textForFieldsRequired}>* Обязательные к заполнению поля</h3>
                    </div>
                    
                </form>
            </div>
            <div className={styles.blockImages}>
                <img className={styles.documentImg} src={documentPng}></img>
                <img className={styles.foldersImg} src={foldersPng}></img>
                <img className={styles.manRocketImg} src={manRocketPng}></img>
            </div>
    </div>}
        </>
    )
};

export default SearchPageComponent;