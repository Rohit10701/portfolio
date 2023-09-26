'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer, slideIn } from "../utils/motion.js";

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id= "aboutme">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />
      <div className="flex flex-col sm:flex-row justify-center items-center ">
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[24px] text-[16px] text-left text-secondary-white w-[100%] relative justify-center"
      >
        <span className="font-extrabold text-white">
        Aliquam 
        </span> erat volutpat. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Donec feugiat faucibus elit,
        dapibus blandit dolor. Cras ultricies, nunc non malesuada pretium, urna
        magna consectetur nunc, sit amet euismod est lectus eu nisi.
        Pellentesque erat leo, accumsan vitae nulla sit amet, ultrices efficitur
        velit. Pellentesque rhoncus, diam et porttitor rhoncus, turpis erat
        pretium dolor, sed efficitur purus diam vel arcu. Ut pretium justo ut
        elit ultrices, at tristique risus dignissim. Curabitur lacus libero,
        egestas at sapien in, fringilla sagittis ipsum. Proin tempor risus
        accumsan molestie lacinia. Donec eget tortor condimentum, tincidunt
        velit vitae, pulvinar tellus.
      </motion.p>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="relative w-full md:-mt-[20px] -mt-[12px] flex  justify-center items-center "
      >
        <img
            src="/profile_photo.png"
            alt="cover"
            className=" opacity-35 sm:h-[300px] h-[300px] sm:w-[300px] w-[300px] object-cover  z-10 relative m-10"
            />
      </motion.div>
      </div>
      <a href="#project">

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src = "/arrow-down.svg"
        alt= "arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> 
      </a>

    </motion.div>
      
  </section>
);

export default About;
