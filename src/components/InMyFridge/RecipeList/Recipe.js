import React from 'react';

import styles from "./Recipe.module.css";

const Recipe = (props) => {
    return (
        <div className={styles.Recipe}>
            <div className={styles.RecipeImgContainer}>
                <img src={props.image} alt="recipe image"/>
            </div>
            <h3>{props.title}</h3>
            <p>Ingredients : {props.ingredients}</p>
            
        </div>
    )
}

export default Recipe;