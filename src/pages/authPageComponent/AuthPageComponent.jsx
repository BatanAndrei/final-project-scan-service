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
import { RequestPostAuth } from '../../api/RequestPostAuth';
import { useNavigate } from "react-router-dom";
import { loginReducer, passwordReducer, loginErrorReducer, passwordErrorReducer, validFormReducer, isActivatedReducer, cleanErrorMessageReducer } from '../../redux/slices/authSlice';
import { getAccessTokenHistogramsReducer } from '../../redux/slices/histogramsSlice';
import { getAccessTokenDocumentsReducer } from '../../redux/slices/documentsSlice';
import { selectAccessToken, selectLoginError, selectPasswordError, selectLoginField, selectPasswordField, selectValidForm, selectLoginData, selectIsActivated, selectRequestError } from '../../redux/selectors/selectors';


const AuthPageComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginData = useSelector(selectLoginData);
    const requestError = useSelector(selectRequestError);
    const accessToken = useSelector(selectAccessToken);
    const isActivated = useSelector(selectIsActivated);

    const loginError = useSelector(selectLoginError);
    const passwordError = useSelector(selectPasswordError);
    const loginField = useSelector(selectLoginField);
    const passwordField = useSelector(selectPasswordField);
    const validForm = useSelector(selectValidForm);
    
    const TelHeandleChange = (e) => {
        dispatch(loginReducer(e.target.value));
        dispatch(cleanErrorMessageReducer(''));
            if(!e.target.value) {
                dispatch(loginErrorReducer('Поле не может быть пустым'));
            }else {
                dispatch(loginErrorReducer(''));
        }
    };

    const PassHeandleChange = (e) => {
        dispatch(passwordReducer(e.target.value));
        dispatch(cleanErrorMessageReducer(''));
            if(!e.target.value) {
                dispatch(passwordErrorReducer('Поле не может быть пустым'));
            }else {
                dispatch(passwordErrorReducer(''));
        }
    };

    useEffect(() => {
        if(loginError || passwordError) {
            dispatch(validFormReducer(false))
        }else {
            dispatch(validFormReducer(true))
        }
    }, [loginError, passwordError]) 

    const PostRequestAuth = (e) => {
        e.preventDefault();
        dispatch(RequestPostAuth(loginData));
    }

    useEffect(() => {
        if(accessToken) {
            navigate('/');
            dispatch(isActivatedReducer(true));
            dispatch(getAccessTokenHistogramsReducer(accessToken));
            dispatch(getAccessTokenDocumentsReducer(accessToken));
        }
    }, [accessToken]) 
    
    return (
        <>
        {
        !isActivated && 
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
                        <input className={loginError !== 'Поле не может быть пустым' ? styles.input : styles.inputError} onChange={e => TelHeandleChange(e)} type="tel" value={loginField}/>
                        <div className={styles.placeError}>{loginError && <p className={styles.errorMessage}>{loginError}</p> || requestError && <p className={styles.errorMessage}>{requestError} логин</p>}</div>
                        <h2 className={styles.titleInputPass}>Пароль:</h2>
                        <input className={passwordError !== 'Поле не может быть пустым' ? styles.input : styles.inputError} onChange={e => PassHeandleChange(e)} type="password" value={passwordField}/>
                        <div className={styles.placeError}>{passwordError && <p className={styles.errorMessage}>{passwordError}</p> || requestError && <p className={styles.errorMessage}>{requestError} пароль</p>}</div>
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
        }
        </>
    )
};

export default AuthPageComponent;