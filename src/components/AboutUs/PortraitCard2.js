import React from 'react';
import styles from './PortraitCard2.module.css';

const PortraitCard2 = (props) => {
    return (
        <div className={styles.PortraitCard2} >
            <div className={styles.Testimonial}>
                <div className={styles.Portrait2} style={{backgroundImage: 'url(' + props.imageUrl + ')' }} />
                <div className={styles.ContainerNameDev}>
                    <h3 className={styles.Name2}>{props.name}</h3>
                </div>
                <p className={styles.Description2}>{props.text}</p>
            </div>
        </div>
    )
}

export default PortraitCard2;