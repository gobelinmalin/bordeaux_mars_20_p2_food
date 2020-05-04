import React, { Component, useState, useEffect } from 'react';
import styles from './NavbarCategories.module.css';
import CategoryIngredient from './CategoryIngredient/CategoryIngredient';
import axios from 'axios';
import ingredients from '../../../data/Ingredients';
import Loader from '../../Assets/CssLoader/Loader';

const NavbarCategories = (props) => {
    const [userInput, setUserInput] = useState("");
    
    const handleChange = (event) => {
        const userValue = event.target.value;
        setUserInput(userValue);
    }

    const dataFromSearch = () => {
        props.myCallbackSearch(userInput);
    }

    useEffect(() => {
        dataFromSearch();
    }, [userInput])

    const isChecked = () => {
        //check the ingredient checked with filter in order to enable the button
       const filteredArray = props.listOfIngredients.filter(element => {
           if(Object.values(element)[0] === true){
               return element;
           }
       });
       // check if user has checked an ingredient and return the result
       if (!filteredArray.length > 0) {
           return true;
       }
       else {
           return false;
       }
    }

    const enterKeyPress = (event) => {
        if(event.keyCode === 13 && event.target.value !== ''){
            props.getRecipeBySearch();
         }
    }

    return (
        <div className={styles.CategoryContainer}>
            <div className={styles.ContainerSearch}>
                <h2>Make a search</h2>
                <input placeholder='ex : "Burger"'type='text' value={userInput} onChange={handleChange} onKeyDown={enterKeyPress}/>
                <button className={styles.buttonCall} disabled={userInput.length === 0} onClick={props.getRecipeBySearch}>Search a meal</button>
            </div>
            <hr/>
            <h2>Choose your ingredient(s)</h2>
            {ingredients.map((element, index) => {
                return <CategoryIngredient
                    callbackFromParent={props.ingredientChoice}
                    key={index}
                    imageUrl={element.icon}
                    itemName={element.title}
                    categoryIngredientsName={element.ingredientsName.map(element => element.name)}
                    
                />
            })}
            <button className={styles.buttonCall} disabled={isChecked()} onClick={props.buttonCall}>Get a recipe</button>
        </div>
    )
}

export default NavbarCategories;