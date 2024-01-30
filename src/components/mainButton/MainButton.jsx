import styles from './mainButton.module.css';


const MainButton = ({name}) => {
    return (
        <button className={styles.button}>{name}</button>
    )
};

export default MainButton;