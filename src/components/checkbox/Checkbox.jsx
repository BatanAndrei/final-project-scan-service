import styles from './checkbox.module.css';


const Checkbox = ({click, id}) => {

    return (
        <input data-index={id} onChange={click} type="checkbox" className={styles.checkbox}/>
    )
};

export default Checkbox;