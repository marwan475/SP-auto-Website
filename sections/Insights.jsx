'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Absolutely amazing service! The team was professional and exceeded my expectations.",
    location: "Los Angeles, CA",
  },
  {
    name: "Jane Smith",
    feedback: "I couldn’t be happier with the results. Highly recommended!",
    location: "New York, NY",
  },
  {
    name: "Michael Brown",
    feedback: "Fast, reliable, and top-notch quality. A fantastic experience from start to finish.",
    location: "Houston, TX",
  },
];

const Insights = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 mb-8">
        <motion.div
          variants={textVariant(0.6)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading} text-red-600`}>What Our Customers Say</h1>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={textVariant(1.3 + index * 0.1)}
            className="bg-black border border-red-600 rounded-xl p-6 shadow-lg flex flex-col items-start"
          >
            <p className="text-sm text-gray-400 mb-4">
              <em>"{testimonial.feedback}"</em>
            </p>
            <div className="text-white font-bold text-lg">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.location}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;

