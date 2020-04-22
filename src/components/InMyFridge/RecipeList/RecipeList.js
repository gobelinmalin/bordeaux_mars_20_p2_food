import React, { Component } from 'react';
import styles from "./RecipeList.module.css";
import Recipe from './Recipe'
import axios from 'axios';
import RecipeModal from './RecipeModal/RecipeModal'

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

    // getDataId = (idFromChild) => { // get the ID from child
    //     console.log(idFromChild)
    // }

    render(){
      // const { recipes } = this.state;
      
        return (
            <div className={styles.CardsContainer}>
                <div className={styles.RecipeList}>
                    {this.props.recipeList.map((element, index) => {

                        return  <Recipe
                                    // getData={this.getDataId}
                                    key={index}
                                    image={element.image}
                                    title={element.title}
                                    missedIngredients={element.missedIngredients.map(
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
            </div>
        )
    }
}

export default RecipeList;