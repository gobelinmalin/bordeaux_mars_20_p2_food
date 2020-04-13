import React from 'react';
import styles from './Footer.module.css';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className={styles.Footer}>

            <div className={styles.ContainerContentLinks}>

                <div className={styles.ContainerContentLinksItems}>
                    <ul>
                        <h2>Empty my Fridge</h2>
                        <a href="">
                            <li><Link smooth to='/home'>Home</Link></li>
                        </a>
                        <a href=""><li>In my fridge</li></a>
                        <a href=""><li>About us</li></a>
                        <a href=""><li>Contact us</li></a>
                        <a href=""><li>Legal notice</li></a>
                    </ul>
                </div>
                <div className={styles.ContainerContentContacts}>
                    <ul>
                        <h4>Informations</h4>
                        <li>9 allée Serr, 33100 Bordeaux</li>
                        <li>contact@emptyyourfridge.com</li>
                        <li>+33 6 30 60 78 90</li>
                    </ul>
                </div>
                <div className={styles.ContainerContentSocial}>
                    <ul>
                        <h4>Follow us</h4>
                        <div className={styles.ContainerContentSocialLinks}>
                            <div className={styles.ContainerContentSocialLinksImg}>
                                <a href="https://twitter.com/">
                                    <img className={styles.ImgTwitter} src="../../Images/logo-footer-twitter.png" alt="Social network Twitter icon" />
                                </a>
                            </div>
                            <div className={styles.ContainerContentSocialLinksImg}>
                                <a href="https://www.instagram.com/">
                                    <img className={styles.ImgInstagram} src="../../Images/logo-footer-instagram.png" alt="Social network Instagram icon" />
                                </a>
                            </div>
                            <div className={styles.ContainerContentSocialLinksImg}>
                                <a href="https://fr-fr.facebook.com/">
                                    <img className={styles.ImgFacebook} src="../../Images/logo-footer-facebook.png" alt="Social network Facebook icon" />
                                </a>
                            </div>
                        </div>
                    </ul>
                </div>

            </div>

            <div className={styles.ContainerContentCopyright}>
                <p><small>© Copyright: Website created by Pierre, David and Johanna</small></p>
            </div>

        </div>
    )
}

export default Footer;