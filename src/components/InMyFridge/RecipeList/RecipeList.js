import React, { useState} from 'react';
import styles from "./RecipeList.module.css";
import MiniRecipe from '../RecipeList/MiniRecipe/MiniRecipe';
import Recipe from "./Recipe/Recipe";
import Loader from '../../Assets/CssLoader/Loader';
import Slider from "react-slick";

const RecipeList = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        adaptiveHeight: true,
        responsive:  [
            {
                breakpoint: 766,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]   
    };

    return (
        <div className={styles.CardsContainer}>
            <div className={styles.Top12}>
                <h2>{props.topTitle}</h2>
                <div className={styles.ContainerTop12}>
                    <Slider {...settings}>
                        {props.topRecipe.map((element, index) => {
                                return <MiniRecipe
                                            key={index}
                                            image={element.image}
                                            title={element.title}
                                            aggregateLikes= {element.aggregateLikes}
                                            id={element.id}
                                            styles={{ width: 200}}
                                        />
                        })}
                    </Slider>
                </div>   
            </div>
            {/* <div className={styles.ContainerHr}><hr/></div> */}
            <h2 className={styles.ListTitle}>{props.listTitle}</h2>
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