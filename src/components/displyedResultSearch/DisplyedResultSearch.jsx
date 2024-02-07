import styles from './displyedResultSearch.module.css';


const DisplyedResultSearch = () => {
    return (
        <div className={styles.containerResult}>
            <div className={styles.infoAboutSearch}>
                <div className={styles.infoTitle}>
                    {/* <h1 className={styles.textModifySearchSoon}>Поиск завершён</h1>
                    <h2 className={styles.textModifyWaitTime}>Резулультат в общей сводке.</h2> */}
                    <h1 className={styles.textModifySearchSoon}>Ищем. Скоро<br/> будут результаты</h1>
                    <h2 className={styles.textModifyWaitTime}>Поиск может занять некоторое время,<br/> просим сохранять терпение.</h2>
                </div>
                <div className={styles.infoImage}></div>
            </div>
            <div className={styles.wrapperSlider}>
                <h2 className={styles.textModifyGeneralSummary}>Общая сводка</h2>
                <h3 className={styles.textModifyOptionsFound}>Найдено 4 221 вариантов</h3>
                <div className={styles.slider}>
                    <div className={styles.titleDataSlider}></div>
                </div>
            </div>
            <h2 className={styles.textModifyListDoc}>Список документов</h2>
            <div className={styles.wrapperDocuments}>
                <div className={styles.cardDoc}></div>
                <div className={styles.cardDoc}></div>
            </div>
        </div>
    )
};

export default DisplyedResultSearch;