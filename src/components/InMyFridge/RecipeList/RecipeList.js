import React from 'react';
import styles from "./RecipeList.module.css";
import MiniRecipe from '../RecipeList/MiniRecipe/MiniRecipe';
import Recipe from "./Recipe/Recipe";
import Loader from '../../Assets/CssLoader/Loader';

const RecipeList = (props) => {
    return (
        <div className={styles.CardsContainer}>
            <div className={styles.Top12}>
                <h2>{props.topTitle}</h2>
                <div className={styles.ContainerTop12}>
                    {props.topRecipe.map((element, index) => {
                        return <MiniRecipe
                                    key={index}
                                    image={element.image}
                                    title={element.title}
                                    aggregateLikes= {element.aggregateLikes}
                                    id={element.id}
                                />
                        })}
                </div>  
            </div>
            <h2 className={styles.ListTitle}>{props.listTitle}</h2>
            <div className={styles.RecipeList}>
                {props.recipeList.map((element, index) => {

                    return  <Recipe
                                key={index}
                                image={element.image}
                                title={element.title}
                                missedIngredients={element.missedIngredients.slice(0,8).map(
                                    
                                    (nameingredient,index2) => <span key={index2}> {nameingredient.name}, </span>
                                )}
                                usedIngredients= {element.usedIngredients.map(
                                    (nameingredient, index3) => <span key={index3}>{nameingredient.name},</span>
                                )}
                                recipeLikes= {element.likes}
                                id={element.id}
                            />
                })}
            </div>
            <div className={styles.ContainerSpinner}>
                {
                props.isLoading
                ? <Loader />
                : null
                }
            </div>
            <div className={styles.RecipeList}>
                {props.recipeSearch.map((element, index) => {

                    return <Recipe
                                key={index}
                                image={`https://spoonacular.com/recipeImages/${element.image}`}
                                title={element.title}
                                readyInMinutes={element.readyInMinutes}
                                servings={element.servings}
                                id={element.id}
                            />
                })}
            </div>
        </div>
    )
}

export default RecipeList;