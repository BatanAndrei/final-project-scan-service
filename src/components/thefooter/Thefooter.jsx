import styles from './thefooter.module.css';
import LogoFooter from '../../iconComponnents/logoFooter/LogoFooter';


const Thefooter = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.logo}>
                    <LogoFooter />
                </div>
                <div className={styles.contactInfo}>
                    <h4 className={styles.contactInfoModify+' '+styles.marginTop}>г. Москва, Цветной б-р, 40</h4>
                    <h4 className={styles.contactInfoModify}>+7 495 771 21 11</h4>
                    <h4 className={styles.contactInfoModify}>info@skan.ru</h4>
                    <h4 className={styles.contactInfoModify+' '+styles.marginTop}>Copyright. 2022</h4>
                </div>
            </div>
        </footer>
    )
};

export default Thefooter;