import styles from './displyedResultSearch.module.css';
import SimpleSliderResult from '../../components/caoruselResult/CaoruselResult';


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

                {/* <div className={styles.sliderBeforeLoad}>   //отображение сладера до загрузки данных
                    <div className={styles.arrowPrevDecoration}></div>
                    <div className={styles.blockTitleDataSlider}>
                        <h3 className={styles.texModifyTitleSlider}>Период</h3>
                        <h3 className={styles.texModifyTitleSlider}>Всего</h3>
                        <h3 className={styles.texModifyTitleSlider}>Риски</h3>
                    </div>
                    <div className={styles.bodySlider}>
                        <div className={styles.loader}></div>
                        <h3 className={styles.textModifyLoadData}>Загружаем данные</h3>
                    </div>
                    <div className={styles.arrowNextDecoration}></div>
                </div> */}

                <div className={styles.sliderAfterLoad}>           //отображение сладера после загрузки данных
                    <div className={styles.blockTitleDataSlider}>
                        <h3 className={styles.texModifyTitleSlider}>Период</h3>
                        <h3 className={styles.texModifyTitleSlider}>Всего</h3>
                        <h3 className={styles.texModifyTitleSlider}>Риски</h3>
                    </div>
                    <div className={styles.bodySlider}>
                        <SimpleSliderResult />
                    </div>
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