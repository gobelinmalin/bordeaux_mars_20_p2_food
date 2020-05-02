import React from 'react';
import styles from './PortraitCard.module.css'

const PortraitCard = (props) => {


    return (
        <div className={styles.PortraitCard2} >
            <div className={styles.Portrait} style={{backgroundImage: 'url(' + props.imageUrl + ')' }}></div>
            <p className={styles.Name}>{props.name}</p>
            <p className={styles.Description}>{props.text}</p>
        </div>
    )
}

export default PortraitCard;