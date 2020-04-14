import React, { Component } from 'react';
import styles from './NavbarCategories.module.css';

class NavbarCategories extends Component{
    render() {
        return (
            <div className={styles.CategoryContainer}>
                {this.props.children}
            </div>
        )
    }
}

export default NavbarCategories;