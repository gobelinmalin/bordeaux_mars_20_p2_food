import React, { Component } from 'react';
import styles from './InMyFridge.module.css';
import RecipeList from './RecipeList/RecipeList';
import NavbarCategories from './NavbarCategories/NavbarCategories';
// import ingredients from '../../data/Ingredients';

class InMyFridge extends Component{

    state= {
        ingredientsList: {}
    }

    myCallback = (dataFromChild) => {
        this.setState({ingredientsList: dataFromChild})
    }

    getRecipes = () => {
        const { ingredientsList } = this.state;
        
        const entries = Object.entries(ingredientsList)
        // const finalArray =  entries.map(entry => Object.assign(entry, { 0: +entry[0] }));
        console.log(entries)

        // var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
        // var result = Object.keys(obj).map(function(key) {
        // return [Number(key), obj[key]];
        // });

        // console.log(result);
    }

    render() {
        console.log(this.state.ingredientsList)
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