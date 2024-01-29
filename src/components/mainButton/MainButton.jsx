import styles from './mainButton.module.css';


const MainButton = ({nameButtonReqData}) => {
    return (
        <button className={styles.button}>{nameButtonReqData}</button>
    )
};

export default MainButton;