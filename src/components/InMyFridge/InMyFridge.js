import React, { useState, useEffect } from 'react';
import styles from './InMyFridge.module.css';
import RecipeList from './RecipeList/RecipeList';
import NavbarCategories from './NavbarCategories/NavbarCategories';
import axios from 'axios';

const InMyFridge = () => {

    const [ checkedIngredients, setCheckedIngredients] = useState([])
    const [ recipeList, setRecipeList] = useState([])
    const [ randomJoke, setRandomJoke] = useState([])
    const [ recipeSearch, setRecipeSearch] = useState([])
    const [ inputFromSearch, setInputFromSearch] = useState([])
    const [ loading, setLoading] = useState(false)
    const [ topRecipe, setTopRecipe] = useState([])

    const myCallback = (dataFromChild) => {
        setCheckedIngredients(dataFromChild)
    }

    const myCallbackSearch = (dataFromSearch) => {
        setInputFromSearch(dataFromSearch)
    }

    useEffect(()=> {
        const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random' 
        axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
              }
            })
        .then(response => response.data)
        .then(data => setRandomJoke(Object.values(data)[0]))
        .catch(error => console.log(error));

    }, [] )
        

    

    const getRecipeBySearch = () => {
         setRecipeList([])
         setLoading(true)
         setRecipeSearch([])

        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${inputFromSearch}&offset=0&number=12`;
        axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
              }
            })
        .then(response => response.data)
        .then(data => {
            setRecipeSearch(data.results)
            setLoading(false)
            })
        .catch(error => console.log(error));
    }
    
    const getRecipes = () => {
        setRecipeList([])
        setLoading(true)
        setRecipeSearch([])

        const filteredArray = checkedIngredients.filter(element => {
            const value = Object.values(element);
            const key = Object.keys(element);

            if (value[0] === true) {
                return key[0]
            }
        });

        const finalArray = filteredArray.map(element => Object.keys(element)).join(',');
        
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=12&ranking=10&ingredients=${finalArray}`; // ingredientsNames + %252C
        axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
              }
            })
        .then(response => response.data)
        .then(data => {
            setRecipeList(data)
            setLoading(false)
        })
        
    }

        return (
            <React.Fragment>
                <div className={styles.BackgroundImage}>
                    <h1>In my Fridge</h1>
                    <p>"{randomJoke}"</p>
                </div>
                <h2 className={styles.Subtitle} >Get your meal</h2>
                <div className={styles.GlobalContainer}>
                    <NavbarCategories
                        ingredientChoice={myCallback}
                        buttonCall={getRecipes}
                        myCallbackSearch={myCallbackSearch}
                        getRecipeBySearch = {getRecipeBySearch}
                        listOfIngredients={checkedIngredients} //give the list of checked ingredients
                    />
                    <RecipeList
                        recipeList={recipeList}
                        recipeSearch={recipeSearch}
                        isLoading={loading}
                    />
                </div>
                
            </React.Fragment>
        )
}

export default InMyFridge