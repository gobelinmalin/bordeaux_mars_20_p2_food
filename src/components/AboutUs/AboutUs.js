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
                        text={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}
                    />
                    <PortraitCard2
                        imageUrl={require('../../Images/Johanna.jpg')}
                        name={'Johanna'}
                        text={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}
                    />
                    <PortraitCard2
                        imageUrl={require('../../Images/Pierre.jpg')}
                        name={'Pierre'}
                        text={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}
                    />
                </div>

                {/* 3 groups of social networks members */}
                <div className={styles.ContainerMembersSocial}>
                    {/* David social networks */}
                    <div className={styles.ContainerMembersSocialContent}>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="" target="_blank">
                                <img className={styles.ImgTwitter} src="../../Images/logo-aboutus-twitter.png" alt="Social network Twitter icon - David" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="" target="_blank">
                                <img className={styles.ImgInstagram} src="../../Images/logo-aboutus-instagram.png" alt="Social network Instagram icon - David" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="" target="_blank">
                                <img className={styles.ImgFacebook} src="../../Images/logo-aboutus-facebook.png" alt="Social network Facebook icon - David" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="" target="_blank">
                                <img className={styles.ImgLinkedin} src="../../Images/logo-aboutus-linkedin.png" alt="Social network LinkedIn icon - David" />
                            </a>
                        </div>
                    </div>
                    {/* Johanna social networks */}
                    <div className={styles.ContainerMembersSocialContent}>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="https://twitter.com/Jwana_Joo" target="_blank">
                                <img className={styles.ImgTwitter} src="../../Images/logo-aboutus-twitter.png" alt="Social network Twitter icon - Johanna" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="https://www.instagram.com/johannaa_joo/" target="_blank">
                                <img className={styles.ImgInstagram} src="../../Images/logo-aboutus-instagram.png" alt="Social network Instagram icon - Johanna" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_sign-in-submit" target="_blank">
                                <img className={styles.ImgLinkedin} src="../../Images/logo-aboutus-linkedin.png" alt="Social network LinkedIn icon - Johanna" />
                            </a>
                        </div>
                    </div>
                    {/* Pierre social networks */}
                    <div className={styles.ContainerMembersSocialContent}>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="" target="_blank">
                                <img className={styles.ImgTwitter} src="../../Images/logo-aboutus-twitter.png" alt="Social network Twitter icon - Pierre" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="" target="_blank">
                                <img className={styles.ImgInstagram} src="../../Images/logo-aboutus-instagram.png" alt="Social network Instagram icon - Pierre" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="" target="_blank">
                                <img className={styles.ImgFacebook} src="../../Images/logo-aboutus-facebook.png" alt="Social network Facebook icon - Pierre" />
                            </a>
                        </div>
                        <div className={styles.ContainerMembersSocialLinksContent}>
                            <a href="" target="_blank">
                                <img className={styles.ImgLinkedin} src="../../Images/logo-aboutus-linkedin.png" alt="Social network LinkedIn icon - Pierre" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;