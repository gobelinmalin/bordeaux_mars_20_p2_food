import React from 'react';
import styles from './PortraitCard2.module.css';

const PortraitCard2 = (props) => {
    return (
        <div className={styles.PortraitCard2} >
            <div className={styles.Testimonial}>
                <img className={styles.Portrait} src={`url(${props.imageUrl})`} style={{backgroundImage: 'url(' + props.imageUrl + ')' }} />
                <div className={styles.ContainerNameDev}>
                    <h3 className={styles.Name}>{props.name}</h3>
                </div>
                <p className={styles.Description}>{props.text}</p>
            </div>
        </div>
    )
}

export default PortraitCard2;