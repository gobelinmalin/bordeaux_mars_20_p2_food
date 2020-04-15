import React, { Component } from 'react';
import styles from './InMyFridge.module.css';
import RecipeList from './RecipeList/RecipeList';
import NavbarCategories from './NavbarCategories/NavbarCategories';

class InMyFridge extends Component{

    render() {


        return (
            <React.Fragment>
                <div className={styles.BackgroundImage}>
                    <h1>In my Fridge</h1>
                </div>
                <h2 className={styles.Subtitle} >Get your meal</h2>
                <div className={styles.GlobalContainer}>
                    <NavbarCategories />
                    <RecipeList />
                </div>
                
            </React.Fragment>
        )

    }
    
}

export default InMyFridge