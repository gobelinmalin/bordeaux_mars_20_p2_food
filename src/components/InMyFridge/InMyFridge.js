import React, { Component } from 'react';
import styles from './InMyFridge.module.css';
import RecipeList from './RecipeList/RecipeList';
import NavbarCategories from './NavbarCategories/NavbarCategories';
import Axios from 'axios';

class InMyFridge extends Component{

    state = {
        checkedIngredients: [], // choix des ingrédients checké par l'utilisateur
        recipeList: [],
    }

    myCallback = (dataFromChild) => {
        this.setState({checkedIngredients: dataFromChild})
    }

    getRecipes = () => {
        let { checkedIngredients } = this.state;
        const filteredArray = checkedIngredients.filter(element => {
            const value = Object.values(element);
            const key = Object.keys(element);

            if (value[0] === true) {
                return key[0]
            }
        });

        const finalArray = filteredArray.map(element => Object.keys(element)).join(',');
        
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=12&ranking=10&ingredients=${finalArray}`; // ingredientsNames + %252C
        Axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
              }
            })
        .then(response => response.data)
        .then(data => this.setState({
            recipeList : data
        }))
    }

    render() {
        const { recipeList } = this.state;
        console.log(recipeList);
        return (
            <React.Fragment>
                <div className={styles.BackgroundImage}>
                    <h1>In my Fridge</h1>
                </div>
                <h2 className={styles.Subtitle} >Get your meal</h2>
                <div className={styles.GlobalContainer}>
                    <NavbarCategories
                        ingredientChoice={this.myCallback}
                        buttonCall={this.getRecipes}
                    />
                    <RecipeList
                        recipeList={recipeList}
                    />
                </div>
                
            </React.Fragment>
        )
    }
}

export default InMyFridge