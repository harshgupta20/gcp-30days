import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_25kslyl', 'contact_form_8d4clzm', form.current, 'user_v7FRES3cpxiOWEXT2PnvX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();


      //For Notification after submit button
      toast.success("Sent Successfully 😉😉😉", {
        position:"top-right"
      });
  };

  

  return (
    <>
  <div className='app-main'>
    <h1 className='app-heading'>Welcome to Google Cloud Program<span className='app-gdsc'>(GDSC SRM University Sonepat)</span></h1>
    <h2 className='app-ask'>Ask your Google Cloud Program related questions here.</h2>
    <form ref={form} onSubmit={sendEmail}>
      <input required placeholder='Enter Your Email' type="email" name="user_email" />
      <textarea required placeholder='Your Message' name="message" />
      <input className='app-submit' type="submit" value="Send"/>
    </form>

    <p className='app-attribute'>Made by <a href='https://www.linkedin.com/in/harshgupta2001/' target='_blank'>Harsh Gupta</a> for #30DaysOfGoogleCloud at SRM University Sonepat <span className='app-whatsapp'><a href='https://chat.whatsapp.com/LwXe1yTEJ2W6Yiof4iWEbN' target='_blank'>(Click Here : Join Whatsapp Group)</a></span></p>
  </div>

    {/* For Notification after pressing submit button */}
    <ToastContainer />
    </>

  );
}

export default App;
