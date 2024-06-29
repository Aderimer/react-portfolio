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
            <motion.p variants={cardVariants}>Når det kommer til nettsider hvor hovedfokus er front-end bruker jeg <mark>React</mark> sammen med <mark>Vite.</mark>
                Nettsider som f.eks. denne har jeg også brukt <mark>JSX</mark> og <mark>SCSS.</mark>
            </motion.p>
        </motion.section>
        <motion.section variants={cardVariants} className='3d'>
            <motion.h1 variants={cardVariants}>3D-Modellering</motion.h1>
            <motion.p variants={cardVariants}>Siden 2017 har jeg brukt mye av fritiden min på å pusle rundt med diverse ting i <mark>Blender</mark>. Nøyaktig hva det er 
            jeg har brukt tiden på er vanskelig å skrive ned, siden det er så mye forskjellig man kan bruke det til. <mark>Animasjon, SFX, hard-surfrace modellering og produkt-design </mark>
            er bare noe av de få tingene jeg har brukt det til gjennom min tid. Til webdev bruker jeg det til å rask lage bakgrunns-bilder eller
            små detaljer raskt og enkelt med høy kvalitet. Noen ganger er det ikke like lett å finne bilder som passer til visjonen, da er det beste å lage dem selv. </motion.p>
        </motion.section>
        <motion.section variants={cardVariants} className='person'>
            <motion.h1 variants={cardVariants}>Om Meg</motion.h1>
            <motion.p variants={cardVariants}>Jeg er en blid og rolig kar som liker å gjøre det meste selv. Enten det er bytte drivaksel på bilen, eller sette opp en nettside.
                <mark><em> Om jeg ikke vet hvordan noe gjøres, så veit jeg hvordan jeg kan finne det ut.</em></mark>
            </motion.p>
        </motion.section>
    </motion.div>
  )
};

export default Hva;
