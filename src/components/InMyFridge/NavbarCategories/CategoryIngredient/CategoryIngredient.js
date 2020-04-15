import React, {Component} from 'react';
import styles from './CategoryIngredient.module.css'
import CategoryIcon from '../../../Assets/CategoryIcon/CatergoryIcon';

class CategoryIngredient extends Component{

    state ={
        toggle: false
    }

handleToggle = () => {
    this.setState({
        toggle : !this.state.toggle
    })
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
                    {this.props.ingredientsList.map(element =>  {
                        return  <div className={styles.ItemList}>
                                    <p>{element}</p>
                                    <input type='checkbox'/>
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