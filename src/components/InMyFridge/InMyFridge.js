import React, { Component } from 'react';
import styles from './InMyFridge.module.css';
import RecipeList from './RecipeList/RecipeList';
import NavbarCategories from './NavbarCategories/NavbarCategories';
import axios from 'axios';

class InMyFridge extends Component{

    state = {
        checkedIngredients: [], // choix des ingrédients checké par l'utilisateur
        recipeList: [],
        randomJoke: '',
        recipeSearch: [],
        inputFromSearch: '',
        loading: false,
        topRecipe: [],
    }

    myCallback = (dataFromChild) => {
        this.setState({checkedIngredients: dataFromChild});
    }

    myCallbackSearch = (dataFromSearch) => {
        this.setState({inputFromSearch: dataFromSearch});
    }

    componentDidMount() {
        const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random' 
        axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
              }
            })
        .then(response => response.data)
        .then(data => this.setState({
            randomJoke : Object.values(data)[0]
        }));
        // .catch(error => console.log(error)));


        // const top100 = [];
        // const urlTop = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100'
        // axios.get(urlTop,
        //     {
        //       headers: {
        //         "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        //         "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
        //       }
        //     })
        // .then(response => response.data)
        // .then(data => top100 = data.recipes)
        // .catch(error => console.log(error));

        
    }

     getRecipeBySearch = () => {
        this.setState({
            recipeList: [],
            loading: true,
            recipeSearch : [],
        });
        const { inputFromSearch } = this.state;
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${inputFromSearch}&offset=0&number=12`;
        axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
              }
            })
        .then(response => response.data)
        .then(data => this.setState({   recipeSearch: data.results,
                                        loading: false}))
        .catch(error => console.log(error));
    }
    
    getRecipes = () => {
        this.setState({recipeSearch : [], loading: true, recipeList : []}) //clear the previous list of recipe from search
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
        axios.get(url,
            {
              headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
              }
            })
        .then(response => response.data)
        .then(data => this.setState({
            recipeList : data,
            loading: false,
        }))
    }

    render() {
        const { recipeList, recipeSearch, inputFromSearch, loading, checkedIngredients,topRecipe } = this.state;
        // console.log(top100);
        return (
            <React.Fragment>
                <div className={styles.BackgroundImage}>
                    <h1>In my Fridge</h1>
                    <p>"{this.state.randomJoke}"</p>
                </div>
                <h2 className={styles.Subtitle} >Get your meal</h2>
                <div className={styles.GlobalContainer}>
                    <NavbarCategories
                        ingredientChoice={this.myCallback}
                        buttonCall={this.getRecipes}
                        myCallbackSearch={this.myCallbackSearch}
                        getRecipeBySearch = {this.getRecipeBySearch}
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
}

export default InMyFridge