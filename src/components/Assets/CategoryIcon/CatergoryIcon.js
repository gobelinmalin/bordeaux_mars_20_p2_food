import React from 'react';
import styles from './CategoryIcon.module.css'

const CategoryIcon = (props) => {
    return (
        <div style={{backgroundImage: 'url(' + props.imageUrl + ')'}} className={styles.Icon}>
            
        </div>
    );
}

export default CategoryIcon;

