import React, { Component } from 'react'
import styles from './ContactUs.module.css'
import axios from 'axios';

const validEmailRegex = 
  RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const validPhoneRegex = 
  RegExp(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/);

class ContactUs extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            phone : '',
            subject: '',
            message : '',
            errors : {
                name : '',
                email : '',
                phone : '',
                message : '',
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  this.state
        }).then((response) => {
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            
              this.setState({
                name: '',
                email:'',
                phone:'',
                subject: '',
                message:'',
            })
            
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }

   

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;

        switch(name){
            case 'name':
                errors.name=
                value.length < 2
                ? 'Full name is not valid'
                : '';
            break;
            case 'email':
                errors.email =    
                validEmailRegex.test(value)
                ? ''
                :'Email is not valid';
            break;
            case 'phone':
                  errors.phone = 
                  validPhoneRegex.test(value)
                  ? ''
                  :'Phone must be at least 10 numbers';
            break;
            case 'message':
                errors.message = 
                value.length < 10
                ? 'Message must be at least 10 characters long'
                : '';
            break;
            default:
            break;
        }

        this.setState({errors, [name]: value});
    }

    render() {
    const {errors, name, email, phone, message, subject} = this.state;
      return (
        <div>
          <div className={styles.Title}>
          <div className={styles.ImgBackground} />
          <h1>Contact Us</h1>
          </div>
          <div className={styles.wrapper}>
              <div className={styles.informations}>
                <div className={styles.LeftLocation}>
                    <div className={styles.LeftLocationImage}>
                        <img src="../../Images/Icone/Location-icone.png" alt="Location icone"/>
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
                        <p>support<br/>@emptymyfridge.com</p>
                    </div>
                </div>
              </div>

              <div className={styles.FormWrapper}>
                <h2>Get in touch</h2>
                  <form onSubmit={this.handleSubmit} noValidate>

                    <div className={styles.name}>
                      <label htmlFor="name" 
                      className={errors.name.length === 22 && `${styles.LabelBad}`}>
                        Full Name *
                      </label>

                        <input
                        value={name}
                        type='text' 
                        name='name' 
                        placeholder="Your name" 
                        className={errors.name.length === 22 && `${styles.InputLengthBad}`}
                        onChange={this.handleChange} 
                        noValidate />

                        {errors.name.length > 0 && 
                        <span className={styles.error}>{errors.name}</span>}
                    </div>

                    <div className={styles.email}>
                      <label 
                      htmlFor="email"
                      className={errors.email.length === 18 && `${styles.LabelBad}`}>
                      Email *
                      </label>

                        <input
                        value={email}
                        type='email' 
                        name='email'
                        placeholder="Your email" 
                        className={errors.email.length === 18 && `${styles.InputLengthBad}` }
                        onChange={this.handleChange} noValidate />

                        {errors.email.length > 0 && 
                        <span className={styles.error}>{errors.email}</span>}
                    </div>

                    <div className={styles.phone}>
                      <label 
                      htmlFor="phone"
                      className={errors.phone.length === 33 && `${styles.LabelBad}`}>
                      Phone
                      </label>

                      <input
                      value={phone}
                      type='phone' 
                      name='phone' 
                      placeholder="Phone Number : 06 XX XX XX XX / +33 6 XX XX XX XX"
                      className={errors.phone.length === 33 && `${styles.InputLengthBad}` }
                      onChange={this.handleChange} noValidate />

                      {errors.phone.length > 0 && 
                      <span className={styles.error}>{errors.phone}</span>}
                    </div>

                    <div className={styles.subject}>
                      <label htmlFor="subject">Subject</label>
                      <input value={subject} type='text' name='subject' placeholder="Subject"onChange={this.handleChange} noValidate />
                    </div>

                    <div className={styles.message}>
                      <label 
                      htmlFor="message"
                      className={errors.message.length === 43 && `${styles.LabelBad}`}>
                      Message *
                      </label>

                      <textarea
                      value={message}
                      type='text' 
                      name='message' 
                      placeholder="Your message"
                      className={errors.message.length === 43 && `${styles.TextareaLengthBad}`}
                      onChange={this.handleChange} 
                      noValidate />

                      {errors.message.length === 43 && 
                      <span className={styles.error}>{errors.message}</span>}

                    </div>

                    <div className={styles.info}>
                      <small>* required</small>
                    </div>
                    
                    <div className={styles.submit}>
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