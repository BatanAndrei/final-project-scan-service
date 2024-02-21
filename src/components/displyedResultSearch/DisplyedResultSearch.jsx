import styles from './displyedResultSearch.module.css';
import SimpleSliderResult from '../../components/caoruselResult/CaoruselResult';
import MainButton from '../../components/mainButton/mainButton';
import { nameButtonDispleyMore, nameButtonReadSource } from '../../dataVariables/variables';
import { Link } from 'react-router-dom';
import { selectDataHistograms, selectDataObjectsearch, selectStatusHistograms } from '../../redux/selectors/selectors';
import { useSelector } from 'react-redux';


const DisplyedResultSearch = () => {

    const statusHistograms = useSelector(selectStatusHistograms)
    const dataHistograms = useSelector(selectDataHistograms); 
    const dataObjectsearch = useSelector(selectDataObjectsearch);
    
    let infoQuantityOptions = dataHistograms.data?.[0]?.data?.length;

    return (
        <div className={styles.containerResult}>
            <div className={styles.infoAboutSearch}>
                <div className={styles.infoTitle}>
                    {
                    statusHistograms !== 'loading' ? 
                    <div>
                        <h1 className={styles.textModifySearchSoon}>Поиск завершён</h1>
                        <h2 className={styles.textModifyWaitTime}>Резулультат в общей сводке.</h2></div> :
                    <div>
                        <h1 className={styles.textModifySearchSoon}>Ищем. Скоро<br/> будут результаты</h1>
                        <h2 className={styles.textModifyWaitTime}>Поиск может занять некоторое время,<br/> просим сохранять терпение.</h2>
                    </div>
                    }
                </div>
                <div className={styles.infoImage}></div>
            </div>
            <div className={styles.wrapperSlider}>
                <h2 className={styles.textModifyGeneralSummary}>Общая сводка</h2>
                <h3 className={styles.textModifyOptionsFound}>{`Найдено ${infoQuantityOptions ? infoQuantityOptions : 0} вариантов`}</h3>
                {
                statusHistograms === 'loading' && 
                <div className={styles.sliderBeforeLoad}>   
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
                </div> || 
                !infoQuantityOptions && 
                <div className={styles.sliderBeforeLoad}>   
                    <div className={styles.arrowPrevDecoration}></div>
                    <div className={styles.blockTitleDataSlider}>
                        <h3 className={styles.texModifyTitleSlider}>Период</h3>
                        <h3 className={styles.texModifyTitleSlider}>Всего</h3>
                        <h3 className={styles.texModifyTitleSlider}>Риски</h3>
                    </div>
                    <div className={styles.bodySlider}>
                        <h3 className={styles.textModifyEmptyResult}>Результат не найден</h3>
                    </div>
                    <div className={styles.arrowNextDecoration}></div>
                </div> ||
                dataHistograms &&
                <div className={styles.sliderAfterLoad}>           
                    <div className={styles.blockTitleDataSlider}>
                        <h3 className={styles.texModifyTitleSlider}>Период</h3>
                        <h3 className={styles.texModifyTitleSlider}>Всего</h3>
                        <h3 className={styles.texModifyTitleSlider}>Риски</h3>
                    </div>
                    <div className={styles.bodySlider}>
                        <SimpleSliderResult />
                    </div>
                </div> 
                }
            </div>
            <h2 className={styles.textModifyListDoc}>Список документов</h2>
            <div className={styles.wrapperDocuments}>
                <div className={styles.cardDoc}>
                    <div className={styles.dateWithSource}>
                        <h3 className={styles.infoDate}>13.09.2021</h3>
                        <h3 className={styles.textLinkSource}><Link className={styles.linkSource} to='#'>Комсомольская правда KP.RU</Link></h3>
                    </div>
                    <h2 className={styles.titleNameDoc}>Скиллфэктори - лучшая онлайн-школа<br/> для будущих айтишников</h2>
                    <div className={styles.badgeCategoryDoc}><h2 className={styles.textBadge}>Технические новости</h2></div>
                    <div className={styles.imageDoc}></div>
                    <p className={styles.textParagrafDoc}>SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                    <br/>
                    <br/>
                    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.</p>
                    <div className={styles.footerDoc}>
                        <div className={styles.buttonModifyReadSource}>
                            <MainButton name={nameButtonReadSource} />
                        </div>
                        <h3 className={styles.quantityWords}>2 543 слова</h3>
                    </div>
                </div>
            </div>
            <div className={styles.buttonModifyDispleyMore}>
                <MainButton name={nameButtonDispleyMore} />
            </div>
        </div>
    )
};

export default DisplyedResultSearch;