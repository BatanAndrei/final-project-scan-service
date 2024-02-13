import styles from './theheader.module.css';
import LogoHeader from '../../iconComponnents/logoHeader/LogoHeader';
import { Link } from 'react-router-dom';
import RegistrationPanelLogin from '../registrationPanelLogin/RegistrationPanelLogin';
import UserInfoHeader from '../../components/userInfoHeader/UserInfoHeader';
import { selectIsActivated } from '../../redux/selectors/selectors';
import { useSelector } from 'react-redux';


const Theheader = () => {

    const isActivated = useSelector(selectIsActivated)

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <LogoHeader />
            </div>
            <ul className={styles.navigationPages}>
                <li className={styles.list}><Link className={styles.link} to='/'>Главная</Link></li>
                <li className={styles.list}><Link className={styles.link} to='#'>Тарифы</Link></li>
                <li className={styles.list}><Link className={styles.link} to='#'>FAQ</Link></li>
            </ul>
            <div className={styles.userInfo}>
                {isActivated ? <UserInfoHeader /> : <RegistrationPanelLogin />}
            </div>
        </header>
    )
};

export default Theheader;
