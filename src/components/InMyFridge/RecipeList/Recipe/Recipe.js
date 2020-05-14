import React from 'react';
import RecipeModal from '../RecipeModal/RecipeModal';
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
            
            {/* Condition en fonction des informations "recette pour x personnes" et "temps de préparation" disponibles, sinon on affiche tous
                les ingrédients */}
                    <div className={styles.RecipeIngredients}>
                        {props.usedIngredients === undefined
                        ? <div className={styles.ContainerInformationSearch}>
                            <div className={styles.ReadyInMinutes}>
                                <img src="../../../../Images/Icone/icon-prep-time@2x.png"alt="icone-cooking-min"/>
                                <small>{props.readyInMinutes} minutes</small> 
                            </div>
                            <div className={styles.HowManyPeople}>
                                <img src="../../../../Images/Icone/icon-people-count@2x.png"alt="icone-cooking-min"/>
                                <small>For {props.servings} person(s).</small>
                            </div>
                        </div>
                        : <p><strong>Ingredients: </strong>{props.usedIngredients} {props.missedIngredients}</p>}
                    </div>
            
            {/* Condition en fonction de l'objet "aggregateLikes", s'il existe on affiche les likes */}
            {
                props.aggregateLikes
                ?
                <div className={styles.RecipeLikes}>
                    <div className={styles.RecipeImage}><img src="../../../Images/Icone/icon-like-orange@2x.png" alt="like it"/></div>
                    <div className={styles.RecipeNbLike}><small>{props.aggregateLikes}</small></div>
                </div>
                :   null
            }

            <div className={styles.RecipeButtonLike}>
                <div className={styles.RecipeButton}>
                    <RecipeModal dataRecipe={props.id} />
                </div>
                <div className={styles.RecipeLikesContainer}>
                    {props.recipeLikes === undefined
                    ? null
                    :
                        <div className={styles.RecipeLikes}>
                            <div className={styles.RecipeImage}><img src="../../../Images/Icone/icon-like-orange@2x.png" alt="like it"/></div>
                            <div className={styles.RecipeNbLike}><small>{props.recipeLikes}</small></div>
                        </div>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Recipe;