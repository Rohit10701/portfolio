'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const Skill = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Tech Stack" textStyles="text-center" />
      <TitleText
        title={<>Skills encompassing front-end, back-end technologies.</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="flex  relative mt-[68px] w-full h-[550px] sm:block justify-center"
      >
        <div className="flex relative w-full h-[550px] ">
          {/* <img
            src="/skill.png"
            alt="skill"
            className={`object-fill w-full h-[550px] sm:hidden`}
          /> */}

          <div className="absolute top-[40%] right-[18%]  w-[80px] h-[80px]  p-[6px] rounded-full bg-[#5D6680] transition-transform transform hover:scale-110 hover:bg-white hover:text-gray-800 hover:shadow-lg ">
            <img src="/reactjs.png" alt="reactjs" className="w-full h-full" />
          </div>

          <div className="absolute bottom-[22%] left-[28%] w-[80px] h-[80px] p-[6px] rounded-full bg-[#5D6680] transition-transform transform hover:scale-110 hover:bg-white hover:text-gray-800 hover:shadow-lg">
            <img src="/hcj.png" alt="hcj" className="w-full h-full" />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[80px] h-[80px] p-[6px] rounded-full bg-[#5D6680] transition-transform transform hover:scale-110 hover:bg-white hover:text-gray-800 hover:shadow-lg">
            <img src="next.png" alt="next" className="w-full h-full" />
          </div>

          <div className="absolute top-[10%] right-[45%]  w-[80px] h-[80px] p-[6px] rounded-full bg-[#5D6680] transition-transform transform hover:scale-110 hover:bg-white hover:text-gray-800 hover:shadow-lg">
            <img src="/nodejs.png" alt="nodejs" className="w-full h-full" />
          </div>

          <div className="absolute bottom-[15%] left-[20%] w-[80px] h-[80px] p-[6px] rounded-full bg-[#5D6680] transition-transform transform hover:scale-110 hover:bg-white hover:text-gray-800 hover:shadow-lg">
            <img
              src="/bootstrap.png"
              alt="bootstrap"
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-[80%] left-[48%] w-[80px] h-[80px] p-[6px] rounded-full bg-[#5D6680] transition-transform transform hover:scale-110 hover:bg-white hover:text-gray-800 hover:shadow-lg">
            <img src="docker.png" alt="docker" className="w-full h-full" />
          </div>

          <div className="absolute top-[40%] left-[17%] w-[80px] h-[80px] p-[6px] rounded-full bg-[#5D6680] transition-transform transform hover:scale-110 hover:bg-white hover:text-gray-800 hover:shadow-lg">
            <img src="python.png" alt="python" className="w-full h-full" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Skill;