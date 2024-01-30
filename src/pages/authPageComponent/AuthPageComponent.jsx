import styles from './authPageComponent.module.css';
import picturePageAuth from '../../Images/picturePageAuth.png';
import zamok from '../../Images/zamok.png';
import MainButton from '../../components/mainButton/mainButton';
import { nameButtonLogin } from '../../dataVariables/variables';
import { Link } from 'react-router-dom';
import linkViaGoogle from '../../Images/linkViaGoogle.png';
import linkViaFacebook from '../../Images/linkViaFacebook.png';
import linkViaYandex from '../../Images/linkViaYandex.png';


const AuthPageComponent = () => {

    return (
        <div className={styles.containerAuthPage}>
            <div className={styles.infoForSubscription}>
                <h1 className={styles.titleInfo}>Для оформления подписки<br/> на тариф, необходимо<br/> авторизоваться.</h1>
                <img className={styles.positionPicture} src={picturePageAuth} alt='картинка на тему авторизации'></img>
            </div>
            <div className={styles.formForAuth}>
                <img className={styles.zamok} src={zamok}></img>
                <div className={styles.containerForm}>
                    <div className={styles.headerForm}>
                        <button className={styles.loginTab}>Войти</button>
                        <button className={styles.registerTab}>Зарегистрироваться</button>
                    </div>
                    <form>
                        <h2 className={styles.titleInput}>Логин или номер телефона:</h2>
                        <input className={styles.input} type="email" name="email"/>
                        <h2 className={styles.titleInput}>Пароль:</h2>
                        <input className={styles.input} type="password" name="password"/>
                        <div className={styles.buttonModifyLogin}>
                            <MainButton name={nameButtonLogin} />
                        </div>
                        <h3><Link className={styles.link}>Восстановить пароль</Link></h3>
                        <h3 className={styles.loginVia}>Войти через:</h3>
                        <div className={styles.blockLoginLinks}>
                            <button className={styles.button}><img src={linkViaGoogle} alt='ссылка на вход через:'></img></button>
                            <button className={styles.button}><img src={linkViaFacebook} alt='ссылка на вход через:'></img></button>
                            <button className={styles.button}><img src={linkViaYandex} alt='ссылка на вход через:'></img></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AuthPageComponent;