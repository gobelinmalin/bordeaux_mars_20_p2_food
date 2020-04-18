import React, {Component} from 'react';
import styles from './CategoryIngredient.module.css'
import CategoryIcon from '../../../Assets/CategoryIcon/CatergoryIcon';
import ingredients from '../../../../data/Ingredients';
import ingredientsList from '../../../../data/IngredientsList';

class CategoryIngredient extends Component{

    state ={
        toggle: false,
        ingredients: ingredients,
        ingredientsList: ingredientsList
    }

    handleToggle = () => {
        this.setState({
            toggle : !this.state.toggle
        })
    }

    handleChecked = (event) => {
        const item = event.target.name;
        const checked = event.target.checked;
        
        this.setState(prevState => ({
            ingredientsList: {                   
                ...prevState.ingredientsList,    
                [item]: checked
            }
        }), () => console.log(this.state.ingredientsList))
    }
    
    toGiveToParent = () => {
        const ingredientsList = this.state.ingredientsList;
        this.props.callbackFromParent(ingredientsList);
    }

    render(){

    return (
        <React.Fragment>
            <div className={styles.Item}>
                <div className={styles.IconAndName}>
                    <CategoryIcon
                        imageUrl={this.props.imageUrl}
                    />
                    <h3>{this.props.itemName}</h3>
                </div>
                
                <input onClick={this.handleToggle} type='checkbox' />
            </div>
            <div>
                {this.state.toggle ?
                    <div className={styles.List}>
                    {this.props.ingredientsList.map((element, index) =>  {
                        return  <div key={index} className={styles.ItemList}>
                                    <p>{element}</p>
                                    <input
                                        name={element}
                                        type='checkbox'
                                        onChange={this.handleChecked}          
                                    />
                                </div>
                                
                    })}
                       
                    </div>

                    :null
                }
                
            </div>
        </React.Fragment>
    )
    }
}

export default CategoryIngredient;