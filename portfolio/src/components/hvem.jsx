import "./hvem.scss";
import bilde from './a1.jpg';
import { motion } from "framer-motion";


console.log(bilde);

const Hvem = () => {
  const textVariants = {
    initial:{
      x:-500,
      opacity:0,
    },

    animate:{
      x:0, 
      opacity:1,
      transition:{
        duration:0.5,
        staggerChildren:2,
        type:"spring",
        bounce:1,
        stiffness: 200,
      },
    },

  };
  
  const sliderVariants = {
    initial: {
      x: "-60%",
    },
    animate: {
      x: "90%",
      transition: {
        repeat:Infinity,
        duration: 5,
        ease: "linear",
      },
    }
  };
  return (
    <>
    <div className="wrapper">
      <motion.div className="card1" initial="initial" animate="animate">
          <motion.h1 variants={textVariants}>Adrian Emil Merli</motion.h1>
          <motion.h2 variants={textVariants}>Lager nettsider og 3D-modeller...</motion.h2>
          <motion.p variants={textVariants}>fikser biler, spiller paintball, lager spill, spiller Fallout og mye mer</motion.p>
      </motion.div>
      <img variants={textVariants} id="mig" src={bilde} height="150" width="100" />


      <motion.div className="animated-roll" initial="initial" animate="animate">
        <motion.h1 variants={sliderVariants} className="slider">Django React HTML CSS Python JavaScript SQL</motion.h1>
      </motion.div>
    </div>
    </>
  )
};

export default Hvem;
