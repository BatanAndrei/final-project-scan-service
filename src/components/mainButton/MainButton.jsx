import styles from './mainButton.module.css';


const MainButton = ({click, name}) => {
    return (
        <button onClick={click} className={styles.button}>{name}</button>
    )
};

export default MainButton;