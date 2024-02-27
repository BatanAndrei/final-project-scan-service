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
    let resultImage;
        
   //let test = url.match(/https(.*?)">(.*?)/)?.[0];

    //let news = dataDocuments[23].ok.content.markup;

    //let good = news.match(/https:\/\/[^\s\Z]+/i)?.[0]; //(/https:\/\/[^\s\Z]+/i)?.[0]

    //let check = good.match(/\.([^.]+)$|$/)[1].split('"')[0]
    //console.log(check)
    
    const getImageFromXml = (card) => {
        let xml = card?.ok.content.markup;
            let getLink = xml?.match(/https:\/\/[^\s\Z]+/i)?.[0]?.split('"')[0];
            let linkExtension = getLink?.match(/\.([^.]+)$|$/)[1];
            console.log(linkExtension)
                return getLink && (linkExtension == 'jpg' || linkExtension == 'webp' || linkExtension == 'jpeg' || linkExtension == 'png') ? resultImage = getLink : 'https://img.razrisyika.ru/kart/62/245105-gazeta-13.jpg';
    };

    const textParagraffFormat = (card) => {
        let xml = card.ok.content.markup;
            let div = document.createElement("div");
                div.innerHTML = xml;
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
                    <div className={styles.sizeImageDoc}><img className={styles.imageDoc} src={getImageFromXml(card)} alt='Фото новости'></img></div>
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