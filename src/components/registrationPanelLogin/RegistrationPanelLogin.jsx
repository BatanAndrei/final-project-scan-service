import { Link } from 'react-router-dom';
import styles from './registrationPanelLogin.module.css';
import PipelineHeader  from '../../iconComponnents/pipelineHeader/PipelineHeader';
import LoginButton from '../loginButton/LoginButton';


const RegistrationPanelLogin = () => {
    return (
        <>
            <h2 className={styles.textMargin}><Link className={styles.link} to=''>Зарегистрироваться</Link></h2>
            <div className={styles.verticalOr}>
                <PipelineHeader />
            </div>
            <div className={styles.buttonMargin}>
                <LoginButton />
            </div>
        </>
    )
}; 

export default RegistrationPanelLogin;