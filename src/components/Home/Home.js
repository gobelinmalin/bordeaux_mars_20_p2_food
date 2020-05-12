import React from 'react';
import styles from './Home.module.css'
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
                    <h3>In My Fridge</h3>
                    <p>This website is the result of a huge brainstorming between Mr Gordon Ramsey and three web development's students. The goal is to let the user select ingredients he have in his fridge, in a list, and then make a research to find associate recipes. Furthermore, the website include extra features, such has a "top3" of the most liked recipe, a research by keyword, but also a contact in order to contact the developer's team !"</p>
                    <div className={styles.InMyFridgeBtn}>
                        <button className={styles.buttonHome} ><Link smooth to='/inMyFridge'>Get a meal</Link></button>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.Diet}>
                    <h3>Diet section</h3>
                    <p>New features ! You can now search a recipe with a complexe research which takes into account a lot of dietetic informations, such as  specififc diets, intolerances or macro and micro nutrients.</p>
                        <button className={styles.buttonDiet} ><Link smooth to='/diet'>Recipe by diet</Link></button>
                </div>
            </div>
            
            <div>
                <div className={styles.BackgroundImage2}>
                    <h3>Our team</h3>
                    <div className={styles.AllPortrait} >
                        <PortraitCard
                            imageUrl={require('../../Images/David.jpg')}
                            name={'David'}
                            text={"Front-end React developer who loves to see brillant ideas come to life. I also like making music, playing video games and hanging out with friends."}
                        />
                        <PortraitCard
                            imageUrl={require('../../Images/Johanna.jpg')}
                            name={'Johanna'}
                            text={'JS/REACT developper who loves reading, coding, play video games and spending time with my friends'}
                        />
                        <PortraitCard
                            imageUrl={require('../../Images/Pierre.jpg')}
                            name={'Pierre'}
                            text={"Passionate about web development, reading psychology's books, I also like jogging and swimming without forgetting to have fun with my friends !"}
                        />
                    </div>
                    <div className={styles.AboutUsBtn} >
                        <button className={styles.buttonHome}><Link smooth to='/aboutUs'>About us</Link></button>
                    </div>
                </div>
                <div className={styles.BackgroundImage3}>
                    <h3>Any questions?</h3>
                    <div className={styles.ContactUsBtn}>
                        <button className={styles.buttonHome}><Link smooth to='/contactUs'>Contact us</Link></button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;