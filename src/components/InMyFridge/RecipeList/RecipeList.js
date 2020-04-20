import React, { Component } from 'react';
import styles from "./RecipeList.module.css";
import Recipe from './Recipe'
import axios from 'axios';

class RecipeList extends Component {
    
    state = {
        // recipes: [],
        id: ''
    };

    // componentDidMount() {
    //     axios
    //   .get(
    //     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%252Cflour%252Csugar",
    //     {
    //       headers: {
    //         "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //         "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
    //       }
    //     }
    //   )
    //   .then(response => response.data)
    //   .then(data => this.setState({recipes: data}))
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // }

    render(){
      // const { recipes } = this.state;
      
        return (
            <div className={styles.CardsContainer}>
                <div className={styles.RecipeList}>
                    {this.props.recipeList.map((element, index) => {

                        return  <Recipe
                                    key={index}
                                    image={element.image}
                                    title={element.title}
                                    ingredients={element.missedIngredients.map(
                                      nameingredient => <span> {nameingredient.name}, </span>
                                    )}
                                />
                    })}
                </div>
            </div>
        )
    }
}

export default RecipeList;