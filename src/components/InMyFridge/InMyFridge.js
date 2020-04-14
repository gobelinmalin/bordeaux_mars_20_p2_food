import React, { Component } from 'react';
import styles from './InMyFridge.module.css';
import IngredientList from './NavbarCategories/NavbarCategories';
import RecipeList from './RecipeList/RecipeList';
import Vegetables from './NavbarCategories/CategoryList/Vegetables/Vegetables';
import NavbarCategories from './NavbarCategories/NavbarCategories';

class InMyFridge extends Component{

    render() {


        return (
            <React.Fragment>
                <div className={styles.BackgroundImage}>
                    <h1>In my Fridge</h1>
                </div>
                <h2 className={styles.Subtitle} >Get your meal</h2>
                <NavbarCategories>
                    <Vegetables />
                </NavbarCategories>
                <RecipeList />
            </React.Fragment>
        )

    }
    
}

export default InMyFridge