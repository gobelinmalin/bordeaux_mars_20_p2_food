import React from 'react';
import styles from './IngredientItem.module.css'

const IngredientItem = (props) => {
    return (
        <div className={styles.Item}>
            <p>{props.itemName}</p>
            <input type='checkbox' />
        </div>
        
    )
}

export default IngredientItem;