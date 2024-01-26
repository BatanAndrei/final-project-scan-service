import styles from './homePageComponent.module.css';


const HomePageComponent = () => {
    return (
        <>
            <div className={styles.homeContainer}>
                <div className={styles.blockTitleAboutSite}></div>
                <h2 className={styles.textTitle}>ПОЧЕМУ ИМЕННО МЫ</h2>
                <div className={styles.blockCarousel}></div>
                <div className={styles.blockPictureUnderCarousel}></div>
                <h2 className={styles.textTitle}>НАШИ ТАРИФЫ</h2>
                <div className={styles.blockTariffs}></div>
            </div>
        </>
    )
};

export default HomePageComponent;