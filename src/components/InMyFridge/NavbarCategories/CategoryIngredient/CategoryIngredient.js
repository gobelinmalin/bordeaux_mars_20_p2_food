import React, {Component} from 'react';
import styles from './CategoryIngredient.module.css'
import CategoryIcon from '../../../Assets/CategoryIcon/CatergoryIcon';
import ingredientsList from '../../../../data/IngredientsList';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#10AC84',
      }
    },
  });

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
  });

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
                <div className= {this.state.toggle ? `${styles.ItemWithCat}` : `${styles.Item}`}>
                    <div className={styles.IconAndName}>
                        <CategoryIcon
                            imageUrl={this.props.imageUrl}
                        />
                        <h3>{this.props.itemName}</h3>
                    </div>
                    {/* <input onClick={this.handleToggle} type='checkbox'  /> */}
                    <ThemeProvider theme={theme}>
                        <Switch 
                        onChange={this.handleToggle}
                        color="primary"
                        />
                    </ThemeProvider>
                </div>
                <div>
                    {this.state.toggle ?
                        <div className={styles.List}>
                            {this.props.categoryIngredientsName.sort().map((element, index) =>  {
                               
                                const checkList = this.state.ingredientsList.filter(element2 => { //filter the ingredientList and keep only the ingredients checked.
                                    if(Object.values(element2)[0] === true){
                                        return element2
                                    }
                                })
                                const arrayOfarrays = checkList.map(element=> Object.keys(element)) //get the ingredients names (keys).
                                let checkedIngredientsList = Array.prototype.concat.apply([], arrayOfarrays);// transform the arrayOfArray into a unique array.
                
                                return  <div key={index} className={styles.ItemList}>
                                            <p>{element}</p>
                                            <ThemeProvider theme={theme}>
                                            <Checkbox
                                                style={{ width: 8, height: 8 }}
                                                name={element}
                                                color="primary"
                                                size="small"
                                                onChange={this.handleChecked.bind(this)}
                                                defaultChecked={checkedIngredientsList.indexOf(element) != -1 ? true: false} // check if the element is already in the checkedIngredientList, and if so, check the checkbox.
                                                       
                                            />
                                            </ThemeProvider>
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