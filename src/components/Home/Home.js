import React from 'react';
import styles from './Home.module.css'
import Button from '@material-ui/core/Button';
import PortraitCard from './PortraitCard';
import { HashLink as Link } from 'react-router-hash-link';


const Home = () => {

// 
    return (
        <React.Fragment>
            <div>
                <div className={styles.BackgroundImage1} ></div>
                <div className={styles.Title} >
                    <h1>Empty Your Fridge !</h1>
                    <p className={styles.Subtitle} >When all your wishes become real</p>
                </div>
            </div>
            <div className={styles.FirstPart} >
                <div className={styles.Fridge} ></div>
                <div className={styles.InMyFridge} >
                    <h3>Empty Your Fridge</h3>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit"</p>
                    <div className={styles.InMyFridgeBtn}>
                        <Button variant="contained"><Link smooth to='/inMyFridge'>Get a meal</Link></Button>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.BackgroundImage2}>
                    <h3>Our team</h3>
                    <div className={styles.AllPortrait} >
                        <PortraitCard
                            imageUrl={require('../../Images/David.jpg')}
                            name={'David'}
                            text={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}
                        />
                        <PortraitCard
                            imageUrl={require('../../Images/Johanna.jpg')}
                            name={'Johanna'}
                            text={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}
                        />
                        <PortraitCard
                            imageUrl={require('../../Images/Pierre.jpg')}
                            name={'Pierre'}
                            text={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}
                        />
                    </div>
                    <div className={styles.AboutUsBtn} >
                        <Button variant="contained"><Link smooth to='/aboutUs'>About us</Link></Button>
                    </div>
                </div>
                <div className={styles.BackgroundImage3}>
                    <h3>Any questions?</h3>
                    <div className={styles.ContactUsBtn}>
                        <Button variant="contained"><Link smooth to='/contactUs'>Contact us</Link></Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;