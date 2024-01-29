import styles from './homePageComponent.module.css';
import imageAboutSite from '../../Images/imageAboutSite.jpg';
import MainButton from '../../components/mainButton/mainButton';
import { nameButtonReqData } from '../../dataVariables/variables';
import SimpleSlider from '../../components/carousel/Carousel';


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
                <div className={styles.blockPictureUnderCarousel}></div>
                <h2 className={styles.textTitle}>НАШИ ТАРИФЫ</h2>
                <div className={styles.blockTariffs}></div>
            </div>
        </>
    )
};

export default HomePageComponent;