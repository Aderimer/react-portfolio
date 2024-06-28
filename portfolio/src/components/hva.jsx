import './hva.scss';
import { motion, inView } from 'framer-motion';

const Hva = () => {
    const cardVariants = {
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
    <motion.div initial="initial" whileInView="animate" className="hva-wrapper">
        <motion.section variants={cardVariants} className="py">
            <motion.h1 variants={cardVariants}>Python/Django</motion.h1>
            <motion.p variants={cardVariants}><mark>Django</mark> er det frameworket jeg har brukt mest. Helt siden 2020 har jeg brukt
            fritiden min av og på med å lage diverse nettsider for å lære grunnleggende webdev, samtidig som
            jeg har lært meg <mark>python</mark> for og automatisere enkle oppgaver i forbindelse med 3D-modellering i <mark>Blender.</mark></motion.p>
        </motion.section>
        <motion.section variants={cardVariants} className="rejav">
            <motion.h1 variants={cardVariants}>React/TypeScript</motion.h1>
            <motion.p variants={cardVariants}>Når det kommer til nettsider hvor hovedfokus er front-end bruker jeg React sammen med Vite.
                Nettsider som f.eks. denne har jeg også brukt TypeScript og SCSS.
            </motion.p>
        </motion.section>
        <motion.section variants={cardVariants} className='3d'>
            <motion.h1 variants={cardVariants}>3D-Modellering</motion.h1>
            <motion.p variants={cardVariants}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic error placeat, reiciendis facilis culpa pariatur!</motion.p>
        </motion.section>
        <motion.section variants={cardVariants} className='person'>
            <motion.h1 variants={cardVariants}>Om Meg</motion.h1>
            <motion.p variants={cardVariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, et!</motion.p>
        </motion.section>
    </motion.div>
  )
};

export default Hva;
