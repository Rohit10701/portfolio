"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion.js";
import ChangingText from "../animations/ChangingText";

const Hero = () => (
  <section className={`${styles.yPaddings} `}>
    <img
      src="/hero.png"
      alt="hero"
      className="w-full opacity-25 sm:h-[475px] h-[475px] blur-lg object-cover absolute py-[10px]"
    />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col overflow-hidden max-h-[570px] h-[570px]`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Rohit Kumar
        </motion.h1>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[200px] opacity-10 hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <div className="">
          <div className="absolute justify-center items-center h-[300px] w-full z-20">
            <motion.h1 variants={textVariant(1.2)} className="text-xs">
              <ChangingText />
            </motion.h1>
          </div>
          <img
            src="/hero.png"
            alt="hero-over"
            className="w-full opacity-35 sm:h-[350px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
        </div>
        <a href="#aboutme">
          <div className="w-full flex justify-center relative z-10">
            <img
              src="/mousescroll.png"
              alt="mouse"
              className="sm:w-[155px] w-[100px] sm:h=[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
