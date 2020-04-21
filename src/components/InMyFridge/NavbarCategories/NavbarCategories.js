import React, { Component } from 'react';
import styles from './NavbarCategories.module.css';
import CategoryIngredient from './CategoryIngredient/CategoryIngredient';
// import Fish from '../../../Images/Icone/Fish.png'
// import Vegetables from '../../../Images/Icone/Vegetables.png'
// import Meat from '../../../Images/Icone/Meat.png'
// import Cereals from '../../../Images/Icone/Cereals.png'
// import axios from 'axios'
import ingredients from '../../../data/Ingredients'

class NavbarCategories extends Component{
        
    render() {
        return (
            <div className={styles.CategoryContainer}>
                {ingredients.map((element, index) => {
                    return <CategoryIngredient
                        callbackFromParent={this.props.ingredientChoice}
                        key={index}
                        imageUrl={element.icon}
                        itemName={element.title}
                        categoryIngredientsName ={element.ingredientsName.map(element => element.name)}
                        
                    />
                })}
                <button className={styles.buttonCall} onClick={this.props.buttonCall}>Get a recipe</button>
            </div>
        )
    }
}

export default NavbarCategories;