import styles from './searchPageComponent.module.css';


const SearchPageComponent = () => {
    return (
        <div className={styles.containerPage}>
            <div className={styles.blockSearch}>
                <div className={styles.titleBlockSearch}></div>
                <div className={styles.enterSearchData}></div>
            </div>
            <div className={styles.blockImages}></div>
        </div>
    )
};

export default SearchPageComponent;