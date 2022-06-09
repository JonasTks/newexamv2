import React, { useRef } from 'react'
import ContactHero from '../contacthero/ContactHero';
import emailjs from '@emailjs/browser';


import './Contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fcq71jk', 'service_fcq71jk', form.current, 'EG5PH0SlEfJJqXdM9')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (

      <div>
        <ContactHero />
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="name"></input>
            <label>E-Mail</label>
            <input type="text" name="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea name="message" rows="6" placeholder='Send me a message!' />
            <button type="submit" className='btn btn-transparent' value="Send">Submit</button>
          </form>
        </div>
      </div>
  )
}

export default Contact;