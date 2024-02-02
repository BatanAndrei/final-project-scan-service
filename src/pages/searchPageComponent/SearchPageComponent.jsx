import styles from './searchPageComponent.module.css';
import documentPng from '../../Images/documentPng.png';
import foldersPng from '../../Images/foldersPng.png';
import manRocketPng from '../../Images/manRocketPng.png';


const SearchPageComponent = () => {
    return (
        <div className={styles.containerPage}>
            <div className={styles.blockSearch}>
                <div className={styles.titleBlockSearch}>
                    <h1 className={styles.textTitle}>Найдите необходимые<br/> данные в пару кликов.</h1>
                    <h2 className={styles.textSubTitle}>Задайте параметры поиска.<br/> Чем больше заполните, тем точнее поиск</h2>
                </div>
                <div className={styles.areaEnterSearchData}>
                    <div className={styles.fieldsDataSearch}>
                        <form className={styles.formFill}>
                            <div className={styles.inputSelectFilds}>
                                <div className={styles.mainFields}></div>
                                <div className={styles.dateFields}></div>
                            </div>
                            <div className={styles.checkboxButtonSearch}></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.blockImages}>
                <img className={styles.documentImg} src={documentPng}></img>
                <img className={styles.foldersImg} src={foldersPng}></img>
                <img className={styles.manRocketImg} src={manRocketPng}></img>
            </div>
        </div>
    )
};

export default SearchPageComponent;