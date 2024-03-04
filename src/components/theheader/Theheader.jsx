import styles from './theheader.module.css';
import LogoHeader from '../../iconComponnents/logoHeader/LogoHeader';
import LogoFooter from '../../iconComponnents/logoFooter/LogoFooter';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import RegistrationPanelLogin from '../registrationPanelLogin/RegistrationPanelLogin';
import UserInfoHeader from '../../components/userInfoHeader/UserInfoHeader';
import { logOutReducer, loginErrorReducer, passwordErrorReducer } from '../../redux/slices/authSlice';
import { selectIsActivated, selectIsActivatedBurgerMenu } from '../../redux/selectors/selectors';
import { innReducer, deliveryDocReducer, deteBeginReducer, deteEndReducer, checkedBoxReducer0, checkedBoxReducer1, checkedBoxReducer2, checkedBoxReducer3, checkedBoxReducer4, checkedBoxReducer5, checkedBoxReducer6, isActivateResultPageReducer, getAccessTokenHistogramsReducer } from '../../redux/slices/histogramsSlice';
import { resetDataDocumentsReducer, resetDocumentsPartsReducer, getAccessTokenDocumentsReducer } from '../../redux/slices/documentsSlice';
import { isActivatedBurgerMenuReducer } from '../../redux/slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import LoginButton from '../../components/loginButton/LoginButton';
import { CSSTransition } from 'react-transition-group';
import './theheader.css';
import LogoutButton from '../../components/logoutButton/LogoutButton';


const Theheader = () => {
    
    const navigate = useNavigate();
    const isActivated = useSelector(selectIsActivated);
    const isActivatedBurgerMenu = useSelector(selectIsActivatedBurgerMenu);
    const dispatch = useDispatch();

    const resetFieldsFilterSearch = () => {
        dispatch(isActivateResultPageReducer(false))
        dispatch(innReducer(''))
        dispatch(deliveryDocReducer(''));
        dispatch(deteBeginReducer(''));
        dispatch(deteEndReducer(''));
        dispatch(checkedBoxReducer0(false));
        dispatch(checkedBoxReducer1(false));
        dispatch(checkedBoxReducer2(false));
        dispatch(checkedBoxReducer3(false));
        dispatch(checkedBoxReducer4(false));
        dispatch(checkedBoxReducer5(false));
        dispatch(checkedBoxReducer6(false));
        dispatch(resetDataDocumentsReducer([]));
        dispatch(resetDocumentsPartsReducer());
        dispatch(isActivatedBurgerMenuReducer(false));
    };

    const HeandleClickLogout = () => {
        dispatch(isActivateResultPageReducer(false));
        dispatch(logOutReducer(false));
        dispatch(loginErrorReducer(' '));
        dispatch(passwordErrorReducer(' '));
        dispatch(innReducer(''));         
        dispatch(getAccessTokenHistogramsReducer(''));//
        dispatch(getAccessTokenDocumentsReducer(''));//
        dispatch(deliveryDocReducer(''));
        dispatch(deteBeginReducer(''));
        dispatch(deteEndReducer(''));
        dispatch(checkedBoxReducer0(false));
        dispatch(checkedBoxReducer1(false));
        dispatch(checkedBoxReducer2(false));
        dispatch(checkedBoxReducer3(false));
        dispatch(checkedBoxReducer4(false));
        dispatch(checkedBoxReducer5(false));
        dispatch(checkedBoxReducer6(false));
        dispatch(resetDataDocumentsReducer([]));
        dispatch(resetDocumentsPartsReducer());
        dispatch(isActivatedBurgerMenuReducer(false));
        navigate('/');
    }

    const displayedBurgerMenu = () => {
        if(!isActivatedBurgerMenu){
            dispatch(isActivatedBurgerMenuReducer(true));
        }else {
            dispatch(isActivatedBurgerMenuReducer(false));
        }    
    };

    const enterInAuthorizationMobile = () => {
        dispatch(isActivatedBurgerMenuReducer(false));
    };

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <LogoHeader />
            </div>
            <div className={styles.burgerMenu}><button onClick={displayedBurgerMenu} className={styles.buttonBurger}></button></div>
            <CSSTransition in={isActivatedBurgerMenu} timeout={300} classNames='alert' unmountOnExit><div className={styles.burgerMenuOpened}>
                <div className={styles.logoFooter}>
                    <LogoFooter />
                </div>
                <div className={styles.cross}><button onClick={displayedBurgerMenu} className={styles.buttonBurger}></button></div>
                <ul className={styles.navigationPagesMobile}>
                    <li className={styles.listMobile}><Link onClick={resetFieldsFilterSearch} className={styles.linkMobile} to='/'>Главная</Link></li>
                    <li className={styles.listMobile}><Link className={styles.linkMobile} to='#'>Тарифы</Link></li>
                    <li className={styles.listMobile}><Link className={styles.linkMobile} to='#'>FAQ</Link></li>
                </ul>
                {isActivated ? <h2 className={styles.textPosition}></h2> : <h2 className={styles.textPosition}><Link className={styles.linkMobileOpacity} to='#'>Зарегистрироваться</Link></h2>}
                <div className={styles.positionButtonMobile}>
                {isActivated ? <div className={styles.positionLogoutMobile}><LogoutButton click={HeandleClickLogout} /></div> : <LoginButton click={enterInAuthorizationMobile}/>}
                </div>
            </div>
            </CSSTransition>
            
            <ul className={styles.navigationPages}>
                <li className={styles.list}><Link onClick={resetFieldsFilterSearch} className={styles.link} to='/'>Главная</Link></li>
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
