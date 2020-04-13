import React, { Component } from 'react'
import styles from './ContactUs.module.css'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email: '',
            message : ''
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    handleChangeMessage = (e) => {
        this.setState({
            message : e.target.value
        });
    }

    handleChangeEmail = (e) => {
        this.setState({
            email : e.target.value
        });
    }

    render(){
        return(
        <div>
            <div className={styles.Title}>
                <div className={styles.ImgBackground} />
                <h1>Contact Us</h1>
            </div>
            <div className={styles.ContactUs}>
                <div className={styles.LeftInformations}>
                    <div className={styles.LeftLocation}>
                        <div className={styles.LeftLocationImage}>
                            <img src="../../Images/Icone/Location-icone.png" alt=" icone"/>
                        </div>
                        <div className={styles.LeftLocationText}>
                            <h2>Location</h2>
                            <p>9 allée de Serr,</p>
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
                    <h1> Get In Touch</h1>
                    <form onSubmit={this.handleSubmit}>
                    <div className={styles.FormGroup}>
                        <label htmlFor="name">Name* :</label>
                        <input 
                        type="text"
                        className={this.state.name.length < 5 ? styles.InputBad : styles.InputOk}
                        onChange={this.handleChangeName}
                        value={this.state.name}
                        />

                        <label htmlFor="email" className={styles.RightInline}>Email* :</label>
                        <input
                        type="email"
                        className={validEmailRegex.test(this.state.email) ? styles.InputOk : styles.InputBad}
                        onChange={this.handleChangeEmail}
                        value={this.state.email}
                        />
                    </div>

                    <div className={styles.FormGroup}>
                        <label htmlFor="phone">Phone :</label>
                        <input className={styles.InputOk} />
                        
                        <label htmlFor="subject"className={styles.RightInline}>Subject :</label>
                        <input className={styles.InputOk} />
                    </div>

                    <div className={styles.FormGroup}>
                        <label htmlFor="message">Message* :</label>
                        <textarea 
                        type="text"
                        className={this.state.message.length < 10 ? styles.InputBad : styles.InputOk}
                        onChange={this.handleChangeMessage}
                        value={this.state.message}
                        >
                        </textarea>
                    </div>
                    <div className={styles.button}>
                        <button>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default ContactUs