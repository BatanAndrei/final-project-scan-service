import styles from './homePageComponent.module.css';
import imageAboutSite from '../../Images/imageAboutSite.jpg';
import pictureUnderCarousel from '../../Images/pictureUnderCarousel.jpg';
import MainButton from '../../components/mainButton/mainButton';
import { nameButtonReqData } from '../../dataVariables/variables';
import SimpleSlider from '../../components/carousel/Carousel';
import lamp from '../../Images/lamp.png';
import target from '../../Images/target.png';
import laptop from '../../Images/laptop.png';


const HomePageComponent = () => {

    return (
        <>
            <div className={styles.homeContainer}>
                <div className={styles.blockMainAboutSite}>
                    <div className={styles.mainAboutSiteText}>
                        <h1 className={styles.titleMainAboutSite}>сервис по поиску<br/> публикаций<br/> о компании<br/> по его инн</h1>
                        <h2 className={styles.subtitleMainAboutSite}>Комплексный анализ публикаций, получение данных<br/> в формате PDF на электронную почту.</h2>
                        <div className={styles.buttonModifyReqData}>
                            <MainButton nameButtonReqData={nameButtonReqData} />
                        </div>
                    </div>
                    <div className={styles.mainAboutSitePicture}>
                        <img src={imageAboutSite} alt='Картинка о сайте'></img>
                    </div>
                </div>
                <h2 className={styles.textTitle}>ПОЧЕМУ ИМЕННО МЫ</h2>
                <div className={styles.blockCarousel}>
                    <SimpleSlider />
                </div>
                <div className={styles.blockPictureUnderCarousel}>
                    <img src={pictureUnderCarousel} alt='Картинка о сайте'></img>
                </div>
                <h2 className={styles.textTitle}>НАШИ ТАРИФЫ</h2>
                <div className={styles.blockTariffs}>
                    <div className={styles.tariffItem}>
                        <div className={styles.headTariffItem+' '+styles.beginner}>
                            <div className={styles.titleTariffItem}>
                                <h2 className={styles.nameTariffText}>Beginner</h2>
                                <h3 className={styles.descriptionTariffText}>Для небольшого исследования</h3>
                            </div>
                            <div className={styles.headTariffItemIcon}>
                                <img className={styles.marginIconLamp} src={lamp}></img>
                            </div>
                        </div>
                        <div className={styles.mainTariffItem}></div>
                    </div>
                    <div className={styles.tariffItem}>
                        <div className={styles.headTariffItem+' '+styles.pro}>
                            <div className={styles.titleTariffItem}>
                                <h2 className={styles.nameTariffText}>Pro</h2>
                                <h3 className={styles.descriptionTariffText}>Для HR и фрилансеров</h3>
                            </div>
                            <div className={styles.headTariffItemIcon}>
                                <img className={styles.marginIconTarget} src={target}></img>
                            </div>
                        </div>
                        <div className={styles.mainTariffItem}></div>
                    </div>
                    <div className={styles.tariffItem}>
                        <div className={styles.headTariffItem+' '+styles.business}>
                            <div className={styles.titleTariffItem}>
                                <h2 className={styles.nameTariffText+' '+styles.colorBusiness}>Business</h2>
                                <h3 className={styles.descriptionTariffText+' '+styles.colorBusiness}>Для корпоративных клиентов</h3>
                            </div>
                            <div className={styles.headTariffItemIcon}>
                                <img className={styles.marginIconLaptop} src={laptop}></img>
                            </div>
                        </div>
                        <div className={styles.mainTariffItem}></div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePageComponent;