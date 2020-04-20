import React, { Component } from 'react';
import styles from './InMyFridge.module.css';
import RecipeList from './RecipeList/RecipeList';
import NavbarCategories from './NavbarCategories/NavbarCategories';
import Axios from 'axios';
// import ingredients from '../../data/Ingredients';

class InMyFridge extends Component{

    state = {
        checkedIngredients: {} // choix des ingrédients checké par l'utilisateur
    }

    myCallback = (dataFromChild) => {
        this.setState({checkedIngredients: dataFromChild})
    }

    getRecipes = () => {
        const { checkedIngredients } = this.state;
        checkedIngredients.filter(element => {
            if(Object.values(element) === true){
                return Object.keys(element);
            }
        })
        console.log(checkedIngredients);
        
        

        //https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ingredients=apples%252Cflour%252Csugar
        
    }

    render() {
        console.log(this.state.checkedIngredients)
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
                    <RecipeList />
                </div>
                
            </React.Fragment>
        )
    }
}

export default InMyFridge