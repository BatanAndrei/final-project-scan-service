import styles from './theheader.module.css';
import LogoComponent from '../../iconComponnents/logoComponent/LogoComponent';


const Theheader = () => {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <LogoComponent />
            </div>
            <ul className={styles.navigationPages}>
                <li className={styles.list}><a className={styles.link} href='/'>Главная</a></li>
                <li className={styles.list}><a className={styles.link} href='/rate'>Тарифы</a></li>
                <li className={styles.list}><a className={styles.link} href='/faq'>FAQ</a></li>
            </ul>
            <div className={styles.userInfo}></div>
        </header>
    )
};

export default Theheader;
