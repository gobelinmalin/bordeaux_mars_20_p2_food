import React, { Component, useState } from 'react';
import styles from "./RecipeList.module.css";
import Recipe from './Recipe';
import Loader from '../../Assets/CssLoader/Loader';

const RecipeList = (props) => {
    return (
        <div className={styles.CardsContainer}>
            <div className={styles.RecipeList}>
                {props.recipeList.map((element, index) => {

                    return  <Recipe
                                key={index}
                                image={element.image}
                                title={element.title}
                                missedIngredients={element.missedIngredients.slice(0,8).map(
                                    
                                    nameingredient => <span> {nameingredient.name}, </span>
                                )}
                                usedIngredients= {element.usedIngredients.map(
                                    nameingredient => <span>{nameingredient.name},</span>
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