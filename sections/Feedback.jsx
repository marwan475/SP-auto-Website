'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} text-white-600`}>
          Contact
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading} text-white-600`}>Us</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="relative w-full md:mt-[20px] mt-[12px] flex justify-center"
      >
        <form
          className="bg-black rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col space-y-6 z-10 border-2 border-red-600"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-red-500"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 block w-full bg-black text-white border border-red-500 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-red-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 block w-full bg-black text-white border border-red-500 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-red-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 p-2 block w-full bg-black text-white border border-red-500 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-red-600 text-black font-semibold rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;




