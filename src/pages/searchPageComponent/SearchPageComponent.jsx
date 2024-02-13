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
import DisplyedResultSearch from '../../components/displyedResultSearch/DisplyedResultSearch';



const SearchPageComponent = () => {

    const isActivated = useSelector(selectIsActivated);

    useEffect(() => {

    },[isActivated])

    return (
        <>
        {/* <DisplyedResultSearch /> */}
        <div className={styles.containerPage}>
            <div className={styles.blockSearch}>
                <div className={styles.titleBlockSearch}>
                    <h1 className={styles.textTitle}>Найдите необходимые<br/> данные в пару кликов.</h1>
                    <h2 className={styles.textSubTitle}>Задайте параметры поиска.<br/> Чем больше заполните, тем точнее поиск</h2>
                </div>
                <form className={styles.formFillData}>
                    <div className={styles.inputSelectFilds}>
                        <h2 className={styles.lableText}>ИНН компании *</h2>
                        <input className={styles.input} placeholder='10 цифр'/>
                        <h2 className={styles.lableText}>Тональность</h2>
                        <select name='tonality' className={styles.select}>
                            <option value='positive'>Позитианая</option>
                            <option value='negative'>Негативная</option>
                            <option value='any'>Любая</option> 
                        </select>
                        <h2 className={styles.lableText}>Количество документов в выдаче *</h2>
                        <input className={styles.input} placeholder='От 1 до 1000'/>
                        <h2 className={styles.lableText}>Диапазон поиска *</h2>
                        <div className={styles.dateFields}>
                            <input className={styles.inputDate} type="date"/>
                            <input className={styles.inputDate} type="date"/>
                        </div>
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
        </div>
        </>
    )
};

export default SearchPageComponent;