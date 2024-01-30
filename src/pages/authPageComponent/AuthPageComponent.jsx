import styles from './authPageComponent.module.css';
import picturePageAuth from '../../Images/picturePageAuth.png';
import zamok from '../../Images/zamok.png';


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
                </div>
            </div>
        </div>
    )
};

export default AuthPageComponent;