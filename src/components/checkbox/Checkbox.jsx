import styles from './checkbox.module.css';
import { useState } from 'react';


const Checkbox = ({name}) => {
    const [check, setCheck] = useState(true);

    const HeandleCheckBox = () => {
        setCheck(() => !check)
    }

    return (
        <label className={check ? styles.label : styles.lableChecked}>
            <input onChange={HeandleCheckBox} type="checkbox" className={styles.checkbox}/>
            <span className={check ? styles.fake : styles.fakeChecked}></span>
            <span className={styles.color}>{name}</span>          
        </label>
    )
};

export default Checkbox;