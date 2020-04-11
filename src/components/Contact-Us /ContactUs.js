import React, { Component } from 'react'
import styles from './ContactUs.module.css'

class ContactUs extends Component {
    render(){
        return(
            <div className={styles.ContactUs}>
                <div className={styles.LeftInformations}>
                    <p>Informations</p>
                    <div className={styles.LeftLocation}>
                        <div className={styles.LeftLocationImage}>
                            <img src="../../Images/Icone/Location-icone.png" alt=" icone"/>
                        </div>
                        <div className={styles.LeftLocationText}>
                            <h2>Location</h2>
                            <p>2 allée de Serr,</p>
                            <p>33300, Bordeaux, FR</p>
                        </div>
                    </div>
                    <div className={styles.LeftPhone}>
                        <div className={styles.LeftPhoneImage}>
                            <img src="../../Images/Icone/phone-icone.png" alt="phone icone"/>
                        </div>
                        <div className={styles.LeftPhoneText}>
                            <h2>Support</h2>
                            <p>+33 6 66 96 17 77</p>
                            <p>24/7 Hours support</p>
                        </div>

                    </div>
                    <div className={styles.LeftMail}>
                        <div className={styles.LeftMailImage}>
                            <img src="../../Images/Icone/mail-icone.png" alt="mail icone"/>
                        </div>
                        <div className={styles.LeftMailText}>
                            <h2>Email</h2>
                            <p>support@emptymyfridge.com</p>
                        </div>
                    </div>
                </div>
                <div className={styles.RightForm}>
                    <div className={styles.RightFormInput}>
                        <input type="text" placeholder="Your Name" value="Name :"></input>
                        <input type="text" placeholder="Your Email" value="Your Email :"></input>
                        <input type="text" placeholder="Your Phone" value="Your Phone :"></input>
                        <input type="text" placeholder="Subject" value="Subject:"></input>
                        <textarea type="text" placeholder="Your Message"></textarea>
                    </div>
                    <div>
                        <input className={styles.FormButton} type="image" id="image" alt="submit-button"
                        src="../../Images/Icone/Submit-Button@2x.png"
                        ></input>
                    </div>
                </div>

            </div>
        );
    }
}

export default ContactUs