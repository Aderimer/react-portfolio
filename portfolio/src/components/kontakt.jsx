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
                publicKey: 'jd6PSIhWJ5tWOdLnG'
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
              <motion.div className='footer-kontakt' variants={formVariants}>
                <motion.p className='extra' variants={formVariants}>Om ønskelig kan mail sendes manuelt til denne adressen: <mark>adrianemilmerli@gmail.com</mark></motion.p>
                <motion.button variants={formVariants} id='copy-btn' onClick={async () => {
                  navigator.clipboard.writeText("adrianemilmerli@gmail.com")
                }}><svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <path d="M0 1919.887h1467.88V452.008H0v1467.88ZM1354.965 564.922v1242.051H112.914V564.922h1242.051ZM1920 0v1467.992h-338.741v-113.027h225.827V112.914H565.035V338.74H452.008V0H1920ZM338.741 1016.93h790.397V904.016H338.74v112.914Zm0 451.062h790.397v-113.027H338.74v113.027Zm0-225.588h564.57v-112.913H338.74v112.913Z" fill-rule="evenodd"/> </g>
                
                </svg></motion.button>
              </motion.div>
        </motion.div>
        <ToastContainer />
    </>
  );
};
