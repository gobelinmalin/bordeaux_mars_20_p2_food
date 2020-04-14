import React, { Component } from 'react';
import styles from './Vegetables.module.css';
import CategoryIcon from '../../../../Assets/CategoryIcon/CatergoryIcon';
import VegetablesList from './VegetablesList';

class Vegetables extends Component {

    state= {
        checked: false,
    }

    checkerHandler = () => {
        this.setState({checked: !this.state.checked})
        console.log(this.state.checked)
    }

    render() {

        

        return (
            <div className={styles.Category}>
                <div className={styles.CategoryName}>
                    <div className={styles.IconAndName}>
                        <CategoryIcon imageUrl={require('../../../../../Images/Icone/Vegetables.png')}/>
                        <h3>Vegetables</h3>
                    </div>
                    <input type="checkbox" onChange={this.checkerHandler} className={styles.Checkbox}/>
                </div>
                {this.state.checked? <VegetablesList /> : null}
            </div>
        )
    }
}

export default Vegetables;