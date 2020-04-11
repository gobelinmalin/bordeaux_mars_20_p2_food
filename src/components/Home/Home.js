import React from 'react';
import styles from './Home.module.css'

const Home = () => {
    return (
        <div>
            <div className={styles.BackgroundImage} ></div>
            <div className={styles.Title} ><h1>In My Fridge !</h1></div>
        </div>
    )
}

export default Home;