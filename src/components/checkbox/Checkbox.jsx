import styles from './checkbox.module.css';
//import { useState } from 'react';


const Checkbox = ({click, id}) => {

    /* const [check, setCheck] = useState(true);

    const HeandleCheckBox = () => {
        setCheck(() => !check)
    } */

    return (
        <input data-index={id} onChange={click} type="checkbox" className={styles.checkbox}/>
    )
};

export default Checkbox;