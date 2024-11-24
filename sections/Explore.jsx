'use client';

import { Services } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, ExploreCard, TitleText } from "../components";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const Explore = () => {

  const [active, setActive] = useState('service-2')

  return (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="Services" textStyles="text-center"/>

      <TitleText title={<>Take A Look At Our Services <br className="md:block hidden"/></>} textStyles="text-center"/>

      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">

        {Services.map((service, index) => (
          <ExploreCard
            key={service.id}
            {...service}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}

      </div>

    </motion.div>
  </section>
  )
};

export default Explore;
