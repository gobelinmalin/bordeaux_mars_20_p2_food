import React from 'react';
import styles from './LogoTypeMeal.module.css';

const LogoTypeMeal = (props) => {
    return (
        <img className={styles.Image} src={props.logo} alt='' />
    )
}

export default LogoTypeMeal;