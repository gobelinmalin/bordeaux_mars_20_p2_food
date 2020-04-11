import React from 'react';
import styles from './Home.module.css'

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <div className={styles.BackgroundImage1} ></div>
                <div className={styles.Title} >
                    <h1>In My Fridge !</h1>
                    <p>When all your wishes become real</p>
                </div>
            </div>
            <div className={styles.FirstPart} >
                <div className={styles.Fridge} ></div>
                <div className={styles.InMyFridge} >
                    <h3>In My Fridge</h3>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit"</p>
                    <button>Go live</button>
                </div>
            </div>
            <div>
                <div className={styles.BackgroundImage2}></div>
                
            </div>
        </React.Fragment>
    )
}

export default Home;