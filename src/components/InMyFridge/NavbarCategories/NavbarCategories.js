import React, { Component } from 'react';
import styles from './NavbarCategories.module.css';
import CategoryIngredient from './CategoryIngredient/CategoryIngredient';
import Fish from '../../../Images/Icone/Fish.png'
import Vegetables from '../../../Images/Icone/Vegetables.png'
import Meat from '../../../Images/Icone/Meat.png'
import Cereals from '../../../Images/Icone/Cereals.png'
import axios from 'axios'

class NavbarCategories extends Component{

    state= {
        
    }

   

    
    
    render() {
        const listCategories = [
            {
                title: 'Vegetables',
                icon: Vegetables,
                ingredients: ['broccoli','carrot','salad','tomate','aubergine','potatoe'],
            },
            {
                title: 'Meat',
                icon: Meat,
                ingredients: ['veau', 'mouton', 'dinde', 'porc', 'canard', 'boeuf', 'lapin', 'hérisson']
            },
            {
                title: "Fish",
                icon: Fish,
                ingredients: ['saumon', 'bar', 'morue', 'maquereau', 'sardine', 'thon', 'baleine'],
            },
            {
                title: "Cereals",
                icon: Cereals,
                ingredients: ['avoine', 'seigle', 'blé', 'épeautre', 'petit épeautre', 'riz', 'seigle'],
            },
        ]
        
        return (
            
            <div className={styles.CategoryContainer}>
                {listCategories.map((element, index) => {
                    return <CategoryIngredient
                        key={index}
                        imageUrl={element.icon}
                        itemName={element.title}
                        ingredientsList={element.ingredients}
                        
                    />
                })}
                <button>Get a recipe !</button>
            </div>
        )
    }
}

export default NavbarCategories;