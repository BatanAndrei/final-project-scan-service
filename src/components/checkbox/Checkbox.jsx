import styles from './checkbox.module.css';


const Checkbox = () => {
    return (
        <label className={styles.label}>
            <input type="checkbox" name="1" className={styles.checkbox}/>
            <span className={styles.fake}></span>
            <span>1 пересадка</span>            
        </label>
    )
};

export default Checkbox;