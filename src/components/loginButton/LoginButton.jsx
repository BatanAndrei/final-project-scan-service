import styles from './loginButton.module.css';
import { Link } from 'react-router-dom';


const LoginButton = () => {

    return (
        <button className={styles.buttonModify}><Link className={styles.link} to='/auth'>Войти</Link></button>
    )
};

export default LoginButton;