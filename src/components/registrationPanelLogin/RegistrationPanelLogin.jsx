import { Link } from 'react-router-dom';
import styles from './registrationPanelLogin.module.css';
import VeryicalOrHeader from '../../iconComponnents/veryicalOrHeader/VeryicalOrHeader';
import LoginButton from '../loginButton/LoginButton';


const RegistrationPanelLogin = () => {
    return (
        <>
            <h2 className={styles.textMargin}><Link className={styles.link}>Зарегистрироваться</Link></h2>
            <div className={styles.verticalOr}>
                <VeryicalOrHeader />
            </div>
            <div className={styles.buttonMargin}>
                <LoginButton />
            </div>
        </>
    )
}; 

export default RegistrationPanelLogin;