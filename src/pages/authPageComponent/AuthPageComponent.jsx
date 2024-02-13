import styles from './authPageComponent.module.css';
import picturePageAuth from '../../Images/picturePageAuth.png';
import zamok from '../../Images/zamok.png';
import MainButton from '../../components/mainButton/mainButton';
import { nameButtonLogin } from '../../dataVariables/variables';
import { Link } from 'react-router-dom';
import linkViaGoogle from '../../Images/linkViaGoogle.png';
import linkViaFacebook from '../../Images/linkViaFacebook.png';
import linkViaYandex from '../../Images/linkViaYandex.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectToken } from '../../redux/selectors/selectors';
import { RequestPostAuth } from '../../api/RequestPostAuth';
import { loginReducer, telReducer, passReducer, telErrorReducer, passErrorReducer, validFormReducer } from '../../redux/slices/authSlice';
import { selectTelError, selectPassError, selectTel, selectPassword, selectValidForm } from '../../redux/selectors/selectors';


const AuthPageComponent = () => {

    const dispatch = useDispatch();

    const token = useSelector(selectToken);
    console.log(token);

    const telError = useSelector(selectTelError);
    const passError = useSelector(selectPassError);
    const tel = useSelector(selectTel);
    const password = useSelector(selectPassword);
    const validForm = useSelector(selectValidForm);
    

    const TelHeandleChange = (e) => {
        dispatch(telReducer(e.target.value));
            if(!e.target.value) {
                dispatch(telErrorReducer('Поле не может быть пустым'));
            }else {
                dispatch(telErrorReducer(''));
        }
    };

    const PassHeandleChange = (e) => {
        dispatch(passReducer(e.target.value));
            if(!e.target.value) {
                dispatch(passErrorReducer('Поле не может быть пустым'));
            }else {
                dispatch(passErrorReducer(''));
        }
    };

    useEffect(() => {
        if(telError || passError) {
            dispatch(validFormReducer(false))
        }else {
            dispatch(validFormReducer(true))
        }
    }, [telError, passError]) 

    const PostRequestAuth = (e) => {
        e.preventDefault();
        dispatch(RequestPostAuth())
    }
    
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
                        <h2 className={styles.titleInputTel}>Логин или номер телефона:</h2>
                        <input className={telError !== 'Поле не может быть пустым' ? styles.input : styles.inputError} onChange={e => TelHeandleChange(e)} value={tel}  type="tel" name="tel"/>
                        <div className={styles.placeError}>{telError && <p className={styles.errorMessage}>{telError}</p>}</div>
                        <h2 className={styles.titleInputPass}>Пароль:</h2>
                        <input className={passError !== 'Поле не может быть пустым' ? styles.input : styles.inputError} onChange={e => PassHeandleChange(e)} value={password} type="password" name="password"/>
                        <div className={styles.placeError}>{passError && <p className={styles.errorMessage}>{passError}</p>}</div>
                        <div className={validForm ? styles.buttonModifyLogin : styles.buttonModifyLoginDisable}>
                            <MainButton disabled={!validForm} click={PostRequestAuth} name={nameButtonLogin} />
                        </div>
                        <h3><Link className={styles.link} to='#'>Восстановить пароль</Link></h3>
                        <h3 className={styles.loginVia}>Войти через:</h3>
                    </form>
                    <div className={styles.blockLoginLinks}>
                        <button className={styles.button}><img src={linkViaGoogle} alt='ссылка на вход через Google'></img></button>
                        <button className={styles.button}><img src={linkViaFacebook} alt='ссылка на вход через Facebook'></img></button>
                        <button className={styles.button}><img src={linkViaYandex} alt='ссылка на вход через Yandex'></img></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthPageComponent;