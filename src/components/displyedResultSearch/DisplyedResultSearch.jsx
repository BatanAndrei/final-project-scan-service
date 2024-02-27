import styles from './displyedResultSearch.module.css';
import SimpleSliderResult from '../../components/caoruselResult/CaoruselResult';
import MainButton from '../../components/mainButton/mainButton';
import { nameButtonDispleyMore, nameButtonReadSource } from '../../dataVariables/variables';
import { Link } from 'react-router-dom';
import { selectDataHistograms, selectDataObjectsearch, selectStatusHistograms, selectDataDocuments, selectParamsDocuments, selectListEncodedID, selectStatusDocuments } from '../../redux/selectors/selectors';
import { getEncodedIdReducer } from '../../redux/slices/documentsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RequestPostDocuments } from '../../api/RequestPostDocuments';
import { useEffect } from 'react';


const DisplyedResultSearch = () => {

    const dispatch = useDispatch();

    const statusDocuments = useSelector(selectStatusDocuments);
    const statusHistograms = useSelector(selectStatusHistograms);
    const dataHistograms = useSelector(selectDataHistograms); 
    const dataObjectsearch = useSelector(selectDataObjectsearch);
    const dataDocuments = useSelector(selectDataDocuments);
    const paramsDocuments = useSelector(selectParamsDocuments);
    const listEncodedID = useSelector(selectListEncodedID);
    let rsultText;
        
    let url = '<?xml version=\"1.0\" encoding=\"utf-8\"?><scandoc><sentence><entity type=\"theme\" local-id=\"1\"><entity type=\"theme\" local-id=\"5\">Медведь напал на жителя <entity type=\"location\" local-id=\"6\">Приморья</entity>, пострадавший госпитализирован, - сообщает \"Вести: Приморье\" со ссылкой на <entity type=\"company\" local-id=\"0\">\"Интерфакс-Дальний Восток\"</entity>. </entity></entity></sentence><sentence>Сотрудники полиции проводят проверку по факту инцидента, связанного с нападением медведя на жителя <entity type=\"location\" local-id=\"7\">Уссурийска </entity>в лесу, в окрестностях <entity type=\"location\" local-id=\"8\">села Яконовка</entity>. </sentence><sentence><entity type=\"theme\" local-id=\"2\">Пострадавшего госпитализировали в реанимационное отделение городской больницы.</p>\r\n\r\n<p></entity></sentence><sentence>По данным медиков, он прооперирован, сейчас его жизни ничто не угрожает. </sentence><sentence><entity type=\"theme\" local-id=\"4\">Полицейские установили, что у мужчины есть разрешение на охоту, оружие должным образом зарегистрировано. </entity></sentence><sentence>Обстоятельства случившегося выясняются.</p>\r\n\r\n<p></sentence><sentence><entity type=\"theme\" local-id=\"3\">Напомним, ранее сообщалось, что в минувшие выходные в окрестностях <entity type=\"location\" local-id=\"7\">Уссурийска</entity>, в районе <entity type=\"location\" local-id=\"9\">села Кроуновка </entity>на охотника напал тигр, пострадавший госпитализирован.</p>\r\n</div>\r\n                                                    <div></entity></sentence><sentence>Текст:\r\n                                            ГТРК \"Владивосток\"\r\n                                        </div>\r\n                \r\n                \r\n                <div>\r\n\r\n                    \r\n                    \r\n                    \r\n                </div>\r\n            </div>\r\n</data>\r\n\r\n</sentence><br><img src=\"https://storage.scan-interfax.ru/images/1%3A0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKn0KjQlsKu0K%2FSkdGXfOKAsF3QkjrRnCRmGCFFBybQoNGL0ZMhEFkC4oCYaNC9a9GO0KFYwqwOeNGO0JdUDGzihKJXTNC%2B0ZzRinE%3D\"></scandoc>';

    let test = url.match(/https(.*?)">(.*?)/)?.[0];

    let news = dataDocuments[9].ok.content.markup;

    let good = news.match(/https:\/\/[^\s\Z]+/i)?.[0];
    console.log(good)

    const textParagraffFormat = (card) => {
        let html = card.ok.content.markup;
            let div = document.createElement("div");
                div.innerHTML = html;
                    let text = div.textContent || div.innerText || "";
                        return rsultText = text.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "").length > 730 ? text.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "").slice(0, 730) + ' . . .' : text.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
                    };

    let infoQuantityOptions = dataHistograms.data?.[0]?.data?.length;

    useEffect(() => {
        dispatch(getEncodedIdReducer(dataObjectsearch.items?.map((id) => id.encodedId)));
    }, [dataHistograms, dataObjectsearch]);

    useEffect(() => {
        if(listEncodedID?.length) {
            dispatch(RequestPostDocuments(paramsDocuments));
        }
    }, [listEncodedID]);

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

                {dataDocuments?.map((card, index) => <div key={index} className={styles.cardDoc}>
                    <div className={styles.dateWithSource}>
                        <h3 className={styles.infoDate}>{card.ok.issueDate.split('T')[0].replace(/\-/g, '.')}</h3>
                        <h3 className={styles.textLinkSource}><Link className={styles.linkSource} target="_blank" to={card.ok.url === '' ? 'https://nicepage.com/ru/ht/307440/zona-stroitelstva-sayta-html-shablon?sscid=21k8_r9ua4&' : card.ok.url}>{card.ok.source.name.length > 45 ? card.ok.source.name.slice(0, 45) + ' . . .' : card.ok.source.name}</Link></h3>
                    </div>
                    <h2 className={styles.titleNameDoc}>{card.ok.title.text.length > 73 ? card.ok.title.text.slice(0, 73) + '. . .' : card.ok.title.text}</h2>
                    <div className={(card.ok.attributes.isTechNews || card.ok.attributes.isAnnouncement || card.ok.attributes.isDigest) ? styles.badgeCategoryDoc : styles.badgeCategoryDocOpacity}><h2 className={styles.textBadge}>{card.ok.attributes.isTechNews && 'технические новости' || card.ok.attributes.isAnnouncement && 'Анонсы и события' || card.ok.attributes.isDigest && 'Сводки новостей'}</h2></div>  
                    <div className={styles.sizeImageDoc}><img className={styles.imageDoc} src={card.ok.content.markup.match(/https:\/\/[^\s\Z]+/i)?.[0] ? card.ok.content.markup.match(/https:\/\/[^\s\Z]+/i)?.[0] : 'https://media.istockphoto.com/id/1478408446/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80-%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%B0-%D1%81-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%BE%D0%BC-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%BC-%D1%81%D1%82%D0%BE%D0%BB%D0%B5-%D1%81.jpg?s=612x612&w=0&k=20&c=hlgj1WeJubuZTUwoG-TFZPWTb6vm4LKfJy1b5wzhISk='} alt='Картинка документа'></img></div>
                    <p className={styles.textParagrafDoc}>{textParagraffFormat(card)}</p>
                    <div className={styles.footerDoc}>
                        <div className={styles.buttonModifyReadSource}>
                            <Link target="_blank" to={card.ok.url === '' ? 'https://nicepage.com/ru/ht/307440/zona-stroitelstva-sayta-html-shablon?sscid=21k8_r9ua4&' : card.ok.url}><MainButton name={nameButtonReadSource} /></Link>
                        </div>
                        <h3 className={styles.quantityWords}>{card.ok.attributes.wordCount} слова</h3>
                    </div>
                </div>)}
            </div>
            <div className={statusDocuments === 'loading' ? styles.buttonModifyDispleyMoreDisabled : styles.buttonModifyDispleyMore}>
                <MainButton disabled={statusDocuments === 'loading'} name={nameButtonDispleyMore} />
            </div>
        </div>
    )
};

export default DisplyedResultSearch;