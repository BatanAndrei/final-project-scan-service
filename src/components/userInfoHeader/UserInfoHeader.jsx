import styles from './userInfoHeader.module.css';
import { logOutReducer, isActivatedReducer } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const UserInfoHeader = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const HeandleClickLogout = () => {
        dispatch(logOutReducer(false));
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoByComponies}>
                {/* <div className={styles.loader}></div> */}
                <h3 className={styles.textUsedCompanies}>Использовано компаний <span className={styles.styleQuantityUsed}>34</span></h3>
                <h3 className={styles.textLimitCompanies}>Лимит по компаниям <span className={styles.styleQuantityLimit}>100</span></h3>
            </div>
            <div className={styles.avatarHeaderLogout}>
                <div className={styles.userNameLogoutButton}>
                    <h3 className={styles.textUameUser}>Алексей А.</h3>
                    <button className={styles.buttonLogout}onClick={HeandleClickLogout}>Выйти</button>
                </div>
                <div className={styles.avatarImage}></div>
            </div>
        </div>
    )
};

export default UserInfoHeader;