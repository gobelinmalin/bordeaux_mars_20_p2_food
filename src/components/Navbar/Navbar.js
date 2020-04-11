import React from 'react';
import styles from './Navbar.module.css';
import { HashLink as Link } from 'react-router-hash-link';
import LogoFrigo from '../Assets/LogoFrigo/LogoFrigo';

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
        <div className={styles.LogoAndTitleContainer} >
            <LogoFrigo width={'75px'} height={'75px'}/>
            <h2>Empty your fridge</h2>
        </div>
        
            <div className={styles.NavItemsContainer}>
                <div className={styles.NavItems}><Link smooth to='/home'>Home</Link></div>
                <div className={styles.NavItems}><Link smooth to='/inMyFridge'>In my fridge</Link></div>
                <div className={styles.NavItems}><Link smooth to='/aboutUs'>About us</Link></div>
                <div className={styles.NavItems}><Link smooth to='/contactUs'>Contact us</Link></div>
            </div>
        </nav>
    )
}

export default Navbar;