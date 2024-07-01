import React, { useRef } from 'react';
import './kontakt.scss';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Kontakt = () => {
    const form = useRef();

    const formVariants = {
        initial:{
          x:-300,
          opacity:0,
      },
    
      animate:{
          x:0,
          opacity:1,
          transition:{
              duration:0.2,
              staggerChildren:0.1,
              type:"spring",
              bounce:0.2,
              stiffness:80,
          },
        },
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_uwg3cwa', 'template_qob49uk', form.current, {
                publicKey: 'jd6PSIhWJ5tWOdLnG---'
            })
            .then(
                () => {
                  console.log('SUCCESS!');
                  toast.success("Melding sendt!");
                },
                (error) => {
                  console.log('ERROR: ' + error.text);
                  toast.error("Noe gikk galt, prøv igjen eller send mail manuelt.");
                },
              );
          };
  return (
    <>
        <motion.div className="kontakt" initial="initial" whileInView="animate">
            <motion.h1 variants={formVariants}>Ta Kontakt</motion.h1>
            <motion.form variants={formVariants} ref={form} onSubmit={sendEmail}>
                <motion.label variants={formVariants}>Navn</motion.label>
                <motion.input variants={formVariants} type="text" name="user_name" placeholder='Navn' required />
                <motion.label variants={formVariants}>Email</motion.label>
                <motion.input variants={formVariants} type="email" name="user_email" placeholder='Email' required />
                <motion.label variants={formVariants}>Melding</motion.label>
                <motion.textarea variants={formVariants} name="message" placeholder='Skriv din melding her...' required/>
                <motion.input variants={formVariants} className="form-btn" type="submit" value="Send" />
            </motion.form>
                <motion.p className='extra' variants={formVariants}>Om ønskelig kan mail sendes manuelt til denne adressen: <mark>adrianemilmerli@gmail.com</mark></motion.p>
        </motion.div>
        <ToastContainer />
    </>
  );
};
