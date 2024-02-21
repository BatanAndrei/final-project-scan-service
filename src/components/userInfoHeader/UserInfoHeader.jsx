import styles from './userInfoHeader.module.css';
import { logOutReducer, loginErrorReducer, passwordErrorReducer } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { RequestGetAccountInfo } from '../../api/RequestGetAccountInfo';
import { selectAccessToken, selectIsActivated, selectAccountInfo, selectStatusAccountInfo } from '../../redux/selectors/selectors';
import { innReducer, getAccessTokenHistogramsReducer, deliveryDocReducer, deteBeginReducer, deteEndReducer, checkedBoxReducer0, checkedBoxReducer1, checkedBoxReducer2, checkedBoxReducer3, checkedBoxReducer4, checkedBoxReducer5, checkedBoxReducer6, isActivateResultPageReducer } from '../../redux/slices/histogramsSlice';
import { useEffect } from 'react';


const UserInfoHeader = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(selectAccessToken);
    const isActivate = useSelector(selectIsActivated);
    const accountInfo = useSelector(selectAccountInfo);
    const accountStatus = useSelector(selectStatusAccountInfo);

    const HeandleClickLogout = () => {
        dispatch(isActivateResultPageReducer(false));
        dispatch(logOutReducer(false));
        dispatch(loginErrorReducer(' '));
        dispatch(passwordErrorReducer(' '));
        dispatch(innReducer(''));
        dispatch(getAccessTokenHistogramsReducer(''));
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
        navigate('/');
    }

    useEffect(() => {
        if(isActivate)
        dispatch(RequestGetAccountInfo(accessToken))
    },[isActivate])

    return (
        <div className={styles.container}>
            <div className={styles.infoByComponies}>
                {accountStatus === 'loading' ? <div className={styles.loader}></div> : 
                <div><h3 className={styles.textUsedCompanies}>Использовано компаний <span className={styles.styleQuantityUsed}>{accountInfo?.eventFiltersInfo?.usedCompanyCount}</span></h3>
                <h3 className={styles.textLimitCompanies}>Лимит по компаниям <span className={styles.styleQuantityLimit}>{accountInfo?.eventFiltersInfo?.companyLimit}</span></h3></div>}
            </div>
            <div className={styles.avatarHeaderLogout}>
                <div className={styles.userNameLogoutButton}>
                    <h3 className={styles.textUameUser}>Алексей А.</h3>
                    <button className={styles.buttonLogout} onClick={HeandleClickLogout}>Выйти</button>
                </div>
                <div className={styles.avatarImage}></div>
            </div>
        </div>
    )
};

export default UserInfoHeader;