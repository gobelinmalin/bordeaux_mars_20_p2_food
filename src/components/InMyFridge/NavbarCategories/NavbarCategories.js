import React, { Component, useState, useEffect } from 'react';
import styles from './NavbarCategories.module.css';
import CategoryIngredient from './CategoryIngredient/CategoryIngredient';
import axios from 'axios';
import ingredients from '../../../data/Ingredients';

const NavbarCategories = (props) => {
    const [userInput, setUserInput] = useState("");
    const [search, setSearch] = useState([]);
    
    const handleChange = (event) => {
        const userValue = event.target.value;
        setUserInput(userValue);
    }

    const handleClick = () => {
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${userInput}&offset=0&number=12`;
        axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
              }
            })
        .then(response => response.data)
        .then(data => setSearch(data.results))
        .catch(error => console.log(error));
    }

    const dataFromSearch = () => {
        props.myCallbackSearch(search);
    }

    useEffect(() => {
        dataFromSearch();
    }, [search])

    
    return (
        <div className={styles.CategoryContainer}>
            <div className={styles.ContainerSearch}>
                <h2>Make a search</h2>
                <input placeholder='Your query, ex : "Burger"'type='text' value={userInput} onChange={handleChange} />
                <button className={styles.buttonCall} onClick={handleClick}>Search a meal</button>
            </div>
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
            <button className={styles.buttonCall} onClick={props.buttonCall}>Get a recipe</button>
        </div>
    )
}

export default NavbarCategories;