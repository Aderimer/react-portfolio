import { motion } from 'framer-motion';
import './hvor.scss';

const Hvor = () => {
  const hvorVariants = {
    initial:{
      x:-300,
      opacity:0,
  },

  animate:{
      x:0,
      opacity:1,
      transition:{
          duration:0.5,
          staggerChildren:0.5,
          type:"spring",
          bounce:0.5,
          stiffness:20,
      },
    },
  };
  return (
    <motion.div initial="initial" whileInView="animate" className='hvor-wrapper'>
        <motion.section variants={hvorVariants} className='loc'>
          <motion.h1 variants={hvorVariants}>Hvor?</motion.h1>
          <motion.p variants={hvorVariants}>Jeg holder til i Ullensaker kommune. Ideelle arbeidsplasser
            vil være i nærheten av Jessheim, Lillestrøm eller Oslo. Hjemmekontor eller
            delvis hjemmekontor er også ønsket men ikke et krav.
          </motion.p>
        </motion.section>
    </motion.div>
  )
};

export default Hvor

