import React, { Component } from 'react';
import styles from './VegetablesList.module.css'
import IngredientItem from '../IngredientItem/IngredientItem';

class VegetablesList extends Component {
    render() {
        return (
            <div className={styles.List}>
                <div>
                    <ul>
                        <li>
                            <IngredientItem 
                                itemName='Carrot'
                            />
                        </li>
                            <IngredientItem 
                                itemName='Spinach'
                            />
                        <li>
                            <IngredientItem 
                                itemName='Onions'
                            />
                        </li>
                            <IngredientItem 
                                itemName='Brocoli'
                            />
                        <li>
                            <IngredientItem 
                                itemName='Potatoe'
                            />
                        </li>
                    </ul>
                </div>
                
                 <div>
                    <ul>
                        <li>
                            <IngredientItem 
                                itemName='Tomatus'
                            />
                        </li>
                            <IngredientItem 
                                itemName='Garlic'
                            />
                        <li>
                            <IngredientItem 
                                itemName='Salad'
                            />
                        </li>
                            <IngredientItem 
                                itemName='Sweet potatoe'
                            />
                        <li>
                            <IngredientItem 
                                itemName='Eggplant'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default VegetablesList;