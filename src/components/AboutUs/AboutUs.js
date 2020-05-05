import React from 'react';
import styles from './AboutUs.module.css';
import PortraitCard2 from './PortraitCard2';
// import { HashLink as Link } from 'react-router-hash-link';

const AboutUs = () => {
    return (
        <div className={styles.AboutUs}>
            <div className={styles.ContainerTitle}>
                <div className={styles.ContainerTitleImgBackground} />
                <h1>About us</h1>
            </div>
            <div className={styles.ContainerMembers}>
                <div className={styles.ContainerMembersImgBackground} />

                <div className={styles.AllPortrait}>
                    <PortraitCard2
                        imageUrl={require('../../Images/David.jpg')}
                        name={'David'}
                        text={"Front-end React developer who loves to see brillant ideas come to life. I also like making music, playing video games and hanging out with friends."}
                    />
                    <PortraitCard2
                        imageUrl={require('../../Images/Johanna.jpg')}
                        name={'Johanna'}
                        text={'JS/REACT developper who loves reading, coding, play video games and spending time with my friends'}
                    />
                    <PortraitCard2
                        imageUrl={require('../../Images/Pierre.jpg')}
                        name={'Pierre'}
                        text={"Passionate about web development, reading personal development's books, I also like jogging and swimming without forgetting to have fun with my friends !"}
                    />
                </div>

                {/* 3 groups of social networks members */}
                <div className={styles.ContainerMembersSocial}>
                    {/* David social networks */}
                    <div className={styles.ContainerMembersSocialContent}>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="https://twitter.com/davidaswell" target="_blank" rel="noopener noreferrer">
                                <img className={styles.ImgTwitter} src="../../Images/logo-aboutus-twitter.png" alt="Social network Twitter icon - David" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="https://www.instagram.com/david.aswell/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.ImgInstagram} src="../../Images/logo-aboutus-instagram.png" alt="Social network Instagram icon - David" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="https://www.linkedin.com/in/david-faure-504b67b3/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.ImgLinkedin} src="../../Images/logo-aboutus-linkedin.png" alt="Social network LinkedIn icon - David" />
                            </a>
                        </div>
                    </div>
                    {/* Johanna social networks */}
                    <div className={styles.ContainerMembersSocialContent}>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="https://twitter.com/Jwana_Joo" target="_blank" rel="noopener noreferrer">
                                <img className={styles.ImgTwitter} src="../../Images/logo-aboutus-twitter.png" alt="Social network Twitter icon - Johanna" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="https://www.instagram.com/johannaa_joo/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.ImgInstagram} src="../../Images/logo-aboutus-instagram.png" alt="Social network Instagram icon - Johanna" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_sign-in-submit" target="_blank" rel="noopener noreferrer">
                                <img className={styles.ImgLinkedin} src="../../Images/logo-aboutus-linkedin.png" alt="Social network LinkedIn icon - Johanna" />
                            </a>
                        </div>
                    </div>
                    {/* Pierre social networks */}
                    <div className={styles.ContainerMembersSocialContent}>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <img className={styles.ImgTwitter} src="../../Images/logo-aboutus-twitter.png" alt="Social network Twitter icon - Pierre" />
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <img className={styles.ImgInstagram} src="../../Images/logo-aboutus-instagram.png" alt="Social network Instagram icon - Pierre" />
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <img className={styles.ImgFacebook} src="../../Images/logo-aboutus-facebook.png" alt="Social network Facebook icon - Pierre" />
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <img className={styles.ImgLinkedin} src="../../Images/logo-aboutus-linkedin.png" alt="Social network LinkedIn icon - Pierre" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;