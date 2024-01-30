import styles from './mainButton.module.css';


const MainButton = ({type, name}) => {
    return (
        <button className={styles.button}>{name}</button>
    )
};

export default MainButton;