import React, {Component} from 'react';
import styles from './CategoryIngredient.module.css'
import CategoryIcon from '../../../Assets/CategoryIcon/CatergoryIcon';
import ingredients from '../../../../data/Ingredients';
import ingredientsList from '../../../../data/IngredientsList';

class CategoryIngredient extends Component{

    state = {
        toggle: false,
        ingredientsList: ingredientsList
    }

    handleToggle = () => {
        this.setState({
            toggle : !this.state.toggle
        });
    }

    async handleChecked (event) {
        const item = event.target.name;
        const checked = event.target.checked;
        const updatedIngredientsList = this.state.ingredientsList.map(element => {
            if(Object.keys(element) == item){
                return {[item]: true}
            }
            else{
                return element
            }
        });
        
        await this.setState({ingredientsList: updatedIngredientsList});
        this.toGiveToParent();
    }
    
    toGiveToParent = () => {
        console.log('passed')
        const { ingredientsList } = this.state;
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
                            {this.props.categoryIngredientsName.map((element, index) =>  {
                                return  <div key={index} className={styles.ItemList}>
                                            <p>{element}</p>
                                            <input
                                                name={element}
                                                type='checkbox'
                                                onChange={this.handleChecked.bind(this)}          
                                            />
                                        </div>
                                        
                                })
                            }
                        </div>

                        :null
                    }
                    
                </div>
            </React.Fragment>
        )
    }
}

export default CategoryIngredient;