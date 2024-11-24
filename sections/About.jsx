'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>

    <div className="gradient-02 z-0"/>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About S & P" textStyles="text-center"/>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white" 
      >

        Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique euismod urna vel suspendisse, odio ultrices vitae suspendisse condimentum. Curabitur malesuada vestibulum aptent montes rutrum facilisi ridiculus. Hac vel mi ante ut praesent. Adipiscing suscipit morbi tincidunt euismod non convallis nascetur. Primis suspendisse porttitor commodo.

      </motion.p>

    </motion.div>
    
  </section>
);

export default About;
