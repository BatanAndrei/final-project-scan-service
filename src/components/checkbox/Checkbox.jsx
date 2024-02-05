import styles from './checkbox.module.css';


const Checkbox = ({name}) => {
    return (
        <label className={styles.label}>
            <input type="checkbox" name="1" className={styles.checkbox}/>
            <span className={styles.fake}></span>
            <span>{name}</span>            
        </label>
    )
};

export default Checkbox;