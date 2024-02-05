import styles from './userInfoHeader.module.css';


const UserInfoHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoByComponies}>
                <h3 className={styles.textUsedCompanies}>Использовано компаний <span className={styles.styleQuantityUsed}>34</span></h3>
                <h3 className={styles.textLimitCompanies}>Лимит по компаниям <span className={styles.styleQuantityLimit}>100</span></h3>
            </div>
            <div className={styles.avatarHeaderLogout}>
                <div className={styles.userNameLogoutButton}>
                    <h3 className={styles.textUameUser}>Алексей А.</h3>
                    <button className={styles.buttonLogout}>Выйти</button>
                </div>
                <div className={styles.avatarImage}></div>
            </div>
        </div>
    )
};

export default UserInfoHeader;