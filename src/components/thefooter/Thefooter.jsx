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
                    
                </div>
            </div>
        </footer>
    )
};

export default Thefooter;