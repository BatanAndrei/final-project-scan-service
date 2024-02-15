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
import { selectIsActivated } from '../../redux/selectors/selectors';
import { innReducer, innErrorReducer, deliveryDocReducer, deliveryDocErrorReducer, deteBeginReducer, deteEndReducer, deteErrorReducer } from '../../redux/slices/histogramsSlice';
import { selectInnError, selectInnField, selectDeliveryDocField, selectDeliveryDocError, selectDateBegin, selectDateEnd, selectDateError } from '../../redux/selectors/selectors';
import DisplyedResultSearch from '../../components/displyedResultSearch/DisplyedResultSearch';


const SearchPageComponent = () => {

    const dispatch = useDispatch();

    const isActivated = useSelector(selectIsActivated);
    const innField = useSelector(selectInnField);
    const innError = useSelector(selectInnError);

    const deliveryDocField = useSelector(selectDeliveryDocField);
    const deliveryDocError = useSelector(selectDeliveryDocError);

    const dateBegin = useSelector(selectDateBegin);
    const dateEnd = useSelector(selectDateEnd);
    const dateError = useSelector(selectDateError);

    const CheckInn = (e) => {
        dispatch(innReducer(e.target.value));
        
        if(!e.target.value) {
            dispatch(innErrorReducer('Обязательное поле'));
        }else if (/[^0-9]/.test(e.target.value)) {
            dispatch(innErrorReducer('Введите корректные данные'));
        }else if (e.target.value.length > 10) {
            dispatch(innErrorReducer('Введите корректные данные'));
        }else { 
            dispatch(innErrorReducer(''));                         
        };                                                      
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
            dispatch(deliveryDocErrorReducer(''));                         //              sf_student1
        };                                                                 //             4i2385j
    };

    const getDateFieldHiddenBegin = (e) => {
        dispatch(deteBeginReducer(e.target.value));
    }

    const getDateFieldHiddenEnd = (e) => {
        dispatch(deteEndReducer(e.target.value));
    }

    return (
        <>
        {/* <DisplyedResultSearch /> */}
        {isActivated && <div className={styles.containerPage}>
            <div className={styles.blockSearch}>
                <div className={styles.titleBlockSearch}>
                    <h1 className={styles.textTitle}>Найдите необходимые<br/> данные в пару кликов.</h1>
                    <h2 className={styles.textSubTitle}>Задайте параметры поиска.<br/> Чем больше заполните, тем точнее поиск</h2>
                </div>
                <form className={styles.formFillData}>
                    <div className={styles.inputSelectFilds}>

                        <h2 className={styles.lableTextInn}>ИНН компании <span className={!innError ? styles.starRequired : styles.starRequiredRed}>*</span></h2>
                        <input className={!innError ? styles.input : styles.inputError} value={innField} onChange={(e) => CheckInn(e)} type='text' placeholder='10 цифр'/>
                        <div className={styles.textErrorMessage}><h3 className={styles.error}>{innError}</h3></div>

                        <h2 className={styles.lableText}>Тональность</h2>
                        <select name='tonality' className={styles.select}>
                            <option value='positive'>Позитианая</option>
                            <option value='negative'>Негативная</option>
                            <option value='any'>Любая</option> 
                        </select>
                        <div className={styles.textErrorMessage}></div>

                        <h2 className={styles.lableText}>Количество документов в выдаче <span className={!deliveryDocError ? styles.starRequired : styles.starRequiredRed}>*</span></h2>
                        <input className={!deliveryDocError ? styles.input : styles.inputError} value={deliveryDocField} onChange={(e) => CheckDeliveryDoc(e)} type='text' placeholder='От 1 до 1000'/>
                        <div className={styles.textErrorMessage}><h3 className={styles.error}>{deliveryDocError}</h3></div>

                        <h2 className={styles.lableText}>Диапазон поиска <span className={!innError ? styles.starRequired : styles.starRequiredRed}>*</span></h2>
                        <div className={styles.dateFields}>
                            <input type='text' value={dateBegin} className={!innError ? styles.inputDateFake : styles.inputDateError} placeholder='Дата начала'></input>
                            <input className={styles.inputDateHidden} onChange={(e) => getDateFieldHiddenBegin(e)} type="date"/>
                            <input type='text' value={dateEnd} className={!innError ? styles.inputDateFake : styles.inputDateError} placeholder='Дата конца'></input>
                            <input className={styles.inputDateHidden} onChange={(e) => getDateFieldHiddenEnd(e)} type="date"/>
                        </div>
                        <div className={styles.textErrorMessageDate}><h3 className={styles.error}>{innError}</h3></div>

                    </div>
                    <div className={styles.checkboxButtonSearch}>
                        {listCheckbox.map((checkbox) => <Checkbox key={checkbox.id} name={checkbox.lable} />)}
                        <div className={styles.buttonModifyReqData}>
                            <MainButton name={nameButtonSearch} />
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