import "./navbar.scss"
import {motion, transform} from "framer-motion";
import { useState } from 'react';
import Links from "./sections";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible:{opacity:1,scaleY:1,
        clipPath: "circle(2000px at 0px 0px)"
    },
    hidden:{opacity:0.5,z:0, clipPath: "circle(0px at 0px 0px"},
  }

  return (
    <div className="navbar">
            <motion.div className="bg-anim"
            variants={variants}
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            >
            <br /><br />
            <Links />
            </motion.div>
            <motion.button onClick={()=>setOpen(prev=>!prev)} animate={{rotate: [360,270,180,90]}}>| | |</motion.button>
    </div>
  );
};

export default Navbar