import styles from './theheader.module.css';
import LogoComponent from '../../iconComponnents/logoComponent/LogoComponent';


const Theheader = () => {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <LogoComponent />
            </div>
            <div className={styles.navigationPages}>
                <a><h2></h2></a>
                <a><h2></h2></a>
                <a><h2></h2></a>
            </div>
            <div className={styles.userInfo}></div>
        </header>
    )
};

export default Theheader;
