import React from 'react';

import styles from "./Recipe.module.css";

const Recipe = (props) => {
    return (
        <div className={styles.Recipe}>
            <div className={styles.RecipeImgContainer}>
                <img src={props.image} alt="recipe"/>
            </div>
            <div className={styles.RecipeTitle}>
                <h3>{props.title}</h3>
            </div>
            {/* <hr/> */}
            <div className={styles.RecipeIngredients}>
                <p><i>Ingredients :</i> {props.usedIngredients} {props.missedIngredients}</p>
            </div>
            <div className={styles.RecipeButtonLike}>
                <div className={styles.RecipeButton}>
                    <button>Read More</button>
                </div>
                <div className={styles.RecipeLikesContainer}>
                    <div className={styles.RecipeLikes}>
                        <div className={styles.RecipeImage}><img src="../../../Images/Icone/LikeRecipe@2x.png" alt="like it"/></div>
                        {/* <br/> */}
                        <div className={styles.RecipeNbLike}><small>{props.recipeLikes}</small></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;