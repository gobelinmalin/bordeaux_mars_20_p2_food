import React, { useState, useEffect } from 'react';
import styles from './InMyFridge.module.css';
import RecipeList from './RecipeList/RecipeList';
import NavbarCategories from './NavbarCategories/NavbarCategories';
import axios from 'axios';
const dotenv = require('dotenv');

const InMyFridge = () => {
    const env = dotenv.config().parsed;

    const [ checkedIngredients, setCheckedIngredients ] = useState([])
    const [ recipeList, setRecipeList ] = useState([])
    const [ randomJoke, setRandomJoke ] = useState([])
    const [ recipeSearch, setRecipeSearch ] = useState([])
    const [ inputFromSearch, setInputFromSearch ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ topRecipe, setTopRecipe ] = useState([])
    const [ listTitle, setListTitle ] = useState('')
    const [ topTitle, setTopTitle ] = useState('')

    const myCallback = (dataFromChild) => {
        setCheckedIngredients(dataFromChild)
    }

    const myCallbackSearch = (dataFromSearch) => {
        setInputFromSearch(dataFromSearch)
    }

    useEffect(()=> {
        setLoading(true);
        const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random' 
        axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
              }
            })
        .then(response => response.data)
        .then(data => setRandomJoke(Object.values(data)[0]))
        .catch(error => console.log(error));
      
        const urlTop = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=50';
        axios.get(urlTop,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
              }
            })
        .then(response => response.data)
        .then(data => {
            const top12 = data.recipes.sort((a, b) => { // on trie le tableau des recettes random par rapport  au nombre de likes puis on récupère les 12 premières recettes
                return b.aggregateLikes - a.aggregateLikes;
            }).slice(0, 12);
            setTopRecipe(top12)
            setLoading(false)
            setTopTitle('Top recipes')
        })
        .catch(error => console.log(error));

    }, [] )

    const getRecipeBySearch = () => {
         setRecipeList([])
         setLoading(true)
         setRecipeSearch([])
         setListTitle('')
      
         const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${inputFromSearch}&offset=0&number=12`;
         axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
              }
            })
        .then(response => response.data)
        .then(data => {
            setRecipeSearch(data.results)
            setLoading(false)
            setListTitle('Search results')
            })
        .catch(error => console.log(error));
    }
    
    const getRecipes = () => {

        setRecipeList([])
        setLoading(true)
        setRecipeSearch([])
        setListTitle('')
      
        const filteredArray = checkedIngredients.filter(element => {
            const value = Object.values(element);
            const key = Object.keys(element);
            
            if (value[0] === true) {
                return key[0]
            }
            return null;
        });

        const finalArray = filteredArray.map(element => Object.keys(element)).join(',');
        
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=12&ranking=10&ingredients=${finalArray}`; // ingredientsNames + %252C
        axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
              }
            })
        .then(response => response.data)
        .then(data => {
            setRecipeList(data)
            setLoading(false)
            setListTitle('Recipes by ingredients')
        })
    }
    
    return (
        <React.Fragment>
            <div className={styles.BackgroundImage}>
                <h1>In my Fridge</h1>
                <p>"{randomJoke}"</p>
            </div>
            
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
                    topRecipe={topRecipe}
                    listTitle={listTitle}
                    topTitle={topTitle}
                />
            </div>
        </React.Fragment>
    )
}

export default InMyFridge