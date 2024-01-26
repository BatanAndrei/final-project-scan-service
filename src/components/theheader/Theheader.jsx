import styles from './theheader.module.css';
import LogoHeader from '../../iconComponnents/logoHeader/LogoHeader';
import { Link } from 'react-router-dom';
import RegistrationPanelLogin from '../registrationPanelLogin/RegistrationPanelLogin';


const Theheader = () => {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <LogoHeader />
            </div>
            <ul className={styles.navigationPages}>
                <li className={styles.list}><Link className={styles.link} to='/'>Главная</Link></li>
                <li className={styles.list}><Link className={styles.link} to='/rate'>Тарифы</Link></li>
                <li className={styles.list}><Link className={styles.link} to='/faq'>FAQ</Link></li>
            </ul>
            <div className={styles.userInfo}>
                <RegistrationPanelLogin />
            </div>
        </header>
    )
};

export default Theheader;
