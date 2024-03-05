import styles from './homePageComponent.module.css';
import imageAboutSite from '../../Images/imageAboutSite.jpg';
import pictureUnderCarousel from '../../Images/pictureUnderCarousel.jpg';
import MainButton from '../../components/mainButton/MainButton';
import { nameButtonReqData, nameButtonMoreDetail, nameButtonPersonalArea } from '../../dataVariables/variables';
import SimpleSliderHome from '../../components/carouselHome/CarouselHome';
import lamp from '../../Images/lamp.png';
import target from '../../Images/target.png';
import laptop from '../../Images/laptop.png';
import galochka from '../../Images/galochka.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsActivated, selectTariffBeginner, selectTariffPro, selectTariffBusiness } from '../../redux/selectors/selectors';
import { tariffBeginnerReducer, tariffProReducer, tariffBusinessReducer } from '../../redux/slices/accountInfoSlice';
import { deteErrorReducer, deliveryDocErrorReducer, innErrorReducer } from '../../redux/slices/histogramsSlice';


const HomePageComponent = () => {

    const isActivated = useSelector(selectIsActivated);
    const tariffBeginner = useSelector(selectTariffBeginner)
    const tariffPro = useSelector(selectTariffPro)
    const tariffBusiness = useSelector(selectTariffBusiness)

    const dispatch = useDispatch();

    const setDefaultData = () => {
        dispatch(innErrorReducer(' '));
        dispatch(deliveryDocErrorReducer(' '));
        dispatch(deteErrorReducer(' '));
    };
        
    const ChooseTariffBeginner = () => {
        dispatch(tariffBeginnerReducer());
    };

    const ChooseTariffPro = () => {
        dispatch(tariffProReducer());
    };

    const ChooseTariffBusiness = () => {
        dispatch(tariffBusinessReducer());
    }

    return (
        <>
            <div className={styles.homeContainer}>
                <div className={styles.blockMainAboutSite}>
                    <div className={styles.mainAboutSiteText}>
                        <h1 className={styles.titleMainAboutSite}>сервис по поиску<br/> публикаций<br/> о компании<br/> по его инн</h1>
                        <h2 className={styles.subtitleMainAboutSite}>Комплексный анализ публикаций, получение данных<br/> в формате PDF на электронную почту.</h2>
                        {isActivated && <div className={styles.buttonModifyReqData}>
                            <Link to='/search'><MainButton click={setDefaultData} name={nameButtonReqData} /></Link>
                        </div>}
                    </div>
                    <div className={styles.mainAboutSitePicture}>
                        <img className={styles.sizeImage} src={imageAboutSite} alt='Картинка о сайте'></img>
                    </div>
                </div>
                <div className={styles.marginMobileWhyUs}><h2 className={styles.textTitleBlockName}>ПОЧЕМУ ИМЕННО МЫ</h2></div>
                <div className={styles.blockCarousel}>
                    <SimpleSliderHome />
                </div>
                <div className={styles.blockPictureUnderCarousel}>
                    <img className={styles.sizeImageUnderCaorusel} src={pictureUnderCarousel} alt='Картинка о сайте'></img>
                </div>
                <div className={styles.marginMobileOurRates}><h2 className={styles.textTitleBlockName}>НАШИ ТАРИФЫ</h2></div>
                <div className={styles.blockTariffs}>
                    <div className={styles.tariffItem} onClick={ChooseTariffBeginner}>
                        <div className={styles.headTariffItem+' '+styles.beginner}>
                            <div className={styles.titleTariffItem}>
                                <h2 className={styles.nameTariffText}>Beginner</h2>
                                <h3 className={styles.descriptionTariffText}>Для небольшого исследования</h3>
                            </div>
                            <div className={styles.headTariffItemIcon}>
                                <img className={styles.marginIconLamp} src={lamp} alt='лампочка'></img>
                            </div>
                        </div>
                        <div className={tariffBeginner ? styles.mainTariffItem+' '+styles.selectedTariffBeginer : styles.mainTariffItem}>
                            <div className={styles.containerBadge}>
                                {tariffBeginner && <div className={styles.badge}>Текущий тариф</div>}
                            </div>
                            <h2 className={styles.price}>799 ₽ &ensp;<span className={styles.priceСrossed}>1 200 ₽</span></h2>
                            <h3 className={styles.paymentMethod+' '+styles.styleTextMainDesc}>или 150 ₽/мес. при рассрочке на 24 мес.</h3>
                            <h3 className={styles.tariffIncludes}>В тариф входит:</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Безлимитная история запросов</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Безопасная сделка</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Поддержка 24/7</h3>
                            <div className={tariffBeginner ? styles.buttonModifyPersonalArea : styles.buttonModifyMoreDetail}>
                            <MainButton disabled={true} name={tariffBeginner ? nameButtonPersonalArea : nameButtonMoreDetail} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.tariffItem} onClick={ChooseTariffPro}>
                        <div className={styles.headTariffItem+' '+styles.pro}>
                            <div className={styles.titleTariffItem}>
                                <h2 className={styles.nameTariffText}>Pro</h2>
                                <h3 className={styles.descriptionTariffText}>Для HR и фрилансеров</h3>
                            </div>
                            <div className={styles.headTariffItemIcon}>
                                <img className={styles.marginIconTarget} src={target} alt='мишень'></img>
                            </div>
                        </div>
                        <div className={tariffPro ? styles.mainTariffItem+' '+styles.selectedTariffPro : styles.mainTariffItem}>
                            <div className={styles.containerBadge}>
                                {tariffPro && <div className={styles.badge}>Текущий тариф</div>}
                            </div>
                            <h2 className={styles.price}>1 299 ₽ &ensp;<span className={styles.priceСrossed}>2 600 ₽</span></h2>
                            <h3 className={styles.paymentMethod+' '+styles.styleTextMainDesc}>или 279 ₽/мес. при рассрочке на 24 мес.</h3>
                            <h3 className={styles.tariffIncludes}>В тариф входит:</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Все пункты тарифа Beginner</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Экспорт истории</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Рекомендации по приоритетам</h3>
                            <div className={tariffPro ? styles.buttonModifyPersonalArea : styles.buttonModifyMoreDetail}>
                                <MainButton disabled={true} name={tariffPro ? nameButtonPersonalArea : nameButtonMoreDetail} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.tariffItem} onClick={ChooseTariffBusiness}>
                        <div className={styles.headTariffItem+' '+styles.business}>
                            <div className={styles.titleTariffItem}>
                                <h2 className={styles.nameTariffText+' '+styles.colorBusiness}>Business</h2>
                                <h3 className={styles.descriptionTariffText+' '+styles.colorBusiness}>Для корпоративных клиентов</h3>
                            </div>
                            <div className={styles.headTariffItemIcon}>
                                <img className={styles.marginIconLaptop} src={laptop} alt='ноутбук'></img>
                            </div>
                        </div>
                        <div className={tariffBusiness ? styles.mainTariffItem+' '+styles.selectedTariffBusiness : styles.mainTariffItem}>
                            <div className={styles.containerBadge}>
                                {tariffBusiness && <div className={styles.badge}>Текущий тариф</div>}
                            </div>
                            <h2 className={styles.price}>2 379 ₽ &ensp;<span className={styles.priceСrossed}>3 700 ₽</span></h2>
                            <h3 className={styles.paymentMethod}>&ensp;</h3>
                            <h3 className={styles.tariffIncludes}>В тариф входит:</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Все пункты тарифа Pro</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Безлимитное количество запросов</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Приоритетная поддержка</h3>
                            <div className={tariffBusiness ? styles.buttonModifyPersonalArea : styles.buttonModifyMoreDetail}>
                                <MainButton disabled={true} name={tariffBusiness ? nameButtonPersonalArea : nameButtonMoreDetail} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePageComponent;