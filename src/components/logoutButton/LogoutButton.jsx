import styles from './logoutButton.module.css';
import { Link } from 'react-router-dom';


const LogoutButton = ({click}) => {

    return (
        <button onClick={click} className={styles.buttonLogout}>Выйти</button>
    )
};

export default LogoutButton;