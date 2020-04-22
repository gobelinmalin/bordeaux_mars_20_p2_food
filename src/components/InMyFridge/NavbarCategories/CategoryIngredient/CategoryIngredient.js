import React, {Component} from 'react';
import styles from './CategoryIngredient.module.css'
import CategoryIcon from '../../../Assets/CategoryIcon/CatergoryIcon';
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
                return {[item]: checked}
            }
            else{
                return element
            }
        });
        
        await this.setState({ingredientsList: updatedIngredientsList});
        this.toGiveToParent();
    }
    
    toGiveToParent = () => {
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
                    <input onClick={this.handleToggle} type='checkbox'  />
                </div>
                <div>
                    {this.state.toggle ?
                        <div className={styles.List}>
                            {this.props.categoryIngredientsName.map((element, index) =>  {
                                const checkList = this.state.ingredientsList.filter(element2 => { //filter the ingredientList and keep only the ingredients checked.

                                    if(Object.values(element2)[0] === true){
                                        return element2
                                    }
                                    
                                })
                                const arrayOfarrays = checkList.map(element=> Object.keys(element)) //get the ingredients names (keys).
                                let checkedIngredientsList = Array.prototype.concat.apply([], arrayOfarrays);// transform the arrayOfArray into a unique array.
                
                                return  <div key={index} className={styles.ItemList}>
                                            <p>{element}</p>
                                            <input
                                                name={element}
                                                type='checkbox'
                                                onChange={this.handleChecked.bind(this)}
                                                defaultChecked={checkedIngredientsList.indexOf(element) != -1 ? true: false} // check if the element is already in the chechedIngredientList, and if so, check the checkbox.
                                                       
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