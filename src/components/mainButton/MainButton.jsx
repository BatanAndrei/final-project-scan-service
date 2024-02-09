import styles from './mainButton.module.css';


const MainButton = ({disabled, click, name}) => {
    return (
        <button disabled={disabled} onClick={click} className={styles.button}>{name}</button>
    )
};

export default MainButton;