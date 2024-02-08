import styles from './homePageComponent.module.css';
import imageAboutSite from '../../Images/imageAboutSite.jpg';
import pictureUnderCarousel from '../../Images/pictureUnderCarousel.jpg';
import MainButton from '../../components/mainButton/mainButton';
import { nameButtonReqData, nameButtonMoreDetail, nameButtonPersonalArea } from '../../dataVariables/variables';
import SimpleSliderHome from '../../components/carouselHome/CarouselHome';
import lamp from '../../Images/lamp.png';
import target from '../../Images/target.png';
import laptop from '../../Images/laptop.png';
import galochka from '../../Images/galochka.png';
import { Link } from 'react-router-dom';
import { selectStatus, selectToken } from '../../redux/selectors/selectors';
import { useSelector, useDispatch } from 'react-redux'; 
import { postAuth } from '../../api/postAuth';
import { useEffect } from 'react';


const HomePageComponent = () => {

    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    console.log(token)

    useEffect(() => {
        dispatch(postAuth())
    }, [])

    
    return (
        <>
            <div className={styles.homeContainer}>
                <div className={styles.blockMainAboutSite}>
                    <div className={styles.mainAboutSiteText}>
                        <h1 className={styles.titleMainAboutSite}>сервис по поиску<br/> публикаций<br/> о компании<br/> по его инн</h1>
                        <h2 className={styles.subtitleMainAboutSite}>Комплексный анализ публикаций, получение данных<br/> в формате PDF на электронную почту.</h2>
                        <div className={styles.buttonModifyReqData}>
                            <Link to='/search'><MainButton name={nameButtonReqData} /></Link>
                        </div>
                    </div>
                    <div className={styles.mainAboutSitePicture}>
                        <img src={imageAboutSite} alt='Картинка о сайте'></img>
                    </div>
                </div>
                <h2 className={styles.textTitleBlockName}>ПОЧЕМУ ИМЕННО МЫ</h2>
                <div className={styles.blockCarousel}>
                    <SimpleSliderHome />
                </div>
                <div className={styles.blockPictureUnderCarousel}>
                    <img src={pictureUnderCarousel} alt='Картинка о сайте'></img>
                </div>
                <h2 className={styles.textTitleBlockName}>НАШИ ТАРИФЫ</h2>
                <div className={styles.blockTariffs}>
                    <div className={styles.tariffItem}>
                        <div className={styles.headTariffItem+' '+styles.beginner}>
                            <div className={styles.titleTariffItem}>
                                <h2 className={styles.nameTariffText}>Beginner</h2>
                                <h3 className={styles.descriptionTariffText}>Для небольшого исследования</h3>
                            </div>
                            <div className={styles.headTariffItemIcon}>
                                <img className={styles.marginIconLamp} src={lamp} alt='лампочка'></img>
                            </div>
                        </div>
                        <div className={styles.mainTariffItem+' '+styles.selectedTariffBeginer}>
                            <div className={styles.containerBadge}>
                                <div className={styles.badge}>Текущий тариф</div>
                            </div>
                            <h2 className={styles.price}>799 ₽ &ensp;<span className={styles.priceСrossed}>1 200 ₽</span></h2>
                            <h3 className={styles.paymentMethod+' '+styles.styleTextMainDesc}>или 150 ₽/мес. при рассрочке на 24 мес.</h3>
                            <h3 className={styles.tariffIncludes}>В тариф входит:</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Безлимитная история запросов</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Безопасная сделка</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Поддержка 24/7</h3>
                            <div className={styles.buttonModifyPersonalArea}>
                            <MainButton name={nameButtonPersonalArea} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.tariffItem}>
                        <div className={styles.headTariffItem+' '+styles.pro}>
                            <div className={styles.titleTariffItem}>
                                <h2 className={styles.nameTariffText}>Pro</h2>
                                <h3 className={styles.descriptionTariffText}>Для HR и фрилансеров</h3>
                            </div>
                            <div className={styles.headTariffItemIcon}>
                                <img className={styles.marginIconTarget} src={target} alt='мишень'></img>
                            </div>
                        </div>
                        <div className={styles.mainTariffItem+' '+styles.selectedTariffPro}>
                            <div className={styles.containerBadge}>
                                <div className={styles.badge}>Текущий тариф</div>
                            </div>
                            <h2 className={styles.price}>1 299 ₽ &ensp;<span className={styles.priceСrossed}>2 600 ₽</span></h2>
                            <h3 className={styles.paymentMethod+' '+styles.styleTextMainDesc}>или 279 ₽/мес. при рассрочке на 24 мес.</h3>
                            <h3 className={styles.tariffIncludes}>В тариф входит:</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Все пункты тарифа Beginner</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Экспорт истории</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Рекомендации по приоритетам</h3>
                            <div className={styles.buttonModifyMoreDetail}>
                                <MainButton name={nameButtonMoreDetail} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.tariffItem}>
                        <div className={styles.headTariffItem+' '+styles.business}>
                            <div className={styles.titleTariffItem}>
                                <h2 className={styles.nameTariffText+' '+styles.colorBusiness}>Business</h2>
                                <h3 className={styles.descriptionTariffText+' '+styles.colorBusiness}>Для корпоративных клиентов</h3>
                            </div>
                            <div className={styles.headTariffItemIcon}>
                                <img className={styles.marginIconLaptop} src={laptop} alt='ноутбук'></img>
                            </div>
                        </div>
                        <div className={styles.mainTariffItem+' '+styles.selectedTariffBusiness}>
                            <div className={styles.containerBadge}>
                                <div className={styles.badge}>Текущий тариф</div>
                            </div>
                            <h2 className={styles.price}>2 379 ₽ &ensp;<span className={styles.priceСrossed}>3 700 ₽</span></h2>
                            <h3 className={styles.paymentMethod}>&ensp;</h3>
                            <h3 className={styles.tariffIncludes}>В тариф входит:</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Все пункты тарифа Pro</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Безлимитное количество запросов</h3>
                            <h3 className={styles.styleTextMainDesc+' '+styles.marginListInclude}><img className={styles.positionGalka} src={galochka} alt='галочка'></img> Приоритетная поддержка</h3>
                            <div className={styles.buttonModifyMoreDetail}>
                                <MainButton name={nameButtonMoreDetail} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePageComponent;