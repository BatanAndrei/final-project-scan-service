import styles from './theheader.module.css';
import LogoHeader from '../../iconComponnents/logoHeader/LogoHeader';
import { Link } from 'react-router-dom';
import RegistrationPanelLogin from '../registrationPanelLogin/RegistrationPanelLogin';
import UserInfoHeader from '../../components/userInfoHeader/UserInfoHeader';
import { selectIsActivated, selectIsActivatedBurgerMenu } from '../../redux/selectors/selectors';
import { innReducer, deliveryDocReducer, deteBeginReducer, deteEndReducer, checkedBoxReducer0, checkedBoxReducer1, checkedBoxReducer2, checkedBoxReducer3, checkedBoxReducer4, checkedBoxReducer5, checkedBoxReducer6, isActivateResultPageReducer } from '../../redux/slices/histogramsSlice';
import { resetDataDocumentsReducer, resetDocumentsPartsReducer } from '../../redux/slices/documentsSlice';
import { isActivatedBurgerMenuReducer } from '../../redux/slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';


const Theheader = () => {

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
    };

    const displayedBurgerMenu = () => {
        dispatch(isActivatedBurgerMenuReducer(true));
    };
console.log(isActivatedBurgerMenu)
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <LogoHeader />
            </div>
            <div className={styles.burgerMenu}><button onClick={displayedBurgerMenu} className={styles.buttonBurger}></button></div>
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
