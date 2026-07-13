"use client";

import { motion } from "motion/react";

const FadeIn = ({ children }) => {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:30
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true
      }}

      transition={{
        duration:0.6
      }}

    >

      {children}

    </motion.div>

  );

};

export default FadeIn;