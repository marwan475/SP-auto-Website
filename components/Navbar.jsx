'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariant, navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants = {navVariants}
    initial = "hidden"
    whileInView = "show"
    className = {`${styles.xPaddings} py-8 relative`}
  >

    <div className="absolute w-[35%] inset-0 gradient-01"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>

      <img src="/search.svg" alt="search" className="w-[30px] h-[30px] object-contain"/>

      <img src="/logo.png" alt="logo" className="w-[170px] h-[170px] object-contain"/>

      <img src="/contact.svg" alt="contact" className="w-[40px] h-[40px] object-contain"/>

    </div>

    

  </motion.nav>
);

export default Navbar;
