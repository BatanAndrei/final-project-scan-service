import styles from './userInfoHeader.module.css';
import { logOutReducer, isActivatedReducer } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { RequestGetAccountInfo } from '../../api/RequestGetAccountInfo';
import { selectAccessToken, selectIsActivated, selectAccountInfo, selectStatusAccountInfo } from '../../redux/selectors/selectors';
import { useEffect } from 'react';


const UserInfoHeader = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(selectAccessToken);
    const isActivate = useSelector(selectIsActivated);
    const accountInfo = useSelector(selectAccountInfo);
    const accountStatus = useSelector(selectStatusAccountInfo);

    const HeandleClickLogout = () => {
        dispatch(logOutReducer(false));
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